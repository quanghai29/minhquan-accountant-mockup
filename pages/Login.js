// pages/Login.js
window.PageLogin = function({ onLogin }) {
  const acc = T.accent;
  const [user, setUser] = React.useState('admin');
  const [pass, setPass] = React.useState('');

  return React.createElement('div', { style:{ height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:`linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #134e4a 100%)`, fontFamily:"'Be Vietnam Pro',sans-serif" } },
    React.createElement('div', { style:{ width:400, background:'#fff', borderRadius:16, padding:'40px 36px', boxShadow:'0 25px 80px rgba(0,0,0,0.35)' } },
      // Logo
      React.createElement('div', { style:{ display:'flex', alignItems:'center', gap:10, marginBottom:28 } },
        React.createElement('div', { style:{ width:40, height:40, background:`linear-gradient(135deg,${acc},${acc}bb)`, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 4px 12px ${acc}50` } },
          React.createElement(Ic, { name:'kho', size:20, color:'#fff' })
        ),
        React.createElement('div', null,
          React.createElement('div', { style:{ fontSize:18, fontWeight:800, color:'#111' } }, 'BMS'),
          React.createElement('div', { style:{ fontSize:11, color:'#9ca3af' } }, 'Business Management System')
        )
      ),
      React.createElement('h2', { style:{ fontSize:22, fontWeight:700, color:'#111', margin:'0 0 6px' } }, 'Đăng nhập'),
      React.createElement('p', { style:{ fontSize:13, color:'#9ca3af', marginBottom:28 } }, 'Nhập thông tin tài khoản để tiếp tục'),
      // Fields
      React.createElement('div', { style:{ marginBottom:14 } },
        React.createElement('label', { style:{ fontSize:12.5, fontWeight:500, color:'#374151', display:'block', marginBottom:5 } }, 'Tên đăng nhập'),
        React.createElement('input', { value:user, onChange:e=>setUser(e.target.value), placeholder:'admin', style:{ ...sharedInput, height:40 } })
      ),
      React.createElement('div', { style:{ marginBottom:24 } },
        React.createElement('label', { style:{ fontSize:12.5, fontWeight:500, color:'#374151', display:'block', marginBottom:5 } }, 'Mật khẩu'),
        React.createElement('input', { type:'password', value:pass, onChange:e=>setPass(e.target.value), placeholder:'••••••••', style:{ ...sharedInput, height:40 }, onKeyDown:e=>{ if(e.key==='Enter') onLogin(); } })
      ),
      React.createElement('button', {
        onClick: onLogin,
        style:{ width:'100%', padding:'11px', border:'none', borderRadius:8, background:acc, color:'#fff', fontSize:14, fontWeight:700, cursor:'pointer', fontFamily:"'Be Vietnam Pro',sans-serif", boxShadow:`0 4px 14px ${acc}50` }
      }, 'Đăng nhập'),
      React.createElement('p', { style:{ textAlign:'center', fontSize:12, color:'#9ca3af', marginTop:20 } }, 'CÔNG TY TNHH SÀI GÒN MQTEX · 2024')
    )
  );
};
