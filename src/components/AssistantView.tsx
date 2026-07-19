'use client';

import { useState, useRef, useEffect } from 'react';
import { NameData } from '@/data/names';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface AssistantViewProps {
  names: NameData[];
}

export default function AssistantView({ names }: AssistantViewProps) {
  const [chat, setChat] = useState<Message[]>([
    { role: 'bot', text: 'السلام عليكم ورحمة الله. أنا مساعدك المعرفي في التاج الأسنى — اسألني عن أيّ اسمٍ من أسماء الله الحسنى.' }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chat]);

  function botReply(text: string): string {
    const t = text.toLowerCase();
    const hit = names.find(n =>
      text.includes(n.ar.replace(/[ًٌٍَُِّْ]/g, '')) ||
      t.includes(n.tr.toLowerCase()) ||
      t.includes(n.en.toLowerCase())
    );
    if (hit) return `${hit.ar} (${hit.tr}) — ${hit.en}.\n${hit.da}\nاضغط على تبويب «الأسماء الحسنى» لاستكشاف هذا الاسم وشواهده كاملةً.`;
    return 'الأسماء الحسنى تسعةٌ وتسعون اسماً، من أحصاها دخل الجنة. اذكر لي اسماً بعينه — مثل «الرحمن» أو «العليم» — لأوضّح لك معناه ودلالته.';
  }

  function send(text: string) {
    if (!text.trim()) return;
    const reply = botReply(text.trim());
    setChat(prev => [...prev, { role: 'user', text: text.trim() }, { role: 'bot', text: reply }]);
    setInput('');
  }

  const suggestions = ['ما معنى اسم الرحمن؟', 'حدّثني عن اسم العليم', 'الفرق بين الرحمن والرحيم'];

  return (
    <main className="max-w-[840px] mx-auto px-4 md:px-7 pt-8 md:pt-10 pb-12 md:pb-[60px]">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-grid place-items-center w-[60px] h-[60px] rounded-[18px] bg-gradient-to-br from-primary to-primary-mid text-[28px] text-secondary-light mb-3 animate-[taj-pulse_3s_ease-in-out_infinite]">
          &#x2726;
        </div>
        <h1 className="font-amiri text-[28px] md:text-4xl text-primary m-0">المساعد المعرفي الذكي</h1>
        <p className="text-text-muted mt-1.5">اسأل عن أيّ اسمٍ من أسماء الله الحسنى ومعانيه</p>
      </div>

      {/* Chat container */}
      <div className="bg-cream-light border border-border rounded-[20px] overflow-hidden shadow-[0_16px_44px_rgba(13,70,52,0.08)]">
        {/* Messages */}
        <div
          ref={chatRef}
          className="h-[320px] md:h-[420px] overflow-y-auto p-4 md:p-6 flex flex-col gap-4"
        >
          {chat.map((msg, i) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={i}
                className={`flex gap-3 items-start ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div
                  className={`shrink-0 w-[38px] h-[38px] rounded-full grid place-items-center text-[15px] ${
                    isUser
                      ? 'bg-primary text-secondary-light'
                      : 'bg-cream-warm text-secondary-dark'
                  }`}
                >
                  {isUser ? 'أنا' : '✦'}
                </div>
                {/* Bubble */}
                <div
                  className={`max-w-[78%] px-[18px] py-[13px] rounded-2xl text-base leading-[1.85] whitespace-pre-line ${
                    isUser
                      ? 'bg-primary text-text-light'
                      : 'bg-cream-warm text-text-body border border-border'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input row */}
        <div className="border-t border-border p-2.5 md:p-3.5 flex gap-2 md:gap-2.5 bg-[#fbf6e9]">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') send(input); }}
            placeholder="مثال: ما معنى اسم الرحمن؟"
            className="flex-1 min-w-0 border border-border rounded-xl outline-none bg-cream-light font-naskh text-sm md:text-base text-text-body px-3 md:px-4 py-2.5 md:py-3 focus:border-secondary transition-colors"
          />
          <button
            onClick={() => send(input)}
            className="shrink-0 bg-gradient-to-br from-primary to-primary-mid text-secondary-light border-none rounded-xl px-4 md:px-6 py-2.5 md:py-3 font-naskh text-sm md:text-[15px] font-semibold cursor-pointer hover:opacity-90 transition-opacity"
          >
            إرسال
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex gap-2.5 flex-wrap justify-center mt-[18px]">
        {suggestions.map(s => (
          <button
            key={s}
            onClick={() => send(s)}
            className="bg-cream-light border border-border text-primary rounded-[20px] px-4 py-2 font-naskh text-sm cursor-pointer hover:border-secondary hover:text-secondary-dark transition-colors"
          >
            {s}
          </button>
        ))}
      </div>
    </main>
  );
}
