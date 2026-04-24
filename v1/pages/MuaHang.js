(function() {
// pages/MuaHang.js — Mua hàng + Trả lại hàng mua
const { useState: useMuaSt } = React;

function MuaHangForm({ type, onClose }) {
  const acc = T.accent;
  const isMua = type === 'mua';
  const so = isMua ? 'MH0080_04' : 'TL0012_04';
  const title = isMua ? 'Phiếu mua hàng' : 'Trả lại hàng mua';
  return React.createElement('div', { style:{ position:'absolute', inset:0, zIndex:100, display:'flex' } },
    React.createElement('div', { style:{ flex:1, background:'rgba(0,0,0,0.25)' }, onClick:onClose }),
    React.createElement('div', { style:{ width:'76%', background:'#fff', display:'flex', flexDirection:'column', boxShadow:'-8px 0 40px rgba(0,0,0,0.15)' } },
      React.createElement('div', { style:{ padding:'14px 22px', borderBottom:'1px solid #e5e7eb', display:'flex', alignItems:'center', gap:12, background:'#fff', flexShrink:0 } },
        React.createElement('div', { style:{ width:36, height:36, background:`${acc}15`, borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center' } },
          React.createElement(Ic, { name:'muahang', size:18, color:acc })
        ),
        React.createElement('div', null,
          React.createElement('div', { style:{ fontSize:16, fontWeight:700, color:'#111' } }, title, ' ', React.createElement('span', { style:{ color:acc } }, so)),
          React.createElement('div', { style:{ fontSize:11.5, color:'#9ca3af' } }, '1. Mua hàng trong nước')
        ),
        React.createElement('div', { style:{ marginLeft:'auto', display:'flex', gap:8 } },
          React.createElement(Btn, { label:'Cất', variant:'outline' }),
          React.createElement(Btn, { label:'Cất và In', icon:'print', variant:'primary', acc }),
          React.createElement('button', { onClick:onClose, style:{ padding:'7px', border:'1.5px solid #e5e7eb', borderRadius:7, background:'#fff', cursor:'pointer', display:'flex' } }, React.createElement(Ic, { name:'x', size:16, color:'#6b7280' }))
        )
      ),
      React.createElement('div', { style:{ flex:1, overflow:'auto', padding:'20px 22px' } },
        React.createElement('div', { style:{ display:'grid', gridTemplateColumns:'1fr 1fr 260px', gap:16, marginBottom:18 } },
          React.createElement('div', { style:{ gridColumn:'span 2', display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 } },
            React.createElement(FormField, { label:'Mã nhà cung cấp', acc, withBtn:true }),
            React.createElement(FormField, { label:'Tên nhà cung cấp', acc }),
            React.createElement(FormField, { label:'Địa chỉ', acc, span:2 }),
            React.createElement(FormField, { label:'Người giao hàng', acc }),
            React.createElement(FormField, { label:'Diễn giải', value:'Mua hàng trong nước', acc }),
            React.createElement(FormField, { label:'Chi phí mua hàng', acc }),
            React.createElement(FormField, { label:'Tham chiếu', acc }),
          ),
          React.createElement('div', { style:{ display:'flex', flexDirection:'column', gap:10 } },
            React.createElement('div', { style:{ padding:14, background:'#f8fafc', borderRadius:10, border:'1px solid #e5e7eb' } },
              React.createElement(FormField, { label:'Ngày hạch toán', value:'22/04/2026', acc }),
              React.createElement('div', { style:{ marginTop:8 } }, React.createElement(FormField, { label:'Ngày chứng từ', value:'22/04/2026', acc })),
              React.createElement('div', { style:{ marginTop:8 } }, React.createElement(FormField, { label:'Số chứng từ', value:so, acc })),
            ),
            React.createElement('div', { style:{ padding:12, background:`${acc}08`, borderRadius:10, border:`1px solid ${acc}20`, textAlign:'center' } },
              React.createElement('div', { style:{ fontSize:11, color:`${acc}99`, marginBottom:2 } }, 'TỔNG TIỀN'),
              React.createElement('div', { style:{ fontSize:28, fontWeight:800, color:acc } }, '0'),
            )
          )
        ),
        React.createElement('div', { style:{ background:'#f8fafc', borderRadius:10, padding:14, border:'1px solid #e5e7eb' } },
          React.createElement('div', { style:{ fontSize:13, fontWeight:700, color:'#111', marginBottom:10 } }, 'Hàng tiền'),
          React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5, background:'#fff', borderRadius:8, border:'1px solid #e5e7eb', overflow:'hidden' } },
            React.createElement('thead', null,
              React.createElement('tr', { style:{ background:'#f1f5f9' } },
                ['#','Mã hàng','Tên hàng','Kho','TK Kho','TK Công nợ','ĐVT','Số lượng','Đơn giá','Thành tiền','Số lô',''].map(h =>
                  React.createElement('th', { key:h, style:{ ...sharedTh, background:'transparent', fontSize:11.5 } }, h)
                )
              )
            ),
            React.createElement('tbody', null,
              MOCK.chiTietKho.map((d, i) =>
                React.createElement('tr', { key:i, style:{ borderBottom:'1px solid #f3f4f6' } },
                  React.createElement('td', { style:sharedTd }, i+1),
                  React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:500 } }, d.ma),
                  React.createElement('td', { style:sharedTd }, d.ten),
                  React.createElement('td', { style:sharedTd }, d.kho),
                  React.createElement('td', { style:sharedTd }, d.tk_no),
                  React.createElement('td', { style:sharedTd }, d.tk_co),
                  React.createElement('td', { style:sharedTd }, d.dvt),
                  React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, d.sl.toFixed(2)),
                  React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, '0'),
                  React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, '0'),
                  React.createElement('td', { style:sharedTd }, ''),
                  React.createElement('td', { style:sharedTd }, React.createElement('button', { style:{ padding:4, border:'none', background:'transparent', cursor:'pointer' } }, React.createElement(Ic, { name:'trash', size:13, color:'#ef4444' })))
                )
              )
            )
          ),
          React.createElement('div', { style:{ display:'flex', gap:8, marginTop:10 } },
            React.createElement(Btn, { label:'+ Thêm dòng', variant:'outline', small:true }),
            React.createElement(Btn, { label:'Xóa hết dòng', variant:'danger', small:true })
          )
        )
      ),
      React.createElement('div', { style:{ padding:'12px 22px', borderTop:'1px solid #e5e7eb', display:'flex', justifyContent:'space-between', flexShrink:0 } },
        React.createElement(Btn, { label:'Hủy', onClick:onClose }),
        React.createElement('div', { style:{ display:'flex', gap:8 } },
          React.createElement(Btn, { label:'Cất', variant:'outline' }),
          React.createElement(Btn, { label:'Cất và In', icon:'print', variant:'primary', acc })
        )
      )
    )
  );
}

function MuaList({ title, rows, type }) {
  const acc = T.accent;
  const [sel, setSel] = useMuaSt(0);
  const [detailOpen, setDetailOpen] = useMuaSt(true);
  const [showForm, setShowForm] = useMuaSt(false);
  return React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', padding:'16px 20px 0', position:'relative' } },
    React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 } },
      React.createElement('div', null,
        React.createElement('h1', { style:{ fontSize:18, fontWeight:800, color:'#111', margin:0 } }, title),
        React.createElement('p', { style:{ fontSize:12, color:'#9ca3af', margin:'2px 0 0' } }, 'Đầu năm tới hiện tại')
      ),
      React.createElement('div', { style:{ display:'flex', gap:8 } },
        React.createElement(Btn, { label:'Xuất Excel', icon:'download', variant:'outline' }),
        React.createElement(Btn, { label: type==='mua' ? 'Tạo mua hàng' : 'Tạo trả lại', icon:'plus', variant:'primary', acc, onClick:()=>setShowForm(true) })
      )
    ),
    React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' } },
      React.createElement(FilterBar, null),
      React.createElement('div', { style:{ flex: detailOpen ? '0 0 56%' : '1', overflow:'auto', background:'#fff', border:'1px solid #e5e7eb', borderBottom:'none' } },
        React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
          React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
            React.createElement('tr', null,
              React.createElement('th', { style:{ ...sharedTh, width:36 } }, React.createElement('input', { type:'checkbox', style:{ accentColor:acc } })),
              ['Ngày','Ngày CT','Số CT','Mã NCC','Nhà cung cấp','Diễn giải','Tổng tiền','Giá trị nhập kho','TT thanh toán','Loại CT',''].map(h =>
                React.createElement('th', { key:h, style:{ ...sharedTh, textAlign: h==='Tổng tiền'||h==='Giá trị nhập kho' ? 'right' : 'left' } }, h)
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
                React.createElement('td', { style:sharedTd }, row.ngay_ct),
                React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:600, cursor:'pointer' }, onClick:e=>{ e.stopPropagation(); setShowForm(true); } }, row.so),
                React.createElement('td', { style:sharedTd }, row.ma_ncc),
                React.createElement('td', { style:sharedTd }, row.ncc),
                React.createElement('td', { style:sharedTd }, row.dien_giai),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color: row.tong ? T.positive : '#374151' } }, row.tong || 0),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color: row.gt_nhap ? T.positive : '#374151' } }, row.gt_nhap || 0),
                React.createElement('td', { style:sharedTd }, React.createElement(Tag, { label:row.tt_thanh_toan, variant: row.tt_thanh_toan==='Đã thanh toán' ? 'green' : 'yellow', small:true })),
                React.createElement('td', { style:sharedTd }, React.createElement(Tag, { label: row.loai.length>20 ? row.loai.substring(0,20)+'…' : row.loai, variant:'blue', small:true })),
                React.createElement('td', { style:sharedTd },
                  React.createElement('button', { onClick:e=>{ e.stopPropagation(); setShowForm(true); }, style:{ padding:'4px 9px', border:`1px solid ${acc}30`, borderRadius:5, background:`${acc}08`, color:acc, fontSize:11.5, cursor:'pointer' } }, 'Xem')
                )
              );
            })
          )
        )
      ),
      React.createElement(DetailPanel, { open:detailOpen, onToggle:()=>setDetailOpen(!detailOpen), label: rows.find(r=>r.id===sel)?.so || '' },
        React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12 } },
          React.createElement('thead', null,
            React.createElement('tr', null,
              ['#','Mã hàng','Tên hàng','Kho','TK Kho','TK Công nợ','ĐVT','Số lượng','Đơn giá','Thành tiền'].map(h =>
                React.createElement('th', { key:h, style:{ ...sharedTh, fontSize:11.5 } }, h)
              )
            )
          ),
          React.createElement('tbody', null,
            MOCK.chiTietKho.map((d, i) =>
              React.createElement('tr', { key:i, style:{ borderBottom:'1px solid #f3f4f6' } },
                React.createElement('td', { style:sharedTd }, i+1),
                React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:500 } }, d.ma),
                React.createElement('td', { style:sharedTd }, d.ten),
                React.createElement('td', { style:sharedTd }, d.kho),
                React.createElement('td', { style:sharedTd }, d.tk_no),
                React.createElement('td', { style:sharedTd }, d.tk_co),
                React.createElement('td', { style:sharedTd }, d.dvt),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, d.sl.toFixed(2)),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, '0'),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, '0')
              )
            )
          )
        )
      ),
      React.createElement(Pagination, { total: rows.length * 120 })
    ),
    showForm && React.createElement(MuaHangForm, { type, onClose:()=>setShowForm(false) })
  );
}

window.PageMuaHang = () => React.createElement(MuaList, { title:'Mua hàng', rows:MOCK.muaHang, type:'mua' });
window.PageTraLaiMua = () => React.createElement(MuaList, { title:'Trả lại hàng mua', rows:MOCK.muaHang.slice(0,1), type:'tralai' });

})();