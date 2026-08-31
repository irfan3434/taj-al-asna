'use client';

import { useState, useRef, useEffect } from 'react';
import { useLang } from '@/i18n/language';

interface Source {
  index: number;
  filename: string;
  score: number;
  text: string;
}

interface Message {
  role: 'user' | 'bot';
  text: string;
  sources?: Source[];
  streaming?: boolean;
  error?: boolean;
}

/** Parse one SSE block ("event: x\ndata: y") into { event, data }. */
function parseSSE(block: string): { event: string; data: string } {
  let event = 'message';
  const dataLines: string[] = [];
  for (const line of block.split('\n')) {
    if (line.startsWith(':')) continue; // comment / heartbeat
    if (line.startsWith('event:')) event = line.slice(6).trim();
    else if (line.startsWith('data:')) dataLines.push(line.slice(5).replace(/^ /, ''));
  }
  return { event, data: dataLines.join('\n') };
}

export default function AssistantView() {
  const { lang } = useLang();
  // Re-key on language so the chat resets to the new-language greeting (no effect needed).
  return <AssistantChat key={lang} />;
}

function AssistantChat() {
  const { t, isAr, lang } = useLang();

  const greeting = t({
    ar: 'السلام عليكم ورحمة الله. أنا مساعدك المعرفي في التاج الأسنى — اسألني عن أيّ اسمٍ من أسماء الله الحسنى.',
    en: 'Peace be upon you. I am your knowledge assistant at Taj Al Asna — ask me about any of the Beautiful Names of Allah.',
  });

  const [chat, setChat] = useState<Message[]>([{ role: 'bot', text: greeting }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chat]);

  /** Patch the most recent bot message (the streaming one). */
  function patchLastBot(patch: Partial<Message>) {
    setChat((prev) => {
      const next = [...prev];
      for (let i = next.length - 1; i >= 0; i--) {
        if (next[i].role === 'bot') {
          next[i] = { ...next[i], ...patch };
          break;
        }
      }
      return next;
    });
  }

  async function send(raw: string) {
    const text = raw.trim();
    if (!text || busy) return;
    setInput('');
    setBusy(true);
    setChat((prev) => [
      ...prev,
      { role: 'user', text },
      { role: 'bot', text: '', streaming: true },
    ]);

    const errorText = t({
      ar: 'تعذّر الحصول على إجابة الآن. حاول مرة أخرى بعد قليل.',
      en: 'Could not get an answer right now. Please try again shortly.',
    });

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text, lang }),
      });

      if (res.status === 503) {
        patchLastBot({
          text: t({
            ar: 'المساعد الذكي غير متّصل بعد. سيتم تفعيله فور ربطه بمحرّك المعرفة.',
            en: 'The smart assistant isn’t connected yet. It will work once the knowledge engine is linked.',
          }),
          streaming: false,
          error: true,
        });
        return;
      }
      if (!res.ok || !res.body) {
        patchLastBot({ text: errorText, streaming: false, error: true });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let answer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let sep: number;
        while ((sep = buffer.indexOf('\n\n')) !== -1) {
          const block = buffer.slice(0, sep);
          buffer = buffer.slice(sep + 2);
          const { event, data } = parseSSE(block);
          if (!data) continue;

          if (event === 'meta') {
            try {
              const meta = JSON.parse(data) as { sources?: Source[] };
              patchLastBot({ sources: meta.sources ?? [] });
            } catch { /* ignore malformed meta */ }
          } else if (event === 'delta') {
            try {
              const d = JSON.parse(data) as { text?: string };
              answer += d.text ?? '';
              patchLastBot({ text: answer });
            } catch { /* ignore malformed delta */ }
          } else if (event === 'error') {
            patchLastBot({ text: answer || errorText, streaming: false, error: true });
          }
        }
      }
      patchLastBot({ text: answer, streaming: false });
    } catch {
      patchLastBot({ text: errorText, streaming: false, error: true });
    } finally {
      setBusy(false);
    }
  }

  const suggestions = isAr
    ? ['ما معنى اسم الرحمن؟', 'حدّثني عن اسم العليم', 'الفرق بين الرحمن والرحيم']
    : ['What does Ar-Rahman mean?', 'Tell me about Al-Alim', 'Ar-Rahman vs Ar-Raheem'];

  return (
    <main className="max-w-[840px] mx-auto px-4 md:px-7 pt-8 md:pt-10 pb-12 md:pb-[60px]">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-grid place-items-center w-[60px] h-[60px] rounded-[18px] bg-gradient-to-br from-primary to-primary-mid text-[28px] text-secondary-light mb-3 animate-[taj-pulse_3s_ease-in-out_infinite]">
          &#x2726;
        </div>
        <h1 className={`${isAr ? 'font-amiri' : 'font-cormorant'} text-[28px] md:text-4xl text-primary m-0`}>
          {t({ ar: 'المساعد المعرفي الذكي', en: 'The Smart Knowledge Assistant' })}
        </h1>
        <p className="text-text-muted mt-1.5">
          {t({
            ar: 'اسأل عن أسماء الله الحسنى ومعانيها — إجابات مؤصّلة بالمصادر',
            en: 'Ask about the Beautiful Names of Allah — answers grounded in the sources',
          })}
        </p>
      </div>

      {/* Chat container */}
      <div className="bg-cream-light border border-border rounded-[20px] overflow-hidden shadow-[0_16px_44px_rgba(13,70,52,0.08)]">
        {/* Messages */}
        <div ref={chatRef} className="h-[320px] md:h-[420px] overflow-y-auto p-4 md:p-6 flex flex-col gap-4">
          {chat.map((msg, i) => {
            const isUser = msg.role === 'user';
            return (
              <div key={i} className={`flex gap-3 items-start ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div
                  className={`shrink-0 w-[38px] h-[38px] rounded-full grid place-items-center text-[13px] ${
                    isUser ? 'bg-primary text-secondary-light' : 'bg-cream-warm text-secondary-dark'
                  }`}
                >
                  {isUser ? t({ ar: 'أنا', en: 'You' }) : '✦'}
                </div>

                {/* Bubble */}
                <div className={`flex flex-col gap-2 ${isUser ? 'items-end' : 'items-start'} max-w-[82%]`}>
                  <div
                    className={`px-[18px] py-[13px] rounded-2xl text-base leading-[1.85] whitespace-pre-line ${
                      isUser
                        ? 'bg-primary text-text-light'
                        : msg.error
                          ? 'bg-cream-warm text-text-body border border-secondary/40'
                          : 'bg-cream-warm text-text-body border border-border'
                    }`}
                  >
                    {msg.streaming && !msg.text ? <TypingDots /> : msg.text}
                    {msg.streaming && msg.text && <span className="inline-block w-1.5 animate-[taj-pulse_1s_ease-in-out_infinite]">▍</span>}
                  </div>

                  {/* Citations */}
                  {!isUser && msg.sources && msg.sources.length > 0 && (
                    <details className="w-full bg-cream-light border border-border rounded-xl px-3.5 py-2 text-sm">
                      <summary className="cursor-pointer text-secondary-dark font-naskh select-none">
                        {t({ ar: 'المصادر', en: 'Sources' })} ({msg.sources.length})
                      </summary>
                      <ol className="mt-2 flex flex-col gap-2 list-none p-0">
                        {msg.sources.map((s) => (
                          <li key={s.index} className="border-t border-border pt-2 first:border-t-0 first:pt-0">
                            <div className="flex items-center gap-2 text-secondary-dark">
                              <span className="shrink-0 w-5 h-5 grid place-items-center rounded-full bg-secondary/15 text-[11px] font-cormorant">
                                {s.index}
                              </span>
                              <span className="font-naskh text-[13px] font-semibold text-primary truncate">{s.filename}</span>
                            </div>
                            <p className="mt-1 text-[13px] leading-[1.7] text-text-muted line-clamp-3">{s.text}</p>
                          </li>
                        ))}
                      </ol>
                    </details>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input row */}
        <div className="border-t border-border p-2.5 md:p-3.5 flex gap-2 md:gap-2.5 bg-[#fbf6e9]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') send(input); }}
            disabled={busy}
            placeholder={t({ ar: 'مثال: ما معنى اسم الرحمن؟', en: 'e.g. What does Ar-Rahman mean?' })}
            className="flex-1 min-w-0 border border-border rounded-xl outline-none bg-cream-light font-naskh text-sm md:text-base text-text-body px-3 md:px-4 py-2.5 md:py-3 focus:border-secondary transition-colors disabled:opacity-60"
          />
          <button
            onClick={() => send(input)}
            disabled={busy || !input.trim()}
            className="shrink-0 bg-gradient-to-br from-primary to-primary-mid text-secondary-light border-none rounded-xl px-4 md:px-6 py-2.5 md:py-3 font-naskh text-sm md:text-[15px] font-semibold cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {busy ? t({ ar: '…', en: '…' }) : t({ ar: 'إرسال', en: 'Send' })}
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex gap-2.5 flex-wrap justify-center mt-[18px]">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            disabled={busy}
            className="bg-cream-light border border-border text-primary rounded-[20px] px-4 py-2 font-naskh text-sm cursor-pointer hover:border-secondary hover:text-secondary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {s}
          </button>
        ))}
      </div>
    </main>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-secondary-dark/70"
          style={{ animation: `taj-pulse 1s ${i * 0.2}s ease-in-out infinite` }}
        />
      ))}
    </span>
  );
}
