// Login.js — Single sign-in. Starbucks-inspired: House Green feature band
// on the left (the signature dark-green moment), cream-right form with
// 50px pill inputs/CTA. Gold ★ badge for the brand year.

window.PageLogin = function ({ onLogin }) {
  const [user, setUser] = React.useState('admin');
  const [pass, setPass] = React.useState('••••••••');

  return React.createElement('div', {
    style: {
      height: '100vh', display: 'flex', background: T.bg, fontFamily: T.font,
      overflow: 'hidden', letterSpacing: '-0.01em'
    }
  },
    // ── Left: House Green feature band (signature Starbucks dark moment) ──
    React.createElement('div', {
      style: {
        flex: '1 1 52%',
        background: T.houseGreen,
        position: 'relative', color: '#FFFFFF', padding: '64px 72px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        overflow: 'hidden'
      }
    },
      // Subtle decorative Green Uplift circles
      React.createElement('div', {
        style: {
          position: 'absolute', right: -160, top: -160, width: 460, height: 460,
          background: T.sbxUplift, borderRadius: '50%', opacity: 0.7
        }
      }),
      React.createElement('div', {
        style: {
          position: 'absolute', left: -120, bottom: -180, width: 360, height: 360,
          background: T.sbxAccent, borderRadius: '50%', opacity: 0.18
        }
      }),

      // Logo + brand — Siren-style circular disc
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14, position: 'relative' } },
        React.createElement('div', {
          style: {
            width: 52, height: 52, background: '#FFFFFF', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: T.sbxGreen,
            fontSize: 18, fontWeight: 700, letterSpacing: '-0.04em'
          }
        }, 'MQ'),
        React.createElement('div', { style: { lineHeight: 1.2 } },
          React.createElement('div', {
            style: { fontWeight: 700, fontSize: 22, color: '#FFFFFF', letterSpacing: '-0.01em' }
          }, 'MQtex BMS'),
          React.createElement('div', {
            style: { fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4,
              fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }
          }, 'Business Management System')
        )
      ),

      // Hero message
      React.createElement('div', { style: { position: 'relative', maxWidth: 540 } },
        // Gold ★ rewards-like badge
        React.createElement('span', {
          style: {
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', background: 'transparent', color: T.sbxGold,
            borderRadius: 'var(--r-pill)', fontSize: 11.5, fontWeight: 700,
            letterSpacing: '0.04em', marginBottom: 22,
            boxShadow: `inset 0 0 0 1px ${T.sbxGold}`
          }
        },
          React.createElement('span', null, '★'),
          'CÔNG TY TNHH SÀI GÒN MQTEX'
        ),
        React.createElement('h1', {
          style: {
            fontFamily: T.font,
            fontSize: 48, fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.025em', margin: 0, color: '#FFFFFF'
          }
        }, 'Kinh doanh hôm nay, nhẹ nhàng hơn.'),
        React.createElement('p', {
          style: {
            fontSize: 17, color: 'rgba(255,255,255,0.75)', marginTop: 20, lineHeight: 1.5,
            fontWeight: 400, letterSpacing: '-0.01em'
          }
        }, 'Tiếp nối hệ thống cũ — giữ cột quen, thêm tốc độ và báo cáo. Cà phê cho tâm trí kế toán.')
      ),

      // Footer
      React.createElement('div', {
        style: { display: 'flex', gap: 28, fontSize: 11, color: 'rgba(255,255,255,0.55)',
          position: 'relative', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }
      },
        React.createElement('span', null, '© 2026 MQTEX'),
        React.createElement('span', null, 'V6.0'),
        React.createElement('span', null, 'MINHQUANTEX.COM')
      )
    ),

    // ── Right: sign-in form (Cream canvas) ──────────────────────
    React.createElement('div', {
      style: {
        flex: '1 1 48%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 40, background: T.bg
      }
    },
      React.createElement('div', {
        style: {
          width: '100%', maxWidth: 400, padding: 40,
          background: T.surface, borderRadius: 'var(--r-md)',
          boxShadow: T.whisper
        }
      },
        React.createElement('div', {
          style: { fontSize: 11, color: T.textMute, marginBottom: 12,
            fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }
        }, 'Đăng nhập'),
        React.createElement('h2', {
          style: {
            fontSize: 28, fontWeight: 700, color: T.sbxGreen, margin: 0,
            letterSpacing: '-0.02em', lineHeight: 1.2
          }
        }, 'Chào mừng trở lại'),
        React.createElement('p', {
          style: {
            fontSize: 14, color: T.textMute, margin: '8px 0 32px',
            fontWeight: 400, lineHeight: 1.5, letterSpacing: '-0.01em'
          }
        }, 'Nhập tài khoản kế toán để vào hệ thống.'),

        // Username — Starbucks-like rectangle input (4px radius, full border)
        React.createElement('div', { style: { marginBottom: 16 } },
          React.createElement('label', {
            style: { display: 'block', fontSize: 11, fontWeight: 700, color: T.text,
              marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }
          }, 'Tên đăng nhập'),
          React.createElement('input', {
            value: user, onChange: e => setUser(e.target.value),
            onFocus: e => { e.target.style.borderColor = T.sbxAccent; },
            onBlur:  e => { e.target.style.borderColor = T.border; },
            style: {
              width: '100%', height: 46, fontSize: 15, padding: '0 14px',
              border: `1px solid ${T.border}`, borderRadius: 'var(--r-sm)',
              background: T.surface, color: T.text, fontFamily: T.font,
              outline: 'none', transition: 'border-color .15s',
              fontWeight: 500, letterSpacing: '-0.01em'
            }
          })
        ),
        // Password
        React.createElement('div', { style: { marginBottom: 28 } },
          React.createElement('label', {
            style: { display: 'block', fontSize: 11, fontWeight: 700, color: T.text,
              marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }
          }, 'Mật khẩu'),
          React.createElement('input', {
            type: 'password', value: pass, onChange: e => setPass(e.target.value),
            onFocus: e => { e.target.style.borderColor = T.sbxAccent; },
            onBlur:  e => { e.target.style.borderColor = T.border; },
            style: {
              width: '100%', height: 46, fontSize: 15, padding: '0 14px',
              border: `1px solid ${T.border}`, borderRadius: 'var(--r-sm)',
              background: T.surface, color: T.text, fontFamily: T.font,
              outline: 'none', transition: 'border-color .15s',
              fontWeight: 500, letterSpacing: '-0.01em'
            }
          })
        ),

        // Primary CTA — 50px pill, Green Accent
        React.createElement('button', {
          onClick: () => onLogin(),
          onMouseEnter: e => e.currentTarget.style.background = T.sbxHover,
          onMouseLeave: e => e.currentTarget.style.background = T.sbxAccent,
          style: {
            width: '100%', padding: '13px', background: T.sbxAccent, color: '#FFFFFF',
            border: 'none', borderRadius: 'var(--r-pill)', fontSize: 15, fontWeight: 600,
            cursor: 'pointer', fontFamily: T.font, letterSpacing: '-0.01em',
            transition: 'background .2s ease, transform .12s ease'
          }
        }, 'Đăng nhập'),

        React.createElement('div', {
          style: {
            marginTop: 24, padding: 14, background: T.sbxGoldLightest,
            borderRadius: 'var(--r-sm)', fontSize: 13, color: T.textMid,
            lineHeight: 1.55, fontWeight: 400, letterSpacing: '-0.01em'
          }
        },
          React.createElement('span', {
            style: { color: T.sbxGold, marginRight: 8, fontSize: 12, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.06em' }
          }, '★ Demo ·'),
          'Bấm "Đăng nhập" để vào hệ thống. Vai trò Kế toán / Bán hàng có thể xem thử bằng nút chuyển vai trò ở góc phải thanh tiêu đề.'
        )
      )
    )
  );
};
