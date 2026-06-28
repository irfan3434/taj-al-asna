export default function Footer() {
  return (
    <footer style={{
      background: '#062017', color: '#9fb0a4', padding: '40px 28px',
      borderTop: '1px solid #c9a24b33', textAlign: 'center'
    }}>
      <div style={{ fontFamily: "'Amiri', serif", fontSize: 22, color: '#e7cd86' }}>
        معاً نبني منظومة معرفية عالمية
      </div>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 13,
        letterSpacing: 3, color: '#c9a24b', marginTop: 6, textTransform: 'uppercase'
      }}>
        Together We Build The Future
      </div>
      <div style={{ fontSize: 13, marginTop: 18, color: '#6f8077' }}>
        التاج الأسنى &middot; وقف السنن العالمي &middot; نموذج أولي تفاعلي
      </div>
    </footer>
  );
}
