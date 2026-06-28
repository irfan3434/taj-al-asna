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
    <main style={{ maxWidth: 840, margin: '0 auto', padding: '40px 28px 60px' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{
          display: 'inline-grid', placeItems: 'center', width: 60, height: 60,
          borderRadius: 18, background: 'linear-gradient(135deg, #0d4634, #082a1f)',
          fontSize: 28, color: '#e7cd86', marginBottom: 12, animation: 'taj-pulse 3s ease-in-out infinite'
        }}>&#x2726;</div>
        <h1 style={{ fontFamily: "'Amiri', serif", fontSize: 36, color: '#0d4634', margin: 0 }}>المساعد المعرفي الذكي</h1>
        <p style={{ color: '#5d6b62', margin: '6px 0 0' }}>اسأل عن أيّ اسمٍ من أسماء الله الحسنى ومعانيه</p>
      </div>

      <div style={{
        background: '#fffdf7', border: '1px solid #e6d8b4', borderRadius: 20,
        overflow: 'hidden', boxShadow: '0 16px 44px #0d463414'
      }}>
        <div ref={chatRef} style={{
          height: 420, overflowY: 'auto', padding: 24,
          display: 'flex', flexDirection: 'column', gap: 16
        }}>
          {chat.map((msg, i) => {
            const isUser = msg.role === 'user';
            return (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                flexDirection: isUser ? 'row-reverse' : 'row'
              }}>
                <div style={{
                  flex: 'none', width: 38, height: 38, borderRadius: '50%',
                  display: 'grid', placeItems: 'center', fontSize: 15,
                  background: isUser ? '#0d4634' : '#f3ecd8',
                  color: isUser ? '#e7cd86' : '#a87b2c'
                }}>{isUser ? 'أنا' : '✦'}</div>
                <div style={{
                  maxWidth: '78%', padding: '13px 18px', borderRadius: 16,
                  fontSize: 16, lineHeight: 1.85, whiteSpace: 'pre-line',
                  background: isUser ? '#0d4634' : '#f6efdc',
                  color: isUser ? '#f3ead4' : '#23302a',
                  border: isUser ? 'none' : '1px solid #e6d8b4'
                }}>{msg.text}</div>
              </div>
            );
          })}
        </div>

        <div style={{
          borderTop: '1px solid #e6d8b4', padding: 14,
          display: 'flex', gap: 10, background: '#fbf6e9'
        }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') send(input); }}
            placeholder="مثال: ما معنى اسم الرحمن؟"
            style={{
              flex: 1, border: '1px solid #e6d8b4', borderRadius: 12,
              outline: 'none', background: '#fffdf7',
              fontFamily: "'Noto Naskh Arabic', serif", fontSize: 16,
              color: '#23302a', padding: '12px 16px'
            }}
          />
          <button onClick={() => send(input)} style={{
            background: 'linear-gradient(135deg, #0d4634, #082a1f)',
            color: '#e7cd86', border: 'none', borderRadius: 12, padding: '12px 24px',
            fontFamily: "'Noto Naskh Arabic', serif", fontSize: 15, fontWeight: 600, cursor: 'pointer'
          }}>إرسال</button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 18 }}>
        {suggestions.map(s => (
          <button key={s} onClick={() => send(s)} style={{
            background: '#fffdf7', border: '1px solid #e6d8b4', color: '#0d4634',
            borderRadius: 20, padding: '8px 16px',
            fontFamily: "'Noto Naskh Arabic', serif", fontSize: 14, cursor: 'pointer'
          }}>{s}</button>
        ))}
      </div>
    </main>
  );
}
