(function() {
// pages/DanhMuc.js — Hàng hóa, NCC, Khách hàng, Nhân viên, Phòng ban, Kho, ĐVT, Nhóm VTHH, TK NH
const { useState: useSt } = React;

// Generic list page for simple master data
function MasterList({ title, columns, rows, onAdd, onEdit }) {
  const acc = T.accent;
  return React.createElement('div', { style:{ flex:1, overflow:'auto', display:'flex', flexDirection:'column', padding:'16px 20px' } },
    React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 } },
      React.createElement('div', null,
        React.createElement('h1', { style:{ fontSize:18, fontWeight:800, color:'#111', margin:0 } }, title),
        React.createElement('p', { style:{ fontSize:12, color:'#9ca3af', margin:'2px 0 0' } }, `Quản lý ${title.toLowerCase()}`)
      ),
      React.createElement(Btn, { label:'Thêm mới', icon:'plus', variant:'primary', onClick:onAdd })
    ),
    React.createElement(FilterBar, null),
    React.createElement('div', { style:{ flex:1, overflow:'auto', background:'#fff', border:'1px solid #e5e7eb', borderTop:'none' } },
      React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', { style:{ ...sharedTh, width:36 } }, React.createElement('input', { type:'checkbox', style:{ accentColor:acc } })),
            ...columns.map(c => React.createElement('th', { key:c.key, style:{ ...sharedTh, textAlign: c.right ? 'right' : 'left' } }, c.label)),
            React.createElement('th', { style:{ ...sharedTh } }, 'Chức năng')
          )
        ),
        React.createElement('tbody', null,
          rows.map((row, i) => React.createElement('tr', { key:row.id, style:{ background: i%2===0 ? '#fff' : '#fafafa', borderBottom:'1px solid #f3f4f6', cursor:'pointer' },
            onMouseEnter: e => e.currentTarget.style.background = `${acc}08`,
            onMouseLeave: e => e.currentTarget.style.background = i%2===0 ? '#fff' : '#fafafa',
          },
            React.createElement('td', { style:{ padding:'10px 12px' } }, React.createElement('input', { type:'checkbox', style:{ accentColor:acc } })),
            ...columns.map(c => React.createElement('td', { key:c.key, style:{ ...sharedTd, textAlign: c.right ? 'right' : 'left', color: c.link ? acc : c.negative && row[c.key] === '0' ? '#9ca3af' : c.negative ? T.negative : sharedTd.color, fontWeight: c.link ? 500 : 400 } },
              c.tag ? React.createElement(Tag, { label: row[c.key], variant: row[c.key] === 'Hoạt động' ? 'green' : 'yellow' }) : row[c.key]
            )),
            React.createElement('td', { style:{ ...sharedTd } },
              React.createElement('div', { style:{ display:'flex', gap:6 } },
                React.createElement('button', { onClick:()=>onEdit(row), style:{ padding:'4px 10px', border:`1px solid ${acc}30`, borderRadius:5, background:`${acc}08`, color:acc, fontSize:11.5, fontWeight:500, cursor:'pointer' } }, 'Sửa'),
                React.createElement('button', { style:{ padding:'4px 10px', border:'1px solid #fecaca', borderRadius:5, background:'#fef2f2', color:'#dc2626', fontSize:11.5, fontWeight:500, cursor:'pointer' } }, 'Xóa')
              )
            )
          ))
        )
      )
    ),
    React.createElement(Pagination, { total: rows.length * 12 })
  );
}

// Form modal for simple master data
function MasterForm({ title, fields, onClose, acc }) {
  return React.createElement('div', { style:{ position:'absolute', inset:0, background:'rgba(0,0,0,0.35)', zIndex:100, display:'flex', alignItems:'center', justifyContent:'center' } },
    React.createElement('div', { style:{ background:'#fff', borderRadius:14, width:520, boxShadow:'0 20px 60px rgba(0,0,0,0.2)', overflow:'hidden' } },
      React.createElement('div', { style:{ padding:'16px 20px', borderBottom:'1px solid #e5e7eb', display:'flex', alignItems:'center', justifyContent:'space-between', background:'#f8fafc' } },
        React.createElement('span', { style:{ fontSize:15, fontWeight:700, color:'#111' } }, title),
        React.createElement('button', { onClick:onClose, style:{ padding:6, border:'1px solid #e5e7eb', borderRadius:7, background:'#fff', cursor:'pointer', display:'flex' } },
          React.createElement(Ic, { name:'x', size:16, color:'#6b7280' })
        )
      ),
      React.createElement('div', { style:{ padding:'20px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 } },
        ...fields.map(f => React.createElement(FormField, { key:f.key, label:f.label, span:f.span||1, withBtn:f.withBtn, acc }))
      ),
      React.createElement('div', { style:{ padding:'12px 20px', borderTop:'1px solid #e5e7eb', display:'flex', justifyContent:'flex-end', gap:8 } },
        React.createElement(Btn, { label:'Hủy', onClick:onClose }),
        React.createElement(Btn, { label:'Lưu', icon:'save', variant:'primary', onClick:onClose, acc })
      )
    )
  );
}

// ── HangHoa ────────────────────────────────────────────────────────
window.PageHangHoa = function() {
  const [showForm, setShowForm] = useSt(false);
  const [editRow, setEditRow] = useSt(null);
  const acc = T.accent;
  return React.createElement('div', { style:{ flex:1, overflow:'hidden', display:'flex', flexDirection:'column', position:'relative' } },
    React.createElement(MasterList, {
      title:'Hàng hóa, Dịch vụ',
      columns:[
        { key:'ten', label:'Tên hàng', link:false },
        { key:'ma', label:'Mã hàng', link:true },
        { key:'tinh_chat', label:'Tính chất' },
        { key:'nhom', label:'Nhóm VTHH' },
        { key:'dvt', label:'ĐVT' },
        { key:'sl_ton', label:'SL tồn', right:true },
        { key:'gt_ton', label:'Giá trị tồn', right:true },
      ],
      rows: MOCK.hangHoa,
      onAdd: () => { setEditRow(null); setShowForm(true); },
      onEdit: row => { setEditRow(row); setShowForm(true); },
    }),
    showForm && React.createElement(MasterForm, {
      title: editRow ? `Sửa: ${editRow.ten}` : 'Thêm hàng hóa, dịch vụ',
      acc,
      onClose: () => setShowForm(false),
      fields:[
        { key:'ma', label:'Mã hàng' },
        { key:'ten', label:'Tên hàng', span:2 },
        { key:'tinh_chat', label:'Tính chất' },
        { key:'nhom', label:'Nhóm VTHH', withBtn:true },
        { key:'dvt', label:'Đơn vị tính', withBtn:true },
        { key:'gia_von', label:'Giá vốn' },
      ]
    })
  );
};

// ── NCC ────────────────────────────────────────────────────────────
window.PageNCC = function() {
  const [showForm, setShowForm] = useSt(false);
  const [editRow, setEditRow] = useSt(null);
  const acc = T.accent;
  return React.createElement('div', { style:{ flex:1, overflow:'hidden', display:'flex', flexDirection:'column', position:'relative' } },
    React.createElement(MasterList, {
      title:'Nhà cung cấp',
      columns:[
        { key:'ma', label:'Mã NCC', link:true },
        { key:'ten', label:'Tên NCC' },
        { key:'dien_thoai', label:'Điện thoại' },
        { key:'email', label:'Email' },
        { key:'no_phai_tra', label:'Nợ phải trả', right:true, negative:true },
        { key:'trang_thai', label:'Trạng thái', tag:true },
      ],
      rows: MOCK.ncc,
      onAdd: () => setShowForm(true),
      onEdit: row => { setEditRow(row); setShowForm(true); },
    }),
    showForm && React.createElement(MasterForm, {
      title: editRow ? `Sửa: ${editRow.ten}` : 'Thêm nhà cung cấp',
      acc, onClose: () => { setShowForm(false); setEditRow(null); },
      fields:[
        { key:'ma', label:'Mã NCC' },
        { key:'ten', label:'Tên NCC', span:2 },
        { key:'dien_thoai', label:'Điện thoại' },
        { key:'email', label:'Email' },
        { key:'dia_chi', label:'Địa chỉ', span:2 },
        { key:'ms_thue', label:'Mã số thuế' },
        { key:'tk_nh', label:'Tài khoản NH' },
      ]
    })
  );
};

// ── KhachHang ──────────────────────────────────────────────────────
window.PageKhachHang = function() {
  const [showForm, setShowForm] = useSt(false);
  const [editRow, setEditRow] = useSt(null);
  const acc = T.accent;
  return React.createElement('div', { style:{ flex:1, overflow:'hidden', display:'flex', flexDirection:'column', position:'relative' } },
    React.createElement(MasterList, {
      title:'Khách hàng',
      columns:[
        { key:'ma', label:'Mã KH', link:true },
        { key:'ten', label:'Tên khách hàng' },
        { key:'dien_thoai', label:'Điện thoại' },
        { key:'email', label:'Email' },
        { key:'no_phai_thu', label:'Nợ phải thu', right:true },
        { key:'trang_thai', label:'Trạng thái', tag:true },
      ],
      rows: MOCK.khachHang,
      onAdd: () => setShowForm(true),
      onEdit: row => { setEditRow(row); setShowForm(true); },
    }),
    showForm && React.createElement(MasterForm, {
      title: editRow ? `Sửa: ${editRow.ten}` : 'Thêm khách hàng',
      acc, onClose: () => { setShowForm(false); setEditRow(null); },
      fields:[
        { key:'ma', label:'Mã khách hàng' },
        { key:'ten', label:'Tên khách hàng', span:2 },
        { key:'dien_thoai', label:'Điện thoại' },
        { key:'email', label:'Email' },
        { key:'dia_chi', label:'Địa chỉ', span:2 },
        { key:'ms_thue', label:'Mã số thuế' },
        { key:'cccd', label:'CCCD / Hộ chiếu' },
      ]
    })
  );
};

// ── Simple pages for NV, PhongBan, Kho, DVT, NhomVTHH, TKNganHang ──
function SimpleDMPage({ title, fields, sampleRows, columns }) {
  const [showForm, setShowForm] = useSt(false);
  const acc = T.accent;
  return React.createElement('div', { style:{ flex:1, overflow:'hidden', display:'flex', flexDirection:'column', position:'relative' } },
    React.createElement(MasterList, {
      title, columns, rows: sampleRows,
      onAdd: () => setShowForm(true),
      onEdit: () => setShowForm(true),
    }),
    showForm && React.createElement(MasterForm, { title:`Thêm ${title.toLowerCase()}`, acc, onClose:()=>setShowForm(false), fields })
  );
}

window.PageNhanVien = () => React.createElement(SimpleDMPage, {
  title:'Nhân viên',
  columns:[{ key:'ma', label:'Mã NV', link:true },{ key:'ten', label:'Họ tên' },{ key:'phong_ban', label:'Phòng ban' },{ key:'chuc_vu', label:'Chức vụ' },{ key:'trang_thai', label:'Trạng thái', tag:true }],
  sampleRows:[{ id:1, ma:'NV001', ten:'Lê Quang Hải', phong_ban:'Kế toán', chuc_vu:'Trưởng phòng', trang_thai:'Hoạt động' },{ id:2, ma:'NV002', ten:'Nguyễn Thị Mai', phong_ban:'Kho', chuc_vu:'Thủ kho', trang_thai:'Hoạt động' }],
  fields:[{ key:'ma', label:'Mã NV' },{ key:'ten', label:'Họ tên', span:2 },{ key:'phong_ban', label:'Phòng ban', withBtn:true },{ key:'chuc_vu', label:'Chức vụ' }]
});

window.PagePhongBan = () => React.createElement(SimpleDMPage, {
  title:'Phòng ban',
  columns:[{ key:'ma', label:'Mã' },{ key:'ten', label:'Tên phòng ban' },{ key:'mo_ta', label:'Mô tả' }],
  sampleRows:[{ id:1, ma:'PB01', ten:'Kế toán', mo_ta:'Quản lý tài chính' },{ id:2, ma:'PB02', ten:'Kho vận', mo_ta:'Quản lý kho hàng' },{ id:3, ma:'PB03', ten:'Kinh doanh', mo_ta:'Mua bán hàng hóa' }],
  fields:[{ key:'ma', label:'Mã phòng ban' },{ key:'ten', label:'Tên phòng ban' },{ key:'mo_ta', label:'Mô tả', span:2 }]
});

window.PageKhoDM = () => React.createElement(SimpleDMPage, {
  title:'Kho',
  columns:[{ key:'ma', label:'Mã kho', link:true },{ key:'ten', label:'Tên kho' },{ key:'dia_chi', label:'Địa chỉ' },{ key:'loai', label:'Loại kho' }],
  sampleRows:[{ id:1, ma:'TP', ten:'Kho thành phẩm', dia_chi:'Bình Dương', loai:'Kho nội bộ' },{ id:2, ma:'BTP', ten:'Kho bán thành phẩm', dia_chi:'Bình Dương', loai:'Kho nội bộ' },{ id:3, ma:'NVL', ten:'Kho nguyên vật liệu', dia_chi:'Bình Dương', loai:'Kho nội bộ' }],
  fields:[{ key:'ma', label:'Mã kho' },{ key:'ten', label:'Tên kho' },{ key:'dia_chi', label:'Địa chỉ', span:2 },{ key:'loai', label:'Loại kho' }]
});

window.PageDVT = () => React.createElement(SimpleDMPage, {
  title:'Đơn vị tính',
  columns:[{ key:'ma', label:'Mã' },{ key:'ten', label:'Tên đơn vị' },{ key:'mo_ta', label:'Mô tả' }],
  sampleRows:[{ id:1, ma:'KG', ten:'Kilogram', mo_ta:'' },{ id:2, ma:'CAI', ten:'Cái', mo_ta:'' },{ id:3, ma:'M', ten:'Mét', mo_ta:'' },{ id:4, ma:'CUON', ten:'Cuộn', mo_ta:'' }],
  fields:[{ key:'ma', label:'Mã ĐVT' },{ key:'ten', label:'Tên đơn vị tính' },{ key:'mo_ta', label:'Mô tả', span:2 }]
});

window.PageNhomVTHH = () => React.createElement(SimpleDMPage, {
  title:'Nhóm VT, HH, DV',
  columns:[{ key:'ma', label:'Mã nhóm', link:true },{ key:'ten', label:'Tên nhóm' },{ key:'cap', label:'Cấp' },{ key:'cha', label:'Nhóm cha' }],
  sampleRows:[{ id:1, ma:'TP', ten:'Thành phẩm', cap:'1', cha:'' },{ id:2, ma:'NVL', ten:'Nguyên vật liệu', cap:'1', cha:'' },{ id:3, ma:'BTP', ten:'Bán thành phẩm', cap:'1', cha:'' }],
  fields:[{ key:'ma', label:'Mã nhóm' },{ key:'ten', label:'Tên nhóm', span:2 },{ key:'cha', label:'Nhóm cha', withBtn:true },{ key:'cap', label:'Cấp' }]
});

window.PageTKNganHang = () => React.createElement(SimpleDMPage, {
  title:'Tài khoản ngân hàng',
  columns:[{ key:'so_tk', label:'Số tài khoản', link:true },{ key:'ngan_hang', label:'Ngân hàng' },{ key:'chi_nhanh', label:'Chi nhánh' },{ key:'so_du', label:'Số dư', right:true }],
  sampleRows:[{ id:1, so_tk:'6899999888', ngan_hang:'Ngân hàng TMCP Á Châu', chi_nhanh:'Bình Dương', so_du:'6.533.324.118' }],
  fields:[{ key:'so_tk', label:'Số tài khoản' },{ key:'ngan_hang', label:'Ngân hàng', span:2 },{ key:'chi_nhanh', label:'Chi nhánh' },{ key:'chu_tk', label:'Chủ tài khoản', span:2 }]
});

})();