(function() {
// pages/TienThuChi.js — Tiền mặt + Tiền gửi (Thu/Chi)
const { useState: useTienSt } = React;

function PhieuForm({ type, subtype, onClose }) {
  // type = 'tienmat'|'tiengui', subtype = 'thu'|'chi'
  const acc = T.accent;
  const isThu = subtype === 'thu';
  const prefix = type === 'tienmat' ? (isThu ? 'PT' : 'PC') : (isThu ? 'TG_T' : 'TG_C');
  const so = `${prefix}0078_01`;
  const title = `${type === 'tienmat' ? 'Tiền mặt' : 'Tiền gửi'} — Phiếu ${isThu ? 'thu' : 'chi'}`;

  return React.createElement('div', { style:{ position:'absolute', inset:0, background:'rgba(0,0,0,0.3)', zIndex:100, display:'flex', alignItems:'center', justifyContent:'center' } },
    React.createElement('div', { style:{ background:'#fff', borderRadius:14, width:680, maxHeight:'90vh', overflow:'auto', boxShadow:'0 20px 60px rgba(0,0,0,0.2)' } },
      // Header
      React.createElement('div', { style:{ padding:'14px 20px', borderBottom:'1px solid #e5e7eb', display:'flex', alignItems:'center', gap:12, background:'#f8fafc', position:'sticky', top:0, zIndex:1 } },
        React.createElement('div', { style:{ width:34, height:34, background:`${acc}15`, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' } },
          React.createElement(Ic, { name:'receipt', size:17, color:acc })
        ),
        React.createElement('div', null,
          React.createElement('div', { style:{ fontSize:15, fontWeight:700, color:'#111' } }, title, ' ', React.createElement('span', { style:{ color:acc } }, so)),
          React.createElement('div', { style:{ fontSize:11.5, color:'#9ca3af' } }, '5. Thu khác')
        ),
        React.createElement('div', { style:{ marginLeft:'auto', display:'flex', gap:8 } },
          React.createElement(Btn, { label:'Cất', variant:'outline' }),
          React.createElement(Btn, { label:'Cất và Thêm', icon:'save', variant:'primary', acc }),
          React.createElement('button', { onClick:onClose, style:{ padding:'6px', border:'1.5px solid #e5e7eb', borderRadius:7, background:'#fff', cursor:'pointer', display:'flex' } },
            React.createElement(Ic, { name:'x', size:16, color:'#6b7280' })
          )
        )
      ),
      // Body
      React.createElement('div', { style:{ padding:'20px' } },
        React.createElement('div', { style:{ display:'grid', gridTemplateColumns:'1fr 1fr 220px', gap:16, marginBottom:18 } },
          React.createElement('div', { style:{ gridColumn:'span 2', display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 } },
            React.createElement(FormField, { label:'Mã đối tượng', acc, withBtn:true }),
            React.createElement(FormField, { label:'Tên đối tượng', acc }),
            React.createElement(FormField, { label: isThu ? 'Người nộp' : 'Người nhận', acc }),
            React.createElement(FormField, { label:'Địa chỉ', acc }),
            React.createElement(FormField, { label:'Nhân viên', acc, withBtn:true }),
            React.createElement(FormField, { label: isThu ? 'Lý do nộp' : 'Lý do chi', value: isThu ? 'Thu tiền của' : 'Chi tiền cho', acc }),
            React.createElement(FormField, { label:'Kèm theo (số lượng)', acc }),
            React.createElement(FormField, { label:'Tham chiếu', acc }),
          ),
          React.createElement('div', { style:{ display:'flex', flexDirection:'column', gap:10 } },
            React.createElement('div', { style:{ padding:14, background:'#f8fafc', borderRadius:10, border:'1px solid #e5e7eb' } },
              React.createElement(FormField, { label:'Ngày hạch toán', value:'22/04/2026', acc }),
              React.createElement('div', { style:{ marginTop:8 } }, React.createElement(FormField, { label: isThu ? 'Ngày phiếu thu' : 'Ngày phiếu chi', value:'22/04/2026', acc })),
              React.createElement('div', { style:{ marginTop:8 } }, React.createElement(FormField, { label: isThu ? 'Số phiếu thu' : 'Số phiếu chi', value:so, acc })),
            ),
            React.createElement('div', { style:{ padding:12, background:`${acc}08`, borderRadius:10, border:`1px solid ${acc}20`, textAlign:'center' } },
              React.createElement('div', { style:{ fontSize:11, color:`${acc}99`, marginBottom:2 } }, 'TỔNG TIỀN'),
              React.createElement('div', { style:{ fontSize:28, fontWeight:800, color:acc } }, '0')
            )
          )
        ),

        // Hạch toán table
        React.createElement('div', { style:{ background:'#f8fafc', borderRadius:10, padding:14, border:'1px solid #e5e7eb' } },
          React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 } },
            React.createElement('span', { style:{ fontSize:13, fontWeight:700, color:'#111' } }, 'Hạch toán'),
            React.createElement('span', { style:{ fontSize:12, color:acc, cursor:'pointer' } }, '🤖 AVA Kế toán')
          ),
          React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5, background:'#fff', borderRadius:8, overflow:'hidden', border:'1px solid #e5e7eb' } },
            React.createElement('thead', null,
              React.createElement('tr', { style:{ background:'#f1f5f9' } },
                ['#','Diễn giải','TK Nợ','TK Có','Số tiền','Đối tượng','Tên đối tượng',''].map(h =>
                  React.createElement('th', { key:h, style:{ ...sharedTh, background:'transparent', fontSize:12 } }, h)
                )
              )
            ),
            React.createElement('tbody', null,
              React.createElement('tr', { style:{ borderBottom:'1px solid #f3f4f6' } },
                React.createElement('td', { style:sharedTd }, '1'),
                React.createElement('td', { style:sharedTd }, React.createElement('input', { defaultValue: isThu ? 'Thu tiền của' : 'Chi tiền cho', style:{ ...sharedInput, padding:'4px 7px', fontSize:12 } })),
                React.createElement('td', { style:sharedTd }, React.createElement('input', { defaultValue:'1111', style:{ ...sharedInput, width:60, padding:'4px 7px', fontSize:12 } })),
                React.createElement('td', { style:sharedTd }, React.createElement('input', { defaultValue:'1121', style:{ ...sharedInput, width:60, padding:'4px 7px', fontSize:12 } })),
                React.createElement('td', { style:sharedTd }, React.createElement('input', { defaultValue:'0', style:{ ...sharedInput, width:80, padding:'4px 7px', fontSize:12, textAlign:'right' } })),
                React.createElement('td', { style:sharedTd }, React.createElement('input', { style:{ ...sharedInput, width:80, padding:'4px 7px', fontSize:12 } })),
                React.createElement('td', { style:sharedTd }, React.createElement('input', { style:{ ...sharedInput, padding:'4px 7px', fontSize:12 } })),
                React.createElement('td', { style:sharedTd }, React.createElement('button', { style:{ padding:4, border:'none', background:'transparent', cursor:'pointer' } }, React.createElement(Ic, { name:'trash', size:14, color:'#ef4444' })))
              )
            )
          ),
          React.createElement('div', { style:{ display:'flex', gap:8, marginTop:10 } },
            React.createElement(Btn, { label:'+ Thêm dòng', variant:'outline', small:true }),
            React.createElement(Btn, { label:'Xóa hết dòng', variant:'danger', small:true })
          )
        ),

        // Attachment
        React.createElement('div', { style:{ marginTop:14, padding:'10px 14px', border:'1.5px dashed #d1d5db', borderRadius:8, textAlign:'center', color:'#9ca3af', fontSize:12.5 } },
          '📎 Đính kèm — Kéo/thả hoặc bấm vào đây · Tối đa 5MB'
        )
      ),
      // Footer
      React.createElement('div', { style:{ padding:'12px 20px', borderTop:'1px solid #e5e7eb', display:'flex', justifyContent:'space-between', position:'sticky', bottom:0, background:'#fff' } },
        React.createElement(Btn, { label:'Hủy', onClick:onClose }),
        React.createElement('div', { style:{ display:'flex', gap:8 } },
          React.createElement(Btn, { label:'Cất', variant:'outline' }),
          React.createElement(Btn, { label: isThu ? 'Cất và Thêm' : 'Cất và In', icon: isThu ? 'plus' : 'print', variant:'primary', acc })
        )
      )
    )
  );
}

function TienList({ title, rows, type, subtype }) {
  const acc = T.accent;
  const [sel, setSel] = useTienSt(0);
  const [showForm, setShowForm] = useTienSt(false);
  const isThu = subtype === 'thu';

  // Stats
  const StatCard = ({ label, value, color }) =>
    React.createElement('div', { style:{ background:'#fff', borderRadius:10, padding:'12px 16px', border:'1px solid #e5e7eb', flex:1 } },
      React.createElement('div', { style:{ fontSize:11, color:'#9ca3af', fontWeight:500, textTransform:'uppercase', letterSpacing:0.3, marginBottom:4 } }, label),
      React.createElement('div', { style:{ fontSize:18, fontWeight:800, color: color || '#111', fontVariantNumeric:'tabular-nums' } }, value)
    );

  return React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', padding:'16px 20px', position:'relative', gap:12 } },
    // Header
    React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center' } },
      React.createElement('h1', { style:{ fontSize:18, fontWeight:800, color:'#111', margin:0 } }, title),
      React.createElement('div', { style:{ display:'flex', gap:8 } },
        React.createElement(Btn, { label:'Xuất Excel', icon:'download', variant:'outline' }),
        React.createElement(Btn, { label: isThu ? 'Phiếu thu' : 'Phiếu chi', icon:'plus', variant:'primary', acc, onClick:()=>setShowForm(true) })
      )
    ),

    // Stats
    React.createElement('div', { style:{ display:'flex', gap:10 } },
      React.createElement(StatCard, { label:'Tổng thu đầu năm', value:'2.606.063.937', color: T.positive }),
      React.createElement(StatCard, { label:'Tổng chi đầu năm', value:'2.326.782.369', color: T.negative }),
      React.createElement(StatCard, { label: type==='tienmat' ? 'Tồn quỹ hiện tại' : 'Số dư ngân hàng', value:'279.866.898', color: acc }),
    ),

    // Filter + Table
    React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' } },
      React.createElement(FilterBar, null),
      React.createElement('div', { style:{ flex:1, overflow:'auto', background:'#fff', border:'1px solid #e5e7eb', borderBottom:'none' } },
        React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
          React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
            React.createElement('tr', null,
              React.createElement('th', { style:{ ...sharedTh, width:36 } }, React.createElement('input', { type:'checkbox', style:{ accentColor:acc } })),
              ['Ngày hạch toán','Số chứng từ','Diễn giải','Số tiền','Đối tượng','Lý do thu/chi','Loại chứng từ','Chức năng'].map(h =>
                React.createElement('th', { key:h, style:{ ...sharedTh, textAlign: h==='Số tiền' ? 'right' : 'left' } }, h)
              )
            )
          ),
          React.createElement('tbody', null,
            rows.map((row, i) => {
              const isSel = sel === row.id;
              return React.createElement('tr', { key:row.id, onClick:()=>setSel(row.id),
                style:{ background: isSel ? `${acc}0d` : '#fff', cursor:'pointer', borderBottom:'1px solid #f1f5f9' },
                onMouseEnter: e => { if(!isSel) e.currentTarget.style.background='#f8fafc'; },
                onMouseLeave: e => { if(!isSel) e.currentTarget.style.background='#fff'; },
              },
                React.createElement('td', { style:{ padding:'10px 12px' } }, React.createElement('input', { type:'checkbox', checked:isSel, onChange:()=>{}, style:{ accentColor:acc } })),
                React.createElement('td', { style:sharedTd }, row.ngay),
                React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:600, cursor:'pointer' }, onClick:e=>{ e.stopPropagation(); setShowForm(true); } }, row.so),
                React.createElement('td', { style:sharedTd }, row.dien_giai),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:600, color: row.loai==='Phiếu thu' ? T.positive : T.negative } }, row.so_tien),
                React.createElement('td', { style:sharedTd }, row.doi_tuong),
                React.createElement('td', { style:sharedTd }, row.ly_do),
                React.createElement('td', { style:sharedTd }, React.createElement(Tag, { label:row.loai, variant: row.loai==='Phiếu thu' ? 'green' : 'blue', small:true })),
                React.createElement('td', { style:sharedTd },
                  React.createElement('button', { onClick:e=>{ e.stopPropagation(); setShowForm(true); }, style:{ padding:'4px 10px', border:`1px solid ${acc}30`, borderRadius:5, background:`${acc}08`, color:acc, fontSize:11.5, fontWeight:500, cursor:'pointer' } }, 'Xem')
                )
              );
            })
          )
        )
      ),
      React.createElement(Pagination, { total: rows.length * 60 })
    ),
    showForm && React.createElement(PhieuForm, { type, subtype, onClose:()=>setShowForm(false) })
  );
}

window.PageTienMatThu = () => React.createElement(TienList, { title:'Tiền mặt — Phiếu thu', rows:MOCK.tienMat.filter(r=>r.loai==='Phiếu thu'), type:'tienmat', subtype:'thu' });
window.PageTienMatChi = () => React.createElement(TienList, { title:'Tiền mặt — Phiếu chi', rows:MOCK.tienMat.filter(r=>r.loai==='Phiếu chi'), type:'tienmat', subtype:'chi' });
window.PageTienGuiThu = () => React.createElement(TienList, { title:'Tiền gửi — Thu tiền gửi', rows:MOCK.tienMat, type:'tiengui', subtype:'thu' });
window.PageTienGuiChi = () => React.createElement(TienList, { title:'Tiền gửi — Chi tiền gửi', rows:MOCK.tienMat.filter(r=>r.loai==='Phiếu chi'), type:'tiengui', subtype:'chi' });

})();