(function() {
// pages/BaoCao.js — Báo cáo tồn kho, doanh thu, đơn hàng, công nợ, tài chính
const { useState: useBCSt } = React;

function ReportShell({ title, subtitle, children }) {
  const acc = T.accent;
  return React.createElement('div', { style:{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', padding:'16px 20px' } },
    React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 } },
      React.createElement('div', null,
        React.createElement('h1', { style:{ fontSize:18, fontWeight:800, color:'#111', margin:0 } }, title),
        React.createElement('p', { style:{ fontSize:12, color:'#9ca3af', margin:'2px 0 0' } }, subtitle || 'Tháng 4 năm 2026')
      ),
      React.createElement('div', { style:{ display:'flex', gap:8 } },
        React.createElement(Btn, { label:'Lưu báo cáo', variant:'outline' }),
        React.createElement(Btn, { label:'Chọn tham số', variant:'outline' }),
        React.createElement(Btn, { label:'Xuất Excel', icon:'download', variant:'primary', acc })
      )
    ),
    React.createElement('div', { style:{ display:'flex', gap:8, marginBottom:12 } },
      React.createElement(Btn, { label:'Lọc', icon:'filter', variant:'outline', small:true }),
      React.createElement('div', { style:{ display:'flex', alignItems:'center', gap:6, padding:'5px 10px', border:'1px solid #e5e7eb', borderRadius:6, background:'#fff', fontSize:12 } },
        React.createElement(Ic, { name:'search', size:12, color:'#9ca3af' }),
        React.createElement('input', { placeholder:'Tìm kiếm...', style:{ border:'none', outline:'none', fontSize:12, width:160, background:'transparent', fontFamily:"'Be Vietnam Pro',sans-serif" } })
      ),
      React.createElement(Btn, { label:'', icon:'refresh', variant:'ghost', small:true }),
    ),
    children
  );
}

// ── Tổng hợp tồn kho ──────────────────────────────────────────────
window.PageBCTonKho = function() {
  const acc = T.accent;
  const rows = [
    { kho:'Bán thành phẩm', ma:'DACATICI', ten:'MỘC DA CÁ TICI', dvt:'kg', dk_sl:0, dk_gt:0, nhap_sl:0, nhap_gt:0, xuat_sl:0, xuat_gt:0, ck_sl:0, ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCBONGCT', ten:'Mộc Bông Cotton', dvt:'kg', dk_sl:0, dk_gt:0, nhap_sl:0, nhap_gt:0, xuat_sl:0, xuat_gt:0, ck_sl:0, ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCASAUTHUNME', ten:'Mộc Cá Sầu Thun Mè', dvt:'kg', dk_sl:0, dk_gt:0, nhap_sl:0, nhap_gt:0, xuat_sl:0, xuat_gt:0, ck_sl:0, ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCHANCUA', ten:'Mộc Chân Cua', dvt:'kg', dk_sl:18.2, dk_gt:0, nhap_sl:2012.2, nhap_gt:0, xuat_sl:2012.2, xuat_gt:0, ck_sl:18.2, ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCMTC_CVC', ten:'Mộc cá mập Tici (mặt CVC)', dvt:'kg', dk_sl:0, dk_gt:0, nhap_sl:0, nhap_gt:0, xuat_sl:0, xuat_gt:0, ck_sl:0, ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCS2DA230GRM', ten:'Mộc cá sầu 2da - 230grm', dvt:'kg', dk_sl:641, dk_gt:0, nhap_sl:3205, nhap_gt:0, xuat_sl:641, xuat_gt:0, ck_sl:641, ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCSCVC', ten:'Mộc cá sầu CVC', dvt:'kg', dk_sl:0, dk_gt:0, nhap_sl:3354.6, nhap_gt:'16.773.000', xuat_sl:3354.6, xuat_gt:0, ck_sl:0, ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCSPOLY', ten:'Mộc cá sầu Poly', dvt:'kg', dk_sl:329.4, dk_gt:0, nhap_sl:1647, nhap_gt:0, xuat_sl:329.4, xuat_gt:0, ck_sl:329.4, ck_gt:0 },
  ];
  return React.createElement(ReportShell, { title:'Tổng hợp tồn kho' },
    React.createElement('div', { style:{ flex:1, overflow:'auto', background:'#fff', borderRadius:10, border:'1px solid #e5e7eb' } },
      React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12 } },
        React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
          React.createElement('tr', null,
            React.createElement('th', { style:{ ...sharedTh }, rowSpan:2 }, 'Tên kho'),
            React.createElement('th', { style:{ ...sharedTh }, rowSpan:2 }, 'Mã hàng'),
            React.createElement('th', { style:{ ...sharedTh }, rowSpan:2 }, 'Tên hàng'),
            React.createElement('th', { style:{ ...sharedTh }, rowSpan:2 }, 'ĐVT'),
            React.createElement('th', { style:{ ...sharedTh, textAlign:'center', borderLeft:'1px solid #e5e7eb' }, colSpan:2 }, 'Đầu kỳ'),
            React.createElement('th', { style:{ ...sharedTh, textAlign:'center', borderLeft:'1px solid #e5e7eb' }, colSpan:2 }, 'Nhập kho'),
            React.createElement('th', { style:{ ...sharedTh, textAlign:'center', borderLeft:'1px solid #e5e7eb' }, colSpan:2 }, 'Xuất kho'),
            React.createElement('th', { style:{ ...sharedTh, textAlign:'center', borderLeft:'1px solid #e5e7eb' }, colSpan:2 }, 'Cuối kỳ'),
          ),
          React.createElement('tr', null,
            ...['Số lượng','Giá trị','Số lượng','Giá trị','Số lượng','Giá trị','Số lượng','Giá trị'].map((h, i) =>
              React.createElement('th', { key:i, style:{ ...sharedTh, textAlign:'right', fontSize:11, borderLeft: i%2===0 ? '1px solid #e5e7eb' : 'none' } }, h)
            )
          )
        ),
        React.createElement('tbody', null,
          rows.map((row, i) =>
            React.createElement('tr', { key:i, style:{ background: i%2===0 ? '#fff' : '#fafafa', borderBottom:'1px solid #f3f4f6' } },
              React.createElement('td', { style:sharedTd }, row.kho),
              React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:500 } }, row.ma),
              React.createElement('td', { style:sharedTd }, row.ten),
              React.createElement('td', { style:sharedTd }, row.dvt),
              ...[row.dk_sl, row.dk_gt, row.nhap_sl, row.nhap_gt, row.xuat_sl, row.xuat_gt, row.ck_sl, row.ck_gt].map((v, j) =>
                React.createElement('td', { key:j, style:{ ...sharedTd, textAlign:'right', color: v && v !== 0 ? T.positive : '#9ca3af', borderLeft: j%2===0 ? '1px solid #f3f4f6' : 'none' } }, v || '')
              )
            )
          )
        ),
        React.createElement('tfoot', null,
          React.createElement('tr', { style:{ background:'#f8fafc', borderTop:'2px solid #e5e7eb', fontWeight:700 } },
            React.createElement('td', { colSpan:4, style:{ ...sharedTd, fontWeight:700 } }, 'Tổng cộng'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, '54.984,72'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.positive } }, ''),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, '56.282,20'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.positive } }, '1.090.662.600'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, '70.280,82'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, ''),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, ''),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.positive } }, '51.984.502.510'),
          )
        )
      )
    ),
    React.createElement(Pagination, { total:905 })
  );
};

// ── Báo cáo doanh thu ─────────────────────────────────────────────
window.PageBCDoanhThu = function() {
  const acc = T.accent;
  const rows = MOCK.banHang.map(r => ({ ...r, doanh_thu: r.tong, von: '0', loi_nhuan: r.tong }));
  return React.createElement(ReportShell, { title:'Báo cáo doanh thu' },
    React.createElement('div', { style:{ flex:1, overflow:'auto', background:'#fff', borderRadius:10, border:'1px solid #e5e7eb' } },
      React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
        React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
          React.createElement('tr', null,
            ['Ngày','Số CT','Khách hàng','Doanh thu','Giá vốn','Lợi nhuận gộp','TT thanh toán','TT xuất hàng'].map(h =>
              React.createElement('th', { key:h, style:{ ...sharedTh, textAlign: ['Doanh thu','Giá vốn','Lợi nhuận gộp'].includes(h) ? 'right' : 'left' } }, h)
            )
          )
        ),
        React.createElement('tbody', null,
          rows.map((row, i) =>
            React.createElement('tr', { key:i, style:{ background: i%2===0 ? '#fff' : '#fafafa', borderBottom:'1px solid #f1f5f9' } },
              React.createElement('td', { style:sharedTd }, row.ngay),
              React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:600 } }, row.so),
              React.createElement('td', { style:sharedTd }, row.kh),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:600, color:T.positive } }, row.tong),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, '0'),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color:T.positive } }, row.tong),
              React.createElement('td', { style:sharedTd }, React.createElement(Tag, { label:row.tt_thanh_toan, variant:'yellow', small:true })),
              React.createElement('td', { style:sharedTd }, React.createElement(Tag, { label:row.tt_xuat, variant: row.tt_xuat==='Đã xuất đủ'?'green':'yellow', small:true }))
            )
          )
        )
      )
    ),
    React.createElement(Pagination, { total:349 })
  );
};

// ── Báo cáo đơn hàng ─────────────────────────────────────────────
window.PageBCDonHang = function() {
  const acc = T.accent;
  return React.createElement(ReportShell, { title:'Báo cáo đơn hàng' },
    React.createElement('div', { style:{ flex:1, overflow:'auto', background:'#fff', borderRadius:10, border:'1px solid #e5e7eb' } },
      React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
        React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
          React.createElement('tr', null,
            ['Ngày ĐH','Số ĐH','Khách hàng','Giá trị ĐH','Đã xuất HĐ','Thực thu','Còn phải thu','Tình trạng giao'].map(h =>
              React.createElement('th', { key:h, style:{ ...sharedTh, textAlign: ['Giá trị ĐH','Đã xuất HĐ','Thực thu','Còn phải thu'].includes(h) ? 'right' : 'left' } }, h)
            )
          )
        ),
        React.createElement('tbody', null,
          MOCK.donDatHang.map((row, i) =>
            React.createElement('tr', { key:i, style:{ background: i%2===0 ? '#fff' : '#fafafa', borderBottom:'1px solid #f1f5f9' } },
              React.createElement('td', { style:sharedTd }, row.ngay),
              React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:600 } }, row.so),
              React.createElement('td', { style:sharedTd }, row.kh),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color:T.positive, fontWeight:600 } }, row.gt_don),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, row.gt_da_xuat),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, row.thuc_thu || 0),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color:T.negative } }, row.con_phai_thu),
              React.createElement('td', { style:sharedTd }, React.createElement(Tag, { label:row.tt_giao, variant: row.tt_giao==='Đã giao đủ'?'green':'blue', small:true }))
            )
          )
        )
      )
    ),
    React.createElement(Pagination, { total:254 })
  );
};

// ── Công nợ phải thu ─────────────────────────────────────────────
window.PageBCCongNoThu = function() {
  const acc = T.accent;
  const rows = MOCK.khachHang.map(kh => ({ ...kh, no_dau_ky:'0', phat_sinh_no:'0', phat_sinh_co:'0', no_cuoi_ky: kh.no_phai_thu }));
  return React.createElement(ReportShell, { title:'Tổng hợp công nợ phải thu khách hàng' },
    React.createElement('div', { style:{ flex:1, overflow:'auto', background:'#fff', borderRadius:10, border:'1px solid #e5e7eb' } },
      React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
        React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
          React.createElement('tr', null,
            ['Mã KH','Tên khách hàng','Nợ đầu kỳ','Phát sinh Nợ','Phát sinh Có','Nợ cuối kỳ'].map(h =>
              React.createElement('th', { key:h, style:{ ...sharedTh, textAlign: ['Nợ đầu kỳ','Phát sinh Nợ','Phát sinh Có','Nợ cuối kỳ'].includes(h) ? 'right' : 'left' } }, h)
            )
          )
        ),
        React.createElement('tbody', null,
          rows.map((row, i) =>
            React.createElement('tr', { key:i, style:{ borderBottom:'1px solid #f1f5f9' } },
              React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:600 } }, row.ma),
              React.createElement('td', { style:sharedTd }, row.ten),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, row.no_dau_ky),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color:T.positive } }, row.phat_sinh_no),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, row.phat_sinh_co),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.positive } }, row.no_cuoi_ky)
            )
          )
        ),
        React.createElement('tfoot', null,
          React.createElement('tr', { style:{ background:'#f8fafc', borderTop:'2px solid #e5e7eb' } },
            React.createElement('td', { colSpan:2, style:{ ...sharedTd, fontWeight:700 } }, 'Tổng cộng'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, '0'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.positive } }, '3.872.141.498'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, '0'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.positive } }, '3.872.141.498'),
          )
        )
      )
    )
  );
};

// ── Công nợ phải trả ─────────────────────────────────────────────
window.PageBCCongNoTra = function() {
  const acc = T.accent;
  const rows = MOCK.ncc.map(ncc => ({ ...ncc, no_dau_ky:'0', phat_sinh_no:'0', phat_sinh_co:'0', no_cuoi_ky: ncc.no_phai_tra }));
  return React.createElement(ReportShell, { title:'Tổng hợp công nợ phải trả NCC' },
    React.createElement('div', { style:{ flex:1, overflow:'auto', background:'#fff', borderRadius:10, border:'1px solid #e5e7eb' } },
      React.createElement('table', { style:{ width:'100%', borderCollapse:'collapse', fontSize:12.5 } },
        React.createElement('thead', { style:{ position:'sticky', top:0, zIndex:1 } },
          React.createElement('tr', null,
            ['Mã NCC','Tên nhà cung cấp','Nợ đầu kỳ','Phát sinh Nợ','Phát sinh Có','Nợ cuối kỳ'].map(h =>
              React.createElement('th', { key:h, style:{ ...sharedTh, textAlign: ['Nợ đầu kỳ','Phát sinh Nợ','Phát sinh Có','Nợ cuối kỳ'].includes(h) ? 'right' : 'left' } }, h)
            )
          )
        ),
        React.createElement('tbody', null,
          rows.map((row, i) =>
            React.createElement('tr', { key:i, style:{ borderBottom:'1px solid #f1f5f9' } },
              React.createElement('td', { style:{ ...sharedTd, color:acc, fontWeight:600 } }, row.ma),
              React.createElement('td', { style:sharedTd }, row.ten),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, row.no_dau_ky),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right' } }, row.phat_sinh_no),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', color:T.negative } }, row.phat_sinh_co),
              React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.negative } }, row.no_cuoi_ky)
            )
          )
        ),
        React.createElement('tfoot', null,
          React.createElement('tr', { style:{ background:'#f8fafc', borderTop:'2px solid #e5e7eb' } },
            React.createElement('td', { colSpan:2, style:{ ...sharedTd, fontWeight:700 } }, 'Tổng cộng'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, '0'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700 } }, '0'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.negative } }, '15.940.146.461'),
            React.createElement('td', { style:{ ...sharedTd, textAlign:'right', fontWeight:700, color:T.negative } }, '15.940.146.461'),
          )
        )
      )
    )
  );
};

// ── Tổng quan tài chính ───────────────────────────────────────────
window.PageBCTaiChinh = function() {
  const acc = T.accent;
  const Row2 = ({ label, value, indent, positive, bold }) =>
    React.createElement('div', { style:{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f3f4f6' } },
      React.createElement('span', { style:{ fontSize:13, color: indent ? '#6b7280' : '#374151', paddingLeft: indent ? 16 : 0, fontWeight: bold ? 700 : 400 } }, label),
      React.createElement('span', { style:{ fontSize:13, fontWeight: bold ? 700 : 600, color: positive === false ? T.negative : positive ? T.positive : '#111', fontVariantNumeric:'tabular-nums' } }, value)
    );
  return React.createElement(ReportShell, { title:'Tổng quan tài chính', subtitle:'Số liệu tính đến: 21h08 · 22/04/2026' },
    React.createElement('div', { style:{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 } },
      React.createElement('div', { style:{ background:'#fff', borderRadius:12, padding:'20px', border:'1px solid #e5e7eb' } },
        React.createElement('div', { style:{ fontSize:14, fontWeight:700, marginBottom:12, color:'#111' } }, 'Tình hình tiền tệ'),
        React.createElement(Row2, { label:'TỔNG TIỀN', value:'(6.253.457.220)', positive:false, bold:true }),
        React.createElement(Row2, { label:'Tiền mặt', value:'279.866.898', positive:true, indent:true }),
        React.createElement(Row2, { label:'Tiền gửi', value:'(6.533.324.118)', positive:false, indent:true }),
        React.createElement(Row2, { label:'Phải thu', value:'3.872.141.498', positive:true, bold:true }),
        React.createElement(Row2, { label:'Phải trả', value:'15.940.146.461', positive:false, bold:true }),
      ),
      React.createElement('div', { style:{ background:'#fff', borderRadius:12, padding:'20px', border:'1px solid #e5e7eb' } },
        React.createElement('div', { style:{ fontSize:14, fontWeight:700, marginBottom:12, color:'#111' } }, 'Kết quả kinh doanh tháng này'),
        React.createElement(Row2, { label:'Doanh thu', value:'3.192.153.800', positive:true }),
        React.createElement(Row2, { label:'Chi phí', value:'108.546.354', positive:false }),
        React.createElement(Row2, { label:'Lợi nhuận', value:'3.083.607.446', positive:true, bold:true }),
        React.createElement(Row2, { label:'Hàng tồn kho', value:'51.984.502.510', bold:true }),
      )
    )
  );
};

})();