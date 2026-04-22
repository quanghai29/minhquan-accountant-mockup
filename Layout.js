// Layout.js — App shell: sidebar, header, routing

const NAV = [
  { key: 'dashboard', label: 'Tổng quan', icon: 'dashboard' },
  { key: 'danhmuc',   label: 'Danh mục',  icon: 'danhmuc',  subs: [
    { key: 'hanghoa',   label: 'Hàng hóa, DV',       icon: 'package' },
    { key: 'ncc',       label: 'Nhà cung cấp',        icon: 'building' },
    { key: 'khachhang', label: 'Khách hàng',          icon: 'user' },
    { key: 'nhanvien',  label: 'Nhân viên',           icon: 'user' },
    { key: 'phongban',  label: 'Phòng ban',           icon: 'building' },
    { key: 'kho_dm',    label: 'Kho',                 icon: 'danhmuc' },
    { key: 'dvt',       label: 'Đơn vị tính',         icon: 'danhmuc' },
    { key: 'nhom_vthh', label: 'Nhóm VT, HH, DV',    icon: 'danhmuc' },
    { key: 'tk_nganhang',label:'Tài khoản ngân hàng', icon: 'bank' },
  ]},
  { key: 'kho',       label: 'Kho',      icon: 'kho',     subs: [
    { key: 'nhapkho',  label: 'Nhập kho',  icon: 'arrowIn' },
    { key: 'xuatkho',  label: 'Xuất kho',  icon: 'arrowOut' },
  ]},
  { key: 'tienthu',   label: 'Thu / Chi', icon: 'tienthu', subs: [
    { key: 'tienmat_thu', label: 'Tiền mặt — Thu', icon: 'receipt' },
    { key: 'tienmat_chi', label: 'Tiền mặt — Chi', icon: 'receipt' },
    { key: 'tiengui_thu', label: 'Tiền gửi — Thu', icon: 'bank' },
    { key: 'tiengui_chi', label: 'Tiền gửi — Chi', icon: 'bank' },
  ]},
  { key: 'muahang',   label: 'Mua hàng', icon: 'muahang', subs: [
    { key: 'muahang_list',  label: 'Danh sách mua hàng',  icon: 'receipt' },
    { key: 'tralai_mua',    label: 'Trả lại hàng mua',    icon: 'transfer' },
  ]},
  { key: 'banhang',   label: 'Bán hàng', icon: 'banhang', subs: [
    { key: 'donhang',      label: 'Đơn đặt hàng',         icon: 'receipt' },
    { key: 'chungtubh',    label: 'Chứng từ bán hàng',    icon: 'receipt' },
    { key: 'tralai_ban',   label: 'Trả lại hàng bán',     icon: 'transfer' },
    { key: 'xuatkho_bh',   label: 'Xuất kho bán hàng',    icon: 'arrowOut' },
  ]},
  { key: 'baocao',    label: 'Báo cáo',  icon: 'baocao',  subs: [
    { key: 'bc_tonkho',    label: 'Tổng hợp tồn kho',     icon: 'baocao' },
    { key: 'bc_doanhthu',  label: 'Báo cáo doanh thu',    icon: 'baocao' },
    { key: 'bc_donhang',   label: 'Báo cáo đơn hàng',     icon: 'baocao' },
    { key: 'bc_congno_thu',label: 'Công nợ phải thu',      icon: 'baocao' },
    { key: 'bc_congno_tra',label: 'Công nợ phải trả',      icon: 'baocao' },
    { key: 'bc_taichinh',  label: 'Tình hình tài chính',  icon: 'dashboard' },
  ]},
];

// Map every sub-key to its parent
const SUB_TO_PARENT = {};
NAV.forEach(n => (n.subs || []).forEach(s => SUB_TO_PARENT[s.key] = n.key));

window.Layout = function({ page, setPage, children }) {
  const acc = T.accent;

  // Determine active module
  const activeModule = SUB_TO_PARENT[page] || page;
  const module = NAV.find(n => n.key === activeModule) || NAV[0];

  // Notify localStorage
  React.useEffect(() => {
    localStorage.setItem('bms_page', page);
  }, [page]);

  const goto = (key) => setPage(key);

  return React.createElement('div', { style: { display:'flex', height:'100vh', flexDirection:'column', fontFamily:"'Be Vietnam Pro',sans-serif", background: T.bg } },
    // ── Top header ────────────────────────────────────────────────
    React.createElement('div', { style: { height:52, background:'#fff', display:'flex', alignItems:'center', padding:'0 20px', gap:12, flexShrink:0, borderBottom:'1px solid #e5e7eb', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', zIndex:10 } },
      // Logo
      React.createElement('div', { style:{ display:'flex', alignItems:'center', gap:8, cursor:'pointer' }, onClick:()=>goto('dashboard') },
        React.createElement('div', { style:{ width:32, height:32, background:`linear-gradient(135deg,${acc},${acc}bb)`, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 2px 8px ${acc}40` } },
          React.createElement(Ic, { name:'kho', size:16, color:'#fff' })
        ),
        React.createElement('span', { style:{ color:'#111', fontWeight:700, fontSize:14 } }, 'BMS')
      ),
      React.createElement('div', { style:{ width:1, height:20, background:'#e5e7eb' } }),
      // Company + year
      React.createElement('div', { style:{ display:'flex', alignItems:'center', gap:6, cursor:'pointer' } },
        React.createElement('span', { style:{ fontSize:13, color:'#374151', fontWeight:500 } }, 'CÔNG TY TNHH SÀI GÒN MQTEX'),
        React.createElement(Ic, { name:'chevdown', size:13, color:'#9ca3af' })
      ),
      React.createElement('span', { style:{ padding:'3px 9px', background:'#f0fdf4', color:'#15803d', borderRadius:5, fontSize:11.5, fontWeight:500, border:'1px solid #bbf7d0' } }, '2024'),
      React.createElement('div', { style:{ flex:1 } }),
      // Search
      React.createElement('div', { style:{ display:'flex', alignItems:'center', gap:7, padding:'7px 13px', background:'#f8fafc', border:'1px solid #e5e7eb', borderRadius:8, minWidth:240 } },
        React.createElement(Ic, { name:'search', size:14, color:'#9ca3af' }),
        React.createElement('input', { placeholder:'Tìm kiếm...', style:{ border:'none', outline:'none', fontSize:13, background:'transparent', flex:1, fontFamily:"'Be Vietnam Pro',sans-serif", color:'#374151' } })
      ),
      // Bell + avatar
      React.createElement('div', { style:{ display:'flex', gap:14, alignItems:'center', marginLeft:8 } },
        React.createElement('div', { style:{ position:'relative', cursor:'pointer' } },
          React.createElement(Ic, { name:'bell', size:18, color:'#6b7280' }),
          React.createElement('div', { style:{ position:'absolute', top:-2, right:-2, width:7, height:7, background:acc, borderRadius:'50%' } })
        ),
        React.createElement('div', {
          style:{ width:32, height:32, background:`${acc}18`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, color:acc, fontWeight:700, cursor:'pointer' }
        }, 'NT')
      )
    ),

    // ── Body ──────────────────────────────────────────────────────
    React.createElement('div', { style:{ display:'flex', flex:1, overflow:'hidden' } },

      // Icon sidebar
      React.createElement('div', { style:{ width:60, background:'#fff', display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0, borderRight:'1px solid #e5e7eb', padding:'6px 0', gap:2, overflowY:'auto' } },
        NAV.map(item => {
          const isActive = item.key === activeModule;
          return React.createElement('div', {
            key: item.key,
            title: item.label,
            onClick: () => {
              if (item.subs) goto(item.subs[0].key);
              else goto(item.key);
            },
            style: { width:44, height:44, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:10, cursor:'pointer', background: isActive ? `${acc}15` : 'transparent', color: isActive ? acc : '#9ca3af', transition:'all .15s', position:'relative', flexShrink:0 },
            onMouseEnter: e => { if (!isActive) { e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.color='#374151'; } },
            onMouseLeave: e => { if (!isActive) { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#9ca3af'; } },
          },
            React.createElement(Ic, { name: item.icon, size: 18, color: 'currentColor' }),
            isActive && React.createElement('div', { style:{ position:'absolute', left:-8, top:'50%', transform:'translateY(-50%)', width:3, height:20, background:acc, borderRadius:2 } })
          );
        }),
        React.createElement('div', { style:{ flex:1 } }),
        React.createElement('div', { title:'Cài đặt', style:{ width:44, height:44, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:10, cursor:'pointer', color:'#9ca3af' } },
          React.createElement(Ic, { name:'settings', size:18, color:'currentColor' })
        ),
        React.createElement('div', { title:'Đăng xuất', onClick:()=>goto('login'), style:{ width:44, height:44, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:10, cursor:'pointer', color:'#9ca3af' } },
          React.createElement(Ic, { name:'logout', size:18, color:'currentColor' })
        )
      ),

      // Sub-nav panel
      module.subs && React.createElement('div', { style:{ width:172, background:'#fff', flexShrink:0, borderRight:'1px solid #e5e7eb', display:'flex', flexDirection:'column', overflow:'hidden' } },
        // Module header
        React.createElement('div', { style:{ padding:'12px 12px 8px', borderBottom:'1px solid #f3f4f6' } },
          React.createElement('div', { style:{ display:'flex', alignItems:'center', gap:7 } },
            React.createElement('div', { style:{ width:26, height:26, background:`${acc}15`, borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center' } },
              React.createElement(Ic, { name:module.icon, size:14, color:acc })
            ),
            React.createElement('span', { style:{ fontSize:13, fontWeight:700, color:'#111' } }, module.label)
          )
        ),
        // Sub items
        React.createElement('div', { style:{ flex:1, overflowY:'auto', padding:'6px 6px' } },
          module.subs.map(sub => {
            const isActive = sub.key === page;
            return React.createElement('button', {
              key: sub.key,
              onClick: () => goto(sub.key),
              style: { width:'100%', display:'flex', alignItems:'center', gap:8, padding:'8px 9px', border:'none', borderRadius:8, cursor:'pointer', background: isActive ? `${acc}12` : 'transparent', color: isActive ? acc : '#4b5563', marginBottom:2, textAlign:'left', fontSize:12.5, fontWeight: isActive ? 600 : 400, fontFamily:"'Be Vietnam Pro',sans-serif", transition:'all .15s' },
              onMouseEnter: e => { if (!isActive) { e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.color='#111'; } },
              onMouseLeave: e => { if (!isActive) { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#4b5563'; } },
            },
              React.createElement(Ic, { name: sub.icon, size: 13, color: 'currentColor' }),
              sub.label
            );
          })
        )
      ),

      // Main content
      React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', background: T.bg } },
        children
      )
    )
  );
};
