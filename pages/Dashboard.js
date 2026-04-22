// pages/Dashboard.js
window.PageDashboard = function({ setPage }) {
  const acc = T.accent;
  const Card = ({ label, value, sub, color }) =>
    React.createElement('div', { style:{ background:'#fff', borderRadius:12, padding:'18px 20px', border:'1px solid #e5e7eb', flex:1 } },
      React.createElement('div', { style:{ fontSize:12, color:'#9ca3af', fontWeight:500, marginBottom:6, textTransform:'uppercase', letterSpacing:0.4 } }, label),
      React.createElement('div', { style:{ fontSize:22, fontWeight:800, color: color || '#111', fontVariantNumeric:'tabular-nums' } }, value),
      sub && React.createElement('div', { style:{ fontSize:11.5, color:'#9ca3af', marginTop:4 } }, sub)
    );

  const Row = ({ label, value, positive }) =>
    React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'9px 0', borderBottom:'1px solid #f3f4f6' } },
      React.createElement('span', { style:{ fontSize:13, color:'#374151' } }, label),
      React.createElement('span', { style:{ fontSize:13, fontWeight:600, color: positive === false ? T.negative : positive ? T.positive : '#111', fontVariantNumeric:'tabular-nums' } }, value)
    );

  return React.createElement('div', { style:{ flex:1, overflow:'auto', padding:'20px' } },
    // Header
    React.createElement('div', { style:{ marginBottom:20 } },
      React.createElement('h1', { style:{ fontSize:20, fontWeight:800, color:'#111', margin:0 } }, 'Tổng quan'),
      React.createElement('p', { style:{ fontSize:12.5, color:'#9ca3af', margin:'3px 0 0' } }, 'Cập nhật lúc 21:08 · 22/04/2026')
    ),

    // KPI cards
    React.createElement('div', { style:{ display:'flex', gap:12, marginBottom:20 } },
      React.createElement(Card, { label:'Doanh thu tháng này', value:'3.192.153.800 ₫', sub:'Đvt: đồng', color: T.positive }),
      React.createElement(Card, { label:'Chi phí', value:'108.546.354 ₫', sub:'Đvt: đồng', color:'#374151' }),
      React.createElement(Card, { label:'Lợi nhuận', value:'3.083.607.446 ₫', sub:'Đvt: đồng', color: acc }),
      React.createElement(Card, { label:'Hàng tồn kho', value:'51.984.502.510 ₫', sub:'Đvt: đồng', color:'#374151' }),
    ),

    // Two panels
    React.createElement('div', { style:{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 } },
      // Financial summary
      React.createElement('div', { style:{ background:'#fff', borderRadius:12, padding:'20px', border:'1px solid #e5e7eb' } },
        React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 } },
          React.createElement('span', { style:{ fontSize:14, fontWeight:700, color:'#111' } }, 'Tình hình tài chính'),
          React.createElement('span', { style:{ fontSize:12, color:'#9ca3af' } }, 'Tháng này')
        ),
        React.createElement(Row, { label:'Tổng tiền mặt & tiền gửi', value:'(6.253.457.220)', positive: false }),
        React.createElement(Row, { label:'  · Tiền mặt', value:'279.866.898', positive: true }),
        React.createElement(Row, { label:'  · Tiền gửi', value:'(6.533.324.118)', positive: false }),
        React.createElement(Row, { label:'Phải thu', value:'3.872.141.498', positive: true }),
        React.createElement(Row, { label:'Phải trả', value:'15.940.146.461', positive: false }),
      ),

      // Quick actions
      React.createElement('div', { style:{ background:'#fff', borderRadius:12, padding:'20px', border:'1px solid #e5e7eb' } },
        React.createElement('div', { style:{ fontSize:14, fontWeight:700, color:'#111', marginBottom:14 } }, 'Thao tác nhanh'),
        [
          { label:'Tạo phiếu nhập kho', icon:'arrowIn', page:'nhapkho' },
          { label:'Tạo phiếu xuất kho', icon:'arrowOut', page:'xuatkho' },
          { label:'Tạo phiếu thu tiền mặt', icon:'receipt', page:'tienmat_thu' },
          { label:'Tạo đơn bán hàng', icon:'banhang', page:'donhang' },
          { label:'Tạo đơn mua hàng', icon:'muahang', page:'muahang_list' },
          { label:'Xem báo cáo tồn kho', icon:'baocao', page:'bc_tonkho' },
        ].map(a => React.createElement('button', {
          key: a.page, onClick: () => setPage(a.page),
          style:{ width:'100%', display:'flex', alignItems:'center', gap:10, padding:'9px 12px', border:'1px solid #f3f4f6', borderRadius:8, background:'#fafafa', cursor:'pointer', marginBottom:6, fontFamily:"'Be Vietnam Pro',sans-serif", fontSize:13, color:'#374151', textAlign:'left', transition:'background .15s' },
          onMouseEnter: e => e.currentTarget.style.background = `${acc}08`,
          onMouseLeave: e => e.currentTarget.style.background = '#fafafa',
        },
          React.createElement('div', { style:{ width:28, height:28, background:`${acc}12`, borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center' } },
            React.createElement(Ic, { name:a.icon, size:14, color:acc })
          ),
          a.label,
          React.createElement('span', { style:{ marginLeft:'auto', color:'#d1d5db' } }, React.createElement(Ic, { name:'chevright', size:14 }))
        ))
      )
    )
  );
};
