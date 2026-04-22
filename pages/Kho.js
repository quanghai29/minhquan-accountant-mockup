(function() {
// pages/Kho.js — Nhập kho + Xuất kho lists & forms
const { useState: useKhoSt } = React;

function KhoForm({ type, onClose }) {
  const acc = T.accent;
  const isNhap = type === 'nhap';
  const title = isNhap ? 'Phiếu nhập kho' : 'Phiếu xuất kho';
  const so = isNhap ? 'NK0081_04' : 'XK0152_04';

  return React.createElement('div', { style:{ position:'absolute', inset:0, zIndex:100, display:'flex' } },
    React.createElement('div', { style:{ flex:1, background:'rgba(0,0,0,0.25)' }, onClick:onClose }),
    React.createElement('div', { style:{ width:'75%', background:'#fff', display:'flex', flexDirection:'column', boxShadow:'-8px 0 40px rgba(0,0,0,0.15)' } },
      // Header
      React.createElement('div', { style:{ padding:'14px 22px', borderBottom:'1px solid #e5e7eb', display:'flex', alignItems:'center', gap:12, background:'#fff', flexShrink:0 } },
        React.createElement('div', { style:{ width:36, height:36, background:`${acc}15`, borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center' } },
          React.createElement(Ic, { name: isNhap ? 'arrowIn' : 'arrowOut', size:18, color:acc })
        ),
        React.createElement('div', null,
          React.createElement('div', { style:{ fontSize:16, fontWeight:700, color:'#111' } },
            title, ' ', React.createElement('span', { style:{ color:acc } }, so)
          ),
          React.createElement('div', { style:{ fontSize:11.5, color:'#9ca3af' } }, isNhap ? '3. Khác (NVL thừa, HH thuê gia công,...)' : '1. Bán hàng')
        ),
        React.createElement('div', { style:{ marginLeft:'auto', display:'flex', gap:8 } },
          React.createElement(Btn, { label:'Cất', variant:'outline' }),
          React.createElement(Btn, { label:'Cất và In', icon:'print', variant:'primary', acc }),
          React.createElement('button', { onClick:onClose, style:{ padding:'7px', border:'1.5px solid #e5e7eb', borderRadius:7, background:'#fff', cursor:'pointer', display:'flex' } },
            React.createElement(Ic, { name:'x', size:16, color:'#6b7280' })
          )
        )
      ),
      // Body
      React.createElement('div', { style:{ flex:1, overflow:'auto', padding:'20px 22px' } },
        // Fields grid
        React.createElement('div', { style:{ display:'grid', gridTemplateColumns:'1fr 1fr 260px', gap:16, marginBottom:20 } },
          React.createElement('div', { style:{ gridColumn:'span 2', display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 } },
            React.createElement(FormField, { label:'Mã đối tượng', acc, withBtn:true }),
            React.createElement(FormField, { label:'Tên đối tượng', acc }),
            React.createElement(FormField, { label:'Địa chỉ', acc, span:2 }),
            isNhap
              ? React.createElement(FormField, { label:'Người giao hàng', acc })
              : React.createElement(FormField, { label:'Người nhận', acc }),
            React.createElement(FormField, { label:'Diễn giải', value: isNhap ? 'Nhập kho khác' : 'Xuất kho bán hàng', acc }),
            React.createElement(FormField, { label:'Kèm theo', acc }),
            React.createElement(FormField, { label:'Tham chiếu', acc }),
          ),
          // Right meta
          React.createElement('div', { style:{ display:'flex', flexDirection:'column', gap:10 } },
            React.createElement('div', { style:{ padding:14, background:'#f8fafc', borderRadius:10, border:'1px solid #e5e7eb' } },
              React.createElement('div', { style:{ fontSize:11, fontWeight:600, color:'#9ca3af', textTransform:'uppercase', letterSpacing:0.5, marginBottom:10 } }, 'Chứng từ'),
              React.createElement(FormField, { label:'Ngày hạch toán', value:'22/04/2026', acc }),
              React.createElement('div', { style:{ marginTop:8 } }, React.createElement(FormField, { label:'Ngày chứng từ', value:'22/04/2026', acc })),
              React.createElement('div', { style:{ marginTop:8 } }, React.createElement(FormField, { label:'Số chứng từ', value:so, acc })),
            ),
            React.createElement('div', { style:{ padding:14, background:`${acc}08`, borderRadius:10, border:`1px solid ${acc}20`, textAlign:'center' } },
              React.createElement('div', { style:{ fontSize:11, color:`${acc}99`, marginBottom:2 } }, 'TỔNG TIỀN'),
              React.createElement('div', { style:{ fontSize:30, fontWeight:800, color:acc } }, '0'),
              React.createElement('div', { style:{ fontSize:11, color:`${acc}80` } }, 'đồng')
            )
          )
        ),

        // Line items
        React.createElement('div', { style:{ background:'#f8fafc', borderRadius:10, padding:16, border:'1px solid #e5e7eb' } },
          React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 } },
            React.createElement('span', { style:{ fontSize:13, fontWeight:700, color:'#111' } }, 'Hàng tiền'),
            React.createElement('span', { style:{ fontSize:12, color:'#9ca3af' } }, '💡 Gợi ý hồ sơ')
          ),
          React.createElement('div', { style:{ background:'#fff', borderRadius:8, border:'1px solid #e5e7eb', overflow:'hidden' } },
            React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
              React.createElement('thead', null,
                React.createElement('tr', { style:{ background:'#f1f5f9' } },
                  ['#','Mã hàng','Tên hàng','Kho','TK Nợ','TK Có','ĐVT','Số lượng','Đơn giá','Thành tiền',''].map(h =>
                    React.createElement('th', { key:h, style:{ ...sharedTh, background:'transparent', fontSize:12 } }, h)
                  )
                )
              ),
              React.createElement('tbody', null,
                React.createElement('tr', { style:{ borderBottom:'1px solid #f3f4f6' } },
                  React.createElement('td', { style:sharedTd }, '1'),
                  ...['','','','1551','331','kg','1,00','0','0'].map((v,i) =>
                    React.createElement('td', { key:i, style:sharedTd },
                      React.createElement('input', { defaultValue:v, style:{ ...sharedInput, width: i > 3 ? 60 : 100, padding:'4px 7px', fontSize:12 } })
                    )
                  ),
                  React.createElement('td', { style:sharedTd },
                    React.createElement('button', { style:{ padding:4, border:'none', background:'transparent', cursor:'pointer' } },
                      React.createElement(Ic, { name:'trash', size:14, color:'#ef4444' })
                    )
                  )
                )
              )
            )
          ),
          React.createElement('div', { style:{ display:'flex', gap:8, marginTop:10 } },
            React.createElement(Btn, { label:'+ Thêm dòng', variant:'outline', small:true }),
            React.createElement(Btn, { label:'Thêm ghi chú', variant:'ghost', small:true }),
            React.createElement(Btn, { label:'Xóa hết dòng', variant:'danger', small:true })
          )
        ),

        // Attachment
        React.createElement('div', { style:{ marginTop:14, padding:'12px 16px', border:'1.5px dashed #d1d5db', borderRadius:8, textAlign:'center', color:'#9ca3af', fontSize:12.5, cursor:'pointer' } },
          '📎 Đính kèm — Kéo/thả hoặc bấm vào đây · Tối đa 5MB'
        )
      ),
      // Footer
      React.createElement('div', { style:{ padding:'12px 22px', borderTop:'1px solid #e5e7eb', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 } },
        React.createElement(Btn, { label:'Hủy', onClick:onClose }),
        React.createElement('div', { style:{ display:'flex', gap:8 } },
          React.createElement(Btn, { label:'Cất', variant:'outline' }),
          React.createElement(Btn, { label:'Cất và In', icon:'print', variant:'primary', acc })
        )
      )
    )
  );
}

function KhoList({ title, rows, type, colLabel, acc }) {
  const [sel, setSel] = useKhoSt(0);
  const [detailOpen, setDetailOpen] = useKhoSt(true);
  const [showForm, setShowForm] = useKhoSt(false);

  return React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', padding:'16px 20px 0', position:'relative' } },
    // Page header
    React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 } },
      React.createElement('div', null,
        React.createElement('h1', { style:{ fontSize:18, fontWeight:800, color:'#111', margin:0 } }, title),
        React.createElement('p', { style:{ fontSize:12, color:'#9ca3af', margin:'2px 0 0' } }, 'Đầu năm tới hiện tại · 22/04/2026')
      ),
      React.createElement('div', { style:{ display:'flex', gap:8 } },
        React.createElement(Btn, { label:'Xuất Excel', icon:'download', variant:'outline' }),
        React.createElement(Btn, { label: type==='nhap' ? 'Phiếu nhập kho' : 'Phiếu xuất kho', icon:'plus', variant:'primary', acc, onClick:()=>setShowForm(true) })
      )
    ),

    React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' } },
      React.createElement(FilterBar, null),
      // Table
      React.createElement('div', { style:{ flex: detailOpen ? '0 0 56%' : '1', overflow:'auto', background:'#fff', border:'1px solid #e5e7eb', borderBottom:'none' } },
        React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
          React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
            React.createElement('tr', null,
              React.createElement('th', { style:{ ...sharedTh, width:36 } }, React.createElement('input', { type:'checkbox', style:{ accentColor:acc } })),
              ['Ngày hạch toán','Số chứng từ','Diễn giải','Tổng tiền', colLabel,'Loại chứng từ','Chức năng'].map(h =>
                React.createElement('th', { key:h, style:{ ...sharedTh, textAlign: h==='Tổng tiền' ? 'right' : 'left' } }, h)
              )
            )
          ),
          React.createElement('tbody', null,
            rows.map((row, i) => {
              const isSel = sel === row.id;
              return React.createElement('tr', { key:row.id, onClick:()=>setSel(row.id),
                style:{ background: isSel ? `${acc}0d` : '#fff', cursor:'pointer', borderBottom:'1px solid #f1f5f9' },
                onMouseEnter: e => { if(!isSel) e.currentTarget.style.background='#f8fafc'; },
                onMouseLeave: e => { if(!isSel) e.currentTarget.style.background='#fff'; }
              },
                React.createElement('td', { style:{ padding:'10px 12px' } }, React.createElement('input', { type:'checkbox', checked:isSel, onChange:()=>{}, style:{ accentColor:acc } })),
                React.createElement('td', { style:sharedTd }, row.ngay),
                React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:600, cursor:'pointer' }, onClick:e=>{ e.stopPropagation(); setShowForm(true); } }, row.so),
                React.createElement('td', { style:sharedTd }, row.dien_giai),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color: row.tong > 0 ? T.positive : '#374151' } }, row.tong || 0),
                React.createElement('td', { style:sharedTd }, row.doi_tuong || row.nguoi_nhan || ''),
                React.createElement('td', { style:sharedTd }, React.createElement(Tag, { label: row.loai.length > 30 ? row.loai.substring(0,30)+'…' : row.loai, variant:'green', small:true })),
                React.createElement('td', { style:sharedTd },
                  React.createElement('button', { onClick:e=>{ e.stopPropagation(); setShowForm(true); }, style:{ padding:'4px 10px', border:`1px solid ${acc}30`, borderRadius:5, background:`${acc}08`, color:acc, fontSize:11.5, fontWeight:500, cursor:'pointer' } }, 'Xem')
                )
              );
            })
          ),
          React.createElement('tfoot', null,
            React.createElement('tr', { style:{ background:'#f8fafc', borderTop:'2px solid #e5e7eb' } },
              React.createElement('td', { colSpan:4, style:{ ...sharedTd, fontWeight:600 } }, `Tổng số: ${rows.length * 80} bản ghi`),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.positive } }, '12.821.911.571'),
              React.createElement('td', { colSpan:3, style:sharedTd })
            )
          )
        )
      ),
      // Detail
      React.createElement(DetailPanel, { open:detailOpen, onToggle:()=>setDetailOpen(!detailOpen), label: rows.find(r=>r.id===sel)?.so || '' },
        React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12 } },
          React.createElement('thead', null,
            React.createElement('tr', null,
              ['#','Mã hàng','Tên hàng','Kho','TK Nợ','TK Có','ĐVT','Số lượng','Đơn giá','Thành tiền'].map(h =>
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
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, d.don_gia),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, d.tt)
              )
            )
          )
        )
      ),
      React.createElement(Pagination, { total: rows.length * 80 })
    ),

    showForm && React.createElement(KhoForm, { type, onClose:()=>setShowForm(false) })
  );
}

window.PageNhapKho = function() {
  return React.createElement(KhoList, { title:'Nhập kho', rows:MOCK.nhapKho, type:'nhap', colLabel:'Mã đối tượng', acc:T.accent });
};
window.PageXuatKho = function() {
  return React.createElement(KhoList, { title:'Xuất kho', rows:MOCK.xuatKho, type:'xuat', colLabel:'Người nhận', acc:T.accent });
};

})();