(function() {
// pages/BanHang.js — Đơn đặt hàng, Chứng từ bán hàng, Trả lại, Xuất kho BH
const { useState: useBanSt } = React;

function BanHangForm({ type, onClose }) {
  const acc = T.accent;
  const isDon = type === 'donhang';
  const so = isDon ? 'DH0002860' : 'BH0148_04';
  const title = isDon ? 'Đơn đặt hàng' : 'Chứng từ bán hàng';
  return React.createElement('div', { style:{ position:'absolute', inset:0, zIndex:100, display:'flex' } },
    React.createElement('div', { style:{ flex:1, background:'rgba(0,0,0,0.25)' }, onClick:onClose }),
    React.createElement('div', { style:{ width:'76%', background:'#fff', display:'flex', flexDirection:'column', boxShadow:'-8px 0 40px rgba(0,0,0,0.15)' } },
      // Header
      React.createElement('div', { style:{ padding:'14px 22px', borderBottom:'1px solid #e5e7eb', display:'flex', alignItems:'center', gap:12, background:'#fff', flexShrink:0 } },
        React.createElement('div', { style:{ width:36, height:36, background:`${acc}15`, borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center' } },
          React.createElement(Ic, { name:'banhang', size:18, color:acc })
        ),
        React.createElement('div', null,
          React.createElement('div', { style:{ fontSize:16, fontWeight:700, color:'#111' } }, title, ' ', React.createElement('span', { style:{ color:acc } }, so)),
          React.createElement('div', { style:{ fontSize:11.5, color:'#9ca3af' } }, isDon ? 'Đơn bán hàng nội địa' : '1. Bán hàng hóa trong nước')
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
        // Status row (chứng từ only)
        !isDon && React.createElement('div', { style:{ display:'flex', gap:16, marginBottom:16, padding:'10px 14px', background:'#f8fafc', borderRadius:8, border:'1px solid #e5e7eb' } },
          ['Chưa thu tiền','Thu tiền ngay'].map((opt, i) =>
            React.createElement('label', { key:i, style:{ display:'flex', alignItems:'center', gap:6, fontSize:13, cursor:'pointer' } },
              React.createElement('input', { type:'radio', name:'thu', defaultChecked:i===0, style:{ accentColor:acc } }), opt
            )
          ),
          React.createElement('span', { style:{ margin:'0 8px', color:'#e5e7eb' } }, '|'),
          React.createElement('label', { style:{ display:'flex', alignItems:'center', gap:6, fontSize:13 } },
            React.createElement('input', { type:'checkbox', style:{ accentColor:acc } }), 'Kiểm phiếu xuất'
          ),
          React.createElement('label', { style:{ display:'flex', alignItems:'center', gap:6, fontSize:13 } },
            React.createElement('input', { type:'checkbox', style:{ accentColor:acc } }), 'Lập kèm hóa đơn'
          ),
          React.createElement('div', { style:{ marginLeft:'auto' } },
            React.createElement('button', { style:{ padding:'5px 14px', border:'none', borderRadius:6, background:acc, color:'#fff', fontSize:12, fontWeight:600, cursor:'pointer' } }, 'Đã lập hóa đơn')
          )
        ),

        // Fields grid
        React.createElement('div', { style:{ display:'grid', gridTemplateColumns:'1fr 1fr 260px', gap:16, marginBottom:18 } },
          React.createElement('div', { style:{ gridColumn:'span 2', display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 } },
            React.createElement(FormField, { label:'Mã khách hàng', acc, withBtn:true }),
            React.createElement(FormField, { label:'Tên khách hàng', acc }),
            React.createElement(FormField, { label:'Mã số thuế / CCCD', acc }),
            React.createElement(FormField, { label:'Địa chỉ', acc }),
            React.createElement(FormField, { label:'Người liên hệ', acc }),
            React.createElement(FormField, { label:'Nhân viên bán hàng', acc, withBtn:true }),
            React.createElement(FormField, { label:'Diễn giải', value:'Bán hàng', acc }),
            isDon
              ? React.createElement(FormField, { label:'Hạn giao hàng', acc })
              : React.createElement(FormField, { label:'Điều khoản thanh toán', acc, withBtn:true }),
          ),
          React.createElement('div', { style:{ display:'flex', flexDirection:'column', gap:10 } },
            React.createElement('div', { style:{ padding:14, background:'#f8fafc', borderRadius:10, border:'1px solid #e5e7eb' } },
              React.createElement(FormField, { label:'Ngày hạch toán', value:'22/04/2026', acc }),
              React.createElement('div', { style:{ marginTop:8 } }, React.createElement(FormField, { label:'Ngày chứng từ', value:'22/04/2026', acc })),
              React.createElement('div', { style:{ marginTop:8 } }, React.createElement(FormField, { label:'Số chứng từ', value:so, acc })),
            ),
            React.createElement('div', { style:{ padding:12, background:`${acc}08`, borderRadius:10, border:`1px solid ${acc}20`, textAlign:'center' } },
              React.createElement('div', { style:{ fontSize:11, color:`${acc}99`, marginBottom:2 } }, 'TỔNG TIỀN THANH TOÁN'),
              React.createElement('div', { style:{ fontSize:28, fontWeight:800, color:acc } }, '0'),
            )
          )
        ),
        // Line items
        React.createElement('div', { style:{ background:'#f8fafc', borderRadius:10, padding:14, border:'1px solid #e5e7eb' } },
          React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 } },
            React.createElement('span', { style:{ fontSize:13, fontWeight:700, color:'#111' } }, 'Hàng tiền'),
            React.createElement('div', { style:{ display:'flex', gap:8, alignItems:'center' } },
              React.createElement('span', { style:{ fontSize:12, color:acc } }, '💡 Gợi ý hồ sơ'),
              React.createElement('span', { style:{ fontSize:12, color:'#9ca3af' } }, 'Chiết khấu: Không chiết khấu')
            )
          ),
          React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5, background:'#fff', borderRadius:8, border:'1px solid #e5e7eb', overflow:'hidden' } },
            React.createElement('thead', null,
              React.createElement('tr', { style:{ background:'#f1f5f9' } },
                ['#','Mã hàng','Tên hàng','Kho','Hàng hỗ trợ','TK CN','TK DT','ĐVT','Số lượng','Đơn giá','Thành tiền',''].map(h =>
                  React.createElement('th', { key:h, style:{ ...sharedTh, background:'transparent', fontSize:11.5 } }, h)
                )
              )
            ),
            React.createElement('tbody', null,
              React.createElement('tr', { style:{ borderBottom:'1px solid #f3f4f6' } },
                React.createElement('td', { style:sharedTd }, '1'),
                ...['','','','','131','5111','','1,00','0','0'].map((v,i) =>
                  React.createElement('td', { key:i, style:sharedTd },
                    React.createElement('input', { defaultValue:v, style:{ ...sharedInput, width: i > 4 ? 60 : 90, padding:'4px 7px', fontSize:12 } })
                  )
                ),
                React.createElement('td', { style:sharedTd }, React.createElement('button', { style:{ padding:4, border:'none', background:'transparent', cursor:'pointer' } }, React.createElement(Ic, { name:'trash', size:13, color:'#ef4444' })))
              )
            )
          ),
          React.createElement('div', { style:{ display:'flex', gap:8, marginTop:10 } },
            React.createElement(Btn, { label:'+ Thêm dòng', variant:'outline', small:true }),
            React.createElement(Btn, { label:'Xóa hết dòng', variant:'danger', small:true })
          ),
          // Totals
          React.createElement('div', { style:{ display:'flex', justifyContent:'flex-end', marginTop:12 } },
            React.createElement('div', { style:{ width:260 } },
              [['Tổng tiền hàng','0'],['Thuế GTGT','0'],['Tổng tiền thanh toán','0']].map(([label, val]) =>
                React.createElement('div', { key:label, style:{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid #f3f4f6', fontSize:13 } },
                  React.createElement('span', { style:{ color:'#6b7280' } }, label),
                  React.createElement('span', { style:{ fontWeight: label.includes('Tổng tiền thanh') ? 700 : 400, color: label.includes('Tổng tiền thanh') ? acc : '#374151' } }, val)
                )
              )
            )
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

function BanList({ title, rows, type, columns }) {
  const acc = T.accent;
  const [sel, setSel] = useBanSt(0);
  const [detailOpen, setDetailOpen] = useBanSt(true);
  const [showForm, setShowForm] = useBanSt(false);
  return React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', padding:'16px 20px 0', position:'relative' } },
    React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 } },
      React.createElement('div', null,
        React.createElement('h1', { style:{ fontSize:18, fontWeight:800, color:'#111', margin:0 } }, title),
        React.createElement('p', { style:{ fontSize:12, color:'#9ca3af', margin:'2px 0 0' } }, 'Đầu năm tới hiện tại')
      ),
      React.createElement('div', { style:{ display:'flex', gap:8 } },
        React.createElement(Btn, { label:'Xuất Excel', icon:'download', variant:'outline' }),
        React.createElement(Btn, { label:'Tạo mới', icon:'plus', variant:'primary', acc, onClick:()=>setShowForm(true) })
      )
    ),
    React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' } },
      React.createElement(FilterBar, null),
      React.createElement('div', { style:{ flex: detailOpen ? '0 0 56%' : '1', overflow:'auto', background:'#fff', border:'1px solid #e5e7eb', borderBottom:'none' } },
        React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
          React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
            React.createElement('tr', null,
              React.createElement('th', { style:{ ...sharedTh, width:36 } }, React.createElement('input', { type:'checkbox', style:{ accentColor:acc } })),
              ...columns.map(c => React.createElement('th', { key:c.key, style:{ ...sharedTh, textAlign: c.right ? 'right' : 'left' } }, c.label)),
              React.createElement('th', { style:sharedTh }, '')
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
                ...columns.map(c => React.createElement('td', { key:c.key,
                  style:{ ...sharedTd, textAlign: c.right ? 'right' : 'left', color: c.link ? acc : c.color ? (row[c.key] === c.colorIf ? c.color : sharedTd.color) : sharedTd.color, fontWeight: c.link ? 600 : 400, cursor: c.link ? 'pointer' : 'default' },
                  onClick: c.link ? e => { e.stopPropagation(); setShowForm(true); } : undefined
                },
                  c.tag ? React.createElement(Tag, { label:row[c.key], variant: row[c.key]==='Đã xuất đủ'?'green':row[c.key]==='Đang giao'?'blue':row[c.key]==='Chưa xuất'?'yellow':'green', small:true }) : row[c.key]
                )),
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
              ['#','Mã hàng','Tên hàng','Kho','Hàng hỗ trợ','TK CN','TK DT','ĐVT','Số lượng','Đơn giá','Thành tiền'].map(h =>
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
                React.createElement('td', { style:sharedTd }),
                React.createElement('td', { style:sharedTd }, '131'),
                React.createElement('td', { style:sharedTd }, '5111'),
                React.createElement('td', { style:sharedTd }, d.dvt),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, d.sl.toFixed(2)),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, '85.000'),
                React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color:T.positive } }, '3.196.000')
              )
            )
          )
        )
      ),
      React.createElement(Pagination, { total: rows.length * 80 })
    ),
    showForm && React.createElement(BanHangForm, { type, onClose:()=>setShowForm(false) })
  );
}

const BH_COLS = [
  { key:'ngay', label:'Ngày HT' },
  { key:'so', label:'Số CT', link:true },
  { key:'kh', label:'Khách hàng' },
  { key:'tong', label:'Tổng tiền', right:true },
  { key:'tt_lap_hd', label:'TT lập HĐ' },
  { key:'tt_thanh_toan', label:'TT thanh toán' },
  { key:'tt_xuat', label:'TT xuất hàng', tag:true },
];
const DH_COLS = [
  { key:'ngay', label:'Ngày ĐH' },
  { key:'so', label:'Số ĐH', link:true },
  { key:'kh', label:'Khách hàng' },
  { key:'gt_don', label:'Giá trị ĐH', right:true },
  { key:'gt_da_xuat', label:'GT đã xuất HĐ', right:true },
  { key:'con_phai_thu', label:'Còn phải thu', right:true },
  { key:'tt_giao', label:'TT giao hàng', tag:true },
];

window.PageDonHang = () => React.createElement(BanList, { title:'Đơn đặt hàng', rows:MOCK.donDatHang, type:'donhang', columns:DH_COLS });
window.PageChungTuBH = () => React.createElement(BanList, { title:'Chứng từ bán hàng', rows:MOCK.banHang, type:'chungtubh', columns:BH_COLS });
window.PageTraLaiBan = () => React.createElement(BanList, { title:'Trả lại hàng bán', rows:MOCK.banHang.slice(0,1), type:'tralai_ban', columns:BH_COLS });
window.PageXuatKhoBH = () => React.createElement(BanList, { title:'Xuất kho bán hàng', rows:MOCK.xuatKho.filter(r=>r.loai.includes('bán')), type:'xuatkho_bh', columns:[
  { key:'ngay', label:'Ngày' }, { key:'so', label:'Số CT', link:true }, { key:'dien_giai', label:'Diễn giải' }, { key:'nguoi_nhan', label:'Người nhận' }, { key:'loai', label:'Loại', tag:true }
]});

})();