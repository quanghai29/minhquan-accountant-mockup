// Layout.js — App shell: header + icon sidebar + sub-nav panel + main
// Starbucks-inspired: cream canvas, 4-tier green system, 50px pills,
// triple-layer nav shadow, Green-Light active states, Frap floating CTA.

window.Layout = function ({ page, setPage, role, setRole, onLogout, children }) {
  const nav = window.navForRole(role);

  // Determine active module
  const activeModule = window.SUB_TO_PARENT[page] || page;
  const mod = nav.find(n => n.key === activeModule) || nav[0];

  const goto = (key) => setPage(key);
  const roleInfo = window.ROLES.find(r => r.key === role) || window.ROLES[0];

  const [roleOpen, setRoleOpen] = React.useState(false);

  return React.createElement('div', {
    style: {
      display: 'flex', height: '100vh', flexDirection: 'column',
      fontFamily: T.font, background: T.bg, letterSpacing: '-0.01em'
    }
  },
    // ── Top header (triple-layer Starbucks nav shadow) ──────────────
    React.createElement('div', {
      style: {
        height: 64, background: T.surface, display: 'flex', alignItems: 'center',
        padding: '0 28px', gap: 20, flexShrink: 0,
        boxShadow: T.shadowNav, zIndex: 10, position: 'relative'
      }
    },
      // Logo + brand — circular Starbucks disc
      React.createElement('div', {
        style: { display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' },
        onClick: () => goto('dashboard')
      },
        React.createElement(LogoMark, { size: 36 }),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', lineHeight: 1.1 } },
          React.createElement('span', {
            style: { fontFamily: T.font, color: T.text, fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }
          }, 'MQtex BMS'),
          React.createElement('span', {
            style: { color: T.textMute, fontSize: 11, marginTop: 2, fontWeight: 400, letterSpacing: '-0.01em' }
          }, 'Business Management')
        )
      ),
      React.createElement('div', { style: { width: 1, height: 28, background: T.border } }),

      // Company + year
      React.createElement('div', {
        style: { display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }
      },
        React.createElement('span', { style: { fontSize: 14, color: T.text, fontWeight: 500, letterSpacing: '-0.01em' } },
          'CÔNG TY TNHH SÀI GÒN MQTEX'),
        React.createElement(Ic, { name: 'chevdown', size: 12, color: T.textMute, strokeWidth: 2 })
      ),
      // NĂM 2026 — Starbucks-style gold-outlined "rewards-like" pill
      React.createElement('span', {
        style: {
          padding: '4px 12px', background: 'transparent', color: T.sbxGold,
          borderRadius: 'var(--r-pill)', fontSize: 12, fontWeight: 700,
          letterSpacing: '-0.01em',
          boxShadow: `inset 0 0 0 1px ${T.sbxGold}`,
          display: 'inline-flex', alignItems: 'center', gap: 5
        }
      },
        React.createElement('span', { style: { color: T.sbxGold, fontSize: 11 } }, '★'),
        'NĂM 2026'
      ),

      React.createElement('div', { style: { flex: 1 } }),

      // Global search — full pill (Starbucks 50px)
      React.createElement('div', {
        style: {
          display: 'flex', alignItems: 'center', gap: 8, padding: '8px 18px',
          background: T.surface,
          boxShadow: `inset 0 0 0 1px ${T.border}`,
          borderRadius: 'var(--r-pill)', minWidth: 320
        }
      },
        React.createElement(Ic, { name: 'search', size: 14, color: T.textMute, strokeWidth: 2 }),
        React.createElement('input', {
          placeholder: 'Tìm kiếm chứng từ, khách hàng, hàng hóa...',
          style: {
            border: 'none', outline: 'none', fontSize: 14,
            background: 'transparent', flex: 1, fontFamily: T.font, color: T.text,
            fontWeight: 400, letterSpacing: '-0.01em'
          }
        })
      ),

      // Bell + Role switcher
      React.createElement('div', { style: { display: 'flex', gap: 12, alignItems: 'center', marginLeft: 4 } },
        React.createElement('button', {
          style: {
            position: 'relative', width: 40, height: 40, borderRadius: '50%',
            background: 'transparent', border: 'none',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .15s'
          },
          onMouseEnter: e => e.currentTarget.style.background = T.surface2,
          onMouseLeave: e => e.currentTarget.style.background = 'transparent'
        },
          React.createElement(Ic, { name: 'bell', size: 18, color: T.text, strokeWidth: 2 }),
          React.createElement('div', {
            style: {
              position: 'absolute', top: 9, right: 11, width: 8, height: 8,
              background: T.sbxAccent, borderRadius: '50%',
              boxShadow: `0 0 0 2px ${T.surface}`
            }
          })
        ),

        // Role pill dropdown — Starbucks full pill
        React.createElement('div', { style: { position: 'relative' } },
          React.createElement('button', {
            onClick: () => setRoleOpen(o => !o),
            style: {
              display: 'flex', alignItems: 'center', gap: 9, padding: '4px 14px 4px 4px',
              background: T.sbxLight, border: 'none',
              borderRadius: 'var(--r-pill)', cursor: 'pointer', fontFamily: T.font,
              transition: 'background .15s'
            }
          },
            React.createElement('div', {
              style: {
                width: 30, height: 30, background: T.sbxGreen,
                borderRadius: '50%', color: '#FFFFFF',
                fontSize: 12, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                letterSpacing: '-0.02em'
              }
            }, roleInfo.short),
            React.createElement('span', { style: { fontSize: 14, fontWeight: 600, color: T.sbxGreen, letterSpacing: '-0.01em' } },
              roleInfo.label),
            React.createElement(Ic, { name: 'chevdown', size: 12, color: T.sbxGreen, strokeWidth: 2 })
          ),
          roleOpen && React.createElement('div', {
            style: {
              position: 'absolute', top: 'calc(100% + 8px)', right: 0,
              background: T.surfaceAlt, borderRadius: 'var(--r-md)',
              boxShadow: T.shadowNav, minWidth: 240, overflow: 'hidden', zIndex: 20
            }
          },
            React.createElement('div', {
              style: { padding: '14px 18px 10px', fontSize: 11, color: T.textMute,
                fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }
            }, 'Chuyển vai trò (xem thử)'),
            window.ROLES.map(r => React.createElement('button', {
              key: r.key,
              onClick: () => { setRole(r.key); setRoleOpen(false); },
              style: {
                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 18px', border: 'none',
                background: r.key === role ? T.sbxLight : 'transparent',
                color: r.key === role ? T.sbxGreen : T.text,
                fontSize: 14, fontWeight: r.key === role ? 600 : 500,
                fontFamily: T.font, cursor: 'pointer', textAlign: 'left',
                letterSpacing: '-0.01em'
              },
              onMouseEnter: e => { if (r.key !== role) e.currentTarget.style.background = T.surface2; },
              onMouseLeave: e => { if (r.key !== role) e.currentTarget.style.background = 'transparent'; }
            },
              React.createElement(Ic, { name: r.icon, size: 16, color: 'currentColor', strokeWidth: 2 }),
              r.label,
              r.key === role && React.createElement('span', {
                style: { marginLeft: 'auto', color: T.sbxAccent }
              }, React.createElement(Ic, { name: 'check', size: 15, color: 'currentColor', strokeWidth: 2.5 }))
            )),
            React.createElement('div', { style: { height: 1, background: T.border } }),
            React.createElement('button', {
              onClick: () => { setRoleOpen(false); onLogout(); },
              style: {
                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 18px', border: 'none', background: 'transparent',
                color: T.textMute, fontSize: 14, fontFamily: T.font, cursor: 'pointer', textAlign: 'left',
                letterSpacing: '-0.01em', fontWeight: 500
              }
            },
              React.createElement(Ic, { name: 'logout', size: 15, color: 'currentColor', strokeWidth: 2 }),
              'Đăng xuất'
            )
          )
        )
      )
    ),

    // ── Body ────────────────────────────────────────────────────────
    React.createElement('div', { style: { display: 'flex', flex: 1, overflow: 'hidden' } },

      // Icon sidebar — circular icons per Figma
      React.createElement('div', {
        style: {
          width: 68, background: T.surface, display: 'flex', flexDirection: 'column',
          alignItems: 'center', flexShrink: 0,
          borderRight: `1px solid ${T.border}`, padding: '12px 0', gap: 4
        }
      },
        nav.map(item => {
          const isActive = item.key === activeModule;
          return React.createElement('div', {
            key: item.key, title: item.label,
            onClick: () => item.subs ? goto(item.subs[0].key) : goto(item.key),
            style: {
              width: 46, height: 46, display: 'flex', alignItems: 'center',
              justifyContent: 'center', borderRadius: '50%', cursor: 'pointer',
              background: isActive ? T.sbxLight : 'transparent',
              color: isActive ? T.sbxGreen : T.textMute,
              transition: 'all .15s', position: 'relative', flexShrink: 0
            },
            onMouseEnter: e => { if (!isActive) { e.currentTarget.style.background = T.surface2; e.currentTarget.style.color = T.text; } },
            onMouseLeave: e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.textMute; } }
          },
            React.createElement(Ic, { name: item.icon, size: 19, color: 'currentColor', strokeWidth: 2 }),
            isActive && React.createElement('div', {
              style: {
                position: 'absolute', left: -7, top: '50%', transform: 'translateY(-50%)',
                width: 3, height: 22, background: T.sbxAccent, borderRadius: '0 3px 3px 0'
              }
            })
          );
        }),
        React.createElement('div', { style: { flex: 1 } }),
        React.createElement('div', {
          title: 'Cài đặt',
          style: {
            width: 44, height: 44, display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderRadius: '50%', cursor: 'pointer', color: T.textMid
          },
          onMouseEnter: e => { e.currentTarget.style.background = T.surface2; e.currentTarget.style.color = T.text; },
          onMouseLeave: e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.textMid; }
        }, React.createElement(Ic, { name: 'settings', size: 17, color: 'currentColor', strokeWidth: 1.5 })),
        React.createElement('div', {
          title: 'Đăng xuất', onClick: onLogout,
          style: {
            width: 44, height: 44, display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderRadius: '50%', cursor: 'pointer', color: T.textMid
          },
          onMouseEnter: e => { e.currentTarget.style.background = T.surface2; e.currentTarget.style.color = T.text; },
          onMouseLeave: e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.textMid; }
        }, React.createElement(Ic, { name: 'logout', size: 17, color: 'currentColor', strokeWidth: 1.5 }))
      ),

      // Sub-nav panel (only for modules with subs)
      mod && mod.subs && React.createElement('div', {
        style: {
          width: 204, background: T.surface, flexShrink: 0,
          borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column',
          overflow: 'hidden'
        }
      },
        React.createElement('div', {
          style: { padding: '20px 18px 16px', borderBottom: `1px solid ${T.border}` }
        },
          React.createElement('div', {
            style: { fontSize: 11, color: T.textMute, marginBottom: 6,
              fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }
          }, 'MODULE'),
          React.createElement('div', {
            style: { fontSize: 18, fontWeight: 700, color: T.sbxGreen, letterSpacing: '-0.01em' }
          }, mod.label)
        ),
        React.createElement('div', {
          style: { flex: 1, overflowY: 'auto', padding: '10px 10px' }
        },
          mod.subs.map(sub => {
            const isActive = sub.key === page;
            return React.createElement('button', {
              key: sub.key, onClick: () => goto(sub.key),
              style: {
                width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px', border: 'none',
                borderRadius: 'var(--r-pill)',
                background: isActive ? T.sbxLight : 'transparent',
                color: isActive ? T.sbxGreen : T.textMid,
                marginBottom: 3, textAlign: 'left', fontSize: 13,
                fontWeight: isActive ? 600 : 500,
                fontFamily: T.font, cursor: 'pointer', transition: 'all .15s',
                letterSpacing: '-0.01em'
              },
              onMouseEnter: e => { if (!isActive) { e.currentTarget.style.background = T.surface2; e.currentTarget.style.color = T.text; } },
              onMouseLeave: e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.textMid; } }
            },
              React.createElement(Ic, { name: sub.icon, size: 14, color: 'currentColor', strokeWidth: 2 }),
              sub.label
            );
          })
        )
      ),

      // Main content
      React.createElement('div', {
        style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: T.bg, position: 'relative' }
      },
        React.createElement('div', { className: 'page-enter', style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' } }, children),

        // ── Frap: Starbucks signature floating circular CTA ──────────
        // 56px Green Accent disc, layered base + ambient shadow stack.
        // In an accounting context it's "+ chứng từ mới" (new document).
        React.createElement('button', {
          title: 'Chứng từ mới',
          onClick: () => goto('chungtubh'),
          style: {
            position: 'absolute', bottom: 24, right: 24,
            width: 56, height: 56, borderRadius: '50%',
            background: T.sbxAccent, border: 'none', color: '#FFFFFF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: T.shadowFrap,
            transition: 'transform .12s ease, box-shadow .2s ease',
            zIndex: 50
          },
          onMouseEnter: e => e.currentTarget.style.background = T.sbxHover,
          onMouseLeave: e => e.currentTarget.style.background = T.sbxAccent
        }, React.createElement(Ic, { name: 'plus', size: 22, color: '#FFFFFF', strokeWidth: 2.5 }))
      )
    )
  );
};
