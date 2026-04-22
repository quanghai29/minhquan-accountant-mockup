// shared.js — Icons, shared components, mock data
// All exports go to window.*

const ACCENT = '#0d9488';

// ── Icons ──────────────────────────────────────────────────────────
const ICON_PATHS = {
  dashboard: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10',
  danhmuc: 'M4 6h16M4 10h16M4 14h16M4 18h16',
  kho: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12',
  tienthu: 'M12 2a10 10 0 100 20A10 10 0 0012 2z M12 6v6l4 2',
  muahang: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18 M16 10a4 4 0 01-8 0',
  banhang: 'M22 12h-4l-3 9L9 3l-3 9H2',
  baocao: 'M18 20V10 M12 20V4 M6 20v-6',
  settings: 'M12 15a3 3 0 100-6 3 3 0 000 6z',
  logout: 'M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9',
  search: 'M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z',
  plus: 'M12 5v14M5 12h14',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  download: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3',
  refresh: 'M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15',
  edit: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z',
  trash: 'M3 6h18 M19 6l-1 14H6L5 6 M10 11v6M14 11v6 M9 6V4h6v2',
  x: 'M18 6L6 18M6 6l12 12',
  chevdown: 'M6 9l6 6 6-6',
  chevup: 'M18 15l-6-6-6 6',
  chevright: 'M9 18l6-6-6-6',
  save: 'M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z M17 21v-8H7v8 M7 3v5h8',
  print: 'M6 9V2h12v7 M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2 M6 14h12v7H6z',
  bell: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0',
  user: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z',
  arrowIn: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M17 8l-5-5-5 5 M12 3v13',
  arrowOut: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3',
  transfer: 'M17 1l4 4-4 4 M3 11V9a4 4 0 014-4h14 M7 23l-4-4 4-4 M21 13v2a4 4 0 01-4 4H3',
  check: 'M20 6L9 17l-5-5',
  eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z',
  building: 'M3 21h18 M9 21V7l6-4v18 M3 21V10l6-3',
  package: 'M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z M12 2v18 M3 6.5l9 4.5 9-4.5',
  bank: 'M3 21h18 M3 10h18 M5 6l7-3 7 3 M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11',
  receipt: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M8 13h8 M8 17h5',
};

window.Ic = function({ name, size = 16, color = 'currentColor', strokeWidth = 1.8 }) {
  const d = ICON_PATHS[name] || ICON_PATHS.check;
  const paths = d.split(' M').map((p, i) => (i === 0 ? p : 'M' + p));
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round'
  }, paths.map((p, i) => React.createElement('path', { key: i, d: p })));
};

// ── Design tokens ──────────────────────────────────────────────────
window.T = {
  accent: ACCENT,
  bg: '#f1f5f9',
  white: '#ffffff',
  border: '#e5e7eb',
  text: '#111827',
  textMid: '#374151',
  textMute: '#6b7280',
  textFaint: '#9ca3af',
  positive: '#1d4ed8',
  negative: '#dc2626',
  tagGreen: { bg: '#f0fdf4', color: '#15803d' },
  tagBlue: { bg: '#eff6ff', color: '#1d4ed8' },
  tagRed: { bg: '#fef2f2', color: '#dc2626' },
  tagYellow: { bg: '#fefce8', color: '#a16207' },
};

// ── Shared style objects ───────────────────────────────────────────
window.sharedTh = { padding: '10px 12px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: '#6b7280', borderBottom: '1.5px solid #e5e7eb', whiteSpace: 'nowrap', background: '#f8fafc' };
window.sharedTd = { padding: '10px 12px', color: '#374151', fontSize: 12.5 };
window.sharedInput = { border: '1px solid #e5e7eb', borderRadius: 6, padding: '7px 10px', fontSize: 13, outline: 'none', width: '100%', fontFamily: "'Be Vietnam Pro',sans-serif", color: '#111827', background: '#fff' };
window.sharedSelect = { ...window.sharedInput, cursor: 'pointer' };

// ── FormField ──────────────────────────────────────────────────────
window.FormField = function({ label, value = '', placeholder = '', type = 'text', withBtn = false, span = 1, acc = ACCENT, wide = false }) {
  const { useState } = React;
  const [val, setVal] = useState(value);
  return React.createElement('div', { style: { gridColumn: `span ${span}` } },
    React.createElement('label', { style: { display: 'block', fontSize: 12, fontWeight: 500, color: '#6b7280', marginBottom: 4 } }, label),
    React.createElement('div', { style: { display: 'flex', gap: 4 } },
      React.createElement('input', {
        type, value: val, placeholder,
        onChange: e => setVal(e.target.value),
        style: { ...window.sharedInput, flex: 1, height: 34 }
      }),
      withBtn && React.createElement('button', {
        style: { padding: '0 9px', border: `1px solid ${acc}30`, borderRadius: 6, background: `${acc}10`, cursor: 'pointer', display: 'flex', alignItems: 'center' }
      }, React.createElement(window.Ic, { name: 'plus', size: 13, color: acc }))
    )
  );
};

// ── Tag/Badge ──────────────────────────────────────────────────────
window.Tag = function({ label, variant = 'green', small = false }) {
  const styles = { green: T.tagGreen, blue: T.tagBlue, red: T.tagRed, yellow: T.tagYellow };
  const s = styles[variant] || styles.green;
  return React.createElement('span', {
    style: { background: s.bg, color: s.color, padding: small ? '2px 6px' : '3px 9px', borderRadius: 5, fontSize: small ? 10.5 : 11.5, fontWeight: 500, whiteSpace: 'nowrap' }
  }, label);
};

// ── Btn ───────────────────────────────────────────────────────────
window.Btn = function({ label, icon, onClick, variant = 'outline', small = false, acc = ACCENT }) {
  const styles = {
    primary: { background: acc, color: '#fff', border: 'none', boxShadow: `0 2px 8px ${acc}40` },
    outline: { background: '#fff', color: '#374151', border: '1.5px solid #e5e7eb' },
    ghost: { background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb' },
    danger: { background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' },
  };
  const s = styles[variant] || styles.outline;
  return React.createElement('button', {
    onClick,
    style: { display: 'flex', alignItems: 'center', gap: 5, padding: small ? '5px 10px' : '7px 14px', borderRadius: 7, cursor: 'pointer', fontSize: small ? 12 : 13, fontWeight: 500, fontFamily: "'Be Vietnam Pro',sans-serif", transition: 'opacity .15s', ...s }
  },
    icon && React.createElement(window.Ic, { name: icon, size: small ? 12 : 14, color: 'currentColor' }),
    label
  );
};

// ── Pagination ────────────────────────────────────────────────────
window.Pagination = function({ total = 429, perPage = 20 }) {
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' } },
    React.createElement('span', { style: { fontSize: 12, color: '#9ca3af' } }, `Tổng số: ${total} bản ghi`),
    React.createElement('div', { style: { display: 'flex', gap: 4, alignItems: 'center' } },
      React.createElement('span', { style: { fontSize: 12, color: '#6b7280', marginRight: 4 } }, '20 / trang'),
      ...[1, 2, 3, '…', Math.ceil(total / perPage)].map((p, i) =>
        React.createElement('button', { key: i, style: { padding: '4px 9px', border: '1px solid', borderColor: p === 1 ? ACCENT : '#e5e7eb', borderRadius: 6, background: p === 1 ? ACCENT : '#fff', color: p === 1 ? '#fff' : '#374151', fontSize: 12, cursor: 'pointer', fontFamily: "'Be Vietnam Pro',sans-serif" } }, p)
      )
    )
  );
};

// ── FilterBar ────────────────────────────────────────────────────
window.FilterBar = function({ onSearch, extra }) {
  return React.createElement('div', {
    style: { background: '#fff', borderRadius: '10px 10px 0 0', border: '1px solid #e5e7eb', borderBottom: 'none', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }
  },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 5, padding: '6px 11px', border: '1px solid #e5e7eb', borderRadius: 7, background: '#f9fafb', cursor: 'pointer', fontSize: 12.5, color: '#374151' } },
      React.createElement(window.Ic, { name: 'filter', size: 12, color: '#6b7280' }),
      'Lọc',
      React.createElement(window.Ic, { name: 'chevdown', size: 11, color: '#9ca3af' })
    ),
    extra,
    React.createElement('div', { style: { flex: 1 } }),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6, padding: '6px 11px', border: '1px solid #e5e7eb', borderRadius: 7, background: '#fff', minWidth: 210 } },
      React.createElement(window.Ic, { name: 'search', size: 13, color: '#9ca3af' }),
      React.createElement('input', { placeholder: 'Tìm kiếm...', style: { border: 'none', outline: 'none', fontSize: 12.5, background: 'transparent', flex: 1, fontFamily: "'Be Vietnam Pro',sans-serif", color: '#374151' } })
    ),
    React.createElement('button', { style: { padding: '6px 7px', border: '1px solid #e5e7eb', borderRadius: 7, background: '#f9fafb', cursor: 'pointer', display: 'flex' } },
      React.createElement(window.Ic, { name: 'refresh', size: 14, color: '#6b7280' })
    ),
    React.createElement('button', { style: { padding: '6px 7px', border: '1px solid #e5e7eb', borderRadius: 7, background: '#f9fafb', cursor: 'pointer', display: 'flex' } },
      React.createElement(window.Ic, { name: 'download', size: 14, color: '#6b7280' })
    )
  );
};

// ── DetailPanel ──────────────────────────────────────────────────
window.DetailPanel = function({ open, onToggle, label, children }) {
  return React.createElement('div', {
    style: { flex: open ? '0 0 42%' : '0 0 36px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '0 0 10px 10px', display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'flex .2s' }
  },
    React.createElement('div', {
      onClick: onToggle,
      style: { padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, background: '#f8fafc', borderTop: '2px solid #e5e7eb', cursor: 'pointer', flexShrink: 0 }
    },
      React.createElement(window.Ic, { name: open ? 'chevup' : 'chevdown', size: 13, color: '#9ca3af' }),
      React.createElement('span', { style: { fontSize: 12.5, fontWeight: 600, color: '#374151' } }, 'Chi tiết'),
      label && React.createElement('span', { style: { fontSize: 11, color: '#9ca3af' } }, '— ' + label)
    ),
    open && React.createElement('div', { style: { flex: 1, overflow: 'auto' } }, children)
  );
};

// ── Mock data ────────────────────────────────────────────────────
window.MOCK = {
  hangHoa: [
    { id:1, ten:'6410-MQ311 ĐEN', ma:'6410-MQ311', tinh_chat:'Thành phẩm', nhom:'TP', dvt:'kg', sl_ton:0, gt_ton:'2.825.600' },
    { id:2, ten:'AIGVN 16 Black - MQ3057', ma:'AIGVN16BLACK', tinh_chat:'Thành phẩm', nhom:'TP', dvt:'kg', sl_ton:0, gt_ton:'0' },
    { id:3, ten:'AIGVN 16 Blue - MQ3057', ma:'AIGVN16BLUE', tinh_chat:'Thành phẩm', nhom:'TP', dvt:'kg', sl_ton:0, gt_ton:'8.522.666' },
    { id:4, ten:'Cá sấu CVC Vô đầu 15 CAY', ma:'CASAUCVCVODAU', tinh_chat:'NVL', nhom:'TP', dvt:'kg', sl_ton:273.2, gt_ton:'23.450.000' },
    { id:5, ten:'Cá sấu CVC Vàng Mơ 14 CAY', ma:'CASAUCVCVANGMO14', tinh_chat:'NVL', nhom:'TP', dvt:'kg', sl_ton:266.0, gt_ton:'18.900.000' },
    { id:6, ten:'Mộc Bông Cotton', ma:'MOCBONGCT', tinh_chat:'Thành phẩm', nhom:'TP', dvt:'kg', sl_ton:0, gt_ton:'0' },
    { id:7, ten:'Mộc Cá Sầu Thun Mè', ma:'MOCCASAUTHUNME', tinh_chat:'Thành phẩm', nhom:'TP', dvt:'kg', sl_ton:0, gt_ton:'0' },
    { id:8, ten:'Mộc chân cua', ma:'MOCCHANCUA', tinh_chat:'Thành phẩm', nhom:'TP', dvt:'kg', sl_ton:18.2, gt_ton:'2.100.000' },
  ],
  ncc: [
    { id:1, ma:'NCC00005', ten:'CÔNG TY TNHH SẢN XUẤT VẢI', dien_thoai:'0901234567', email:'ncc5@gmail.com', no_phai_tra:'15.940.000', trang_thai:'Hoạt động' },
    { id:2, ma:'NCC00041', ten:'CÔNG TY TNHH DỆT MQTEX', dien_thoai:'0912345678', email:'mqtex@gmail.com', no_phai_tra:'8.200.000', trang_thai:'Hoạt động' },
    { id:3, ma:'NCC00069', ten:'CÔNG TY TNHH DV BÔNG', dien_thoai:'0923456789', email:'bong@gmail.com', no_phai_tra:'0', trang_thai:'Hoạt động' },
  ],
  khachHang: [
    { id:1, ma:'KH001', ten:'CÔNG TY CỔ PHẦN OKAPI', dien_thoai:'0934567890', email:'okapi@gmail.com', no_phai_thu:'1.036.800', trang_thai:'Hoạt động' },
    { id:2, ma:'KH002', ten:'ANH THÁI TRẦN', dien_thoai:'0945678901', email:'thai@gmail.com', no_phai_thu:'16.800', trang_thai:'Hoạt động' },
    { id:3, ma:'KH003', ten:'CÔNG TY TNHH GARMENT', dien_thoai:'0956789012', email:'garment@gmail.com', no_phai_thu:'28.350.000', trang_thai:'Hoạt động' },
  ],
  nhapKho: [
    { id:1, ngay:'22/04/2026', so:'NK0080_04', dien_giai:'Mua hàng của CÔNG TY TNH...', tong:0, doi_tuong:'NCC00005', loai:'Mua hàng trong nước nhập kho chưa thanh toán' },
    { id:2, ngay:'22/04/2026', so:'NK0079_04', dien_giai:'XUẤT HD SỐ 120 + 121', tong:'6.681.280', doi_tuong:'NCC00005', loai:'Mua hàng trong nước nhập kho chưa thanh toán' },
    { id:3, ngay:'22/04/2026', so:'NK0078_04', dien_giai:'Nhập kho trả lại hàng bán...', tong:0, doi_tuong:'KH0998', loai:'Nhập kho từ hàng bán trả lại' },
    { id:4, ngay:'22/04/2026', so:'NK0077_04', dien_giai:'NHẬP MỘC NGÀY 22/04', tong:'3.213.000', doi_tuong:'NCC041', loai:'Mua hàng trong nước nhập kho chưa thanh toán' },
    { id:5, ngay:'21/04/2026', so:'NK0076_04', dien_giai:'Mua hàng CÔNG TY TNH...', tong:0, doi_tuong:'NCC069', loai:'Mua hàng trong nước nhập kho chưa thanh toán' },
  ],
  xuatKho: [
    { id:1, ngay:'22/04/2026', so:'XK0151_04', dien_giai:'Xuất kho sản xuất', tong:0, nguoi_nhan:'CÔNG TY TNHH SẢN XUẤT...', loai:'Xuất kho sản xuất' },
    { id:2, ngay:'22/04/2026', so:'XK0150_04', dien_giai:'Xuất kho sản xuất', tong:0, nguoi_nhan:'CÔNG TY TNHH SX-T...', loai:'Xuất kho sản xuất' },
    { id:3, ngay:'22/04/2026', so:'XK0149_04', dien_giai:'Xuất kho sản xuất', tong:0, nguoi_nhan:'CÔNG TY TNHH NHIỀU...', loai:'Xuất kho sản xuất' },
    { id:4, ngay:'22/04/2026', so:'XK0147_04', dien_giai:'Xuất kho bán hàng CỔ PHẦN...', tong:0, nguoi_nhan:'CÔNG TY CỔ PHẦN...', loai:'Xuất kho bán hàng' },
  ],
  chiTietKho: [
    { ma:'CASAUCVCVODAU', ten:'Cá Sấu CVC Vô Đầu 15 CÂY', kho:'TP', tk_no:'1551', tk_co:'331', dvt:'kg', sl:273.20, don_gia:0, tt:0 },
    { ma:'CASAUCVCVANGMO14', ten:'Cá Sấu CVC Vàng Mơ 14 CÂY', kho:'TP', tk_no:'1551', tk_co:'331', dvt:'kg', sl:266.00, don_gia:0, tt:0 },
    { ma:'CSCVCRUOC2', ten:'Cá Sấu CVC Ruốc 14 CÂY', kho:'TP', tk_no:'1551', tk_co:'331', dvt:'kg', sl:262.50, don_gia:0, tt:0 },
  ],
  tienMat: [
    { id:1, ngay:'21/04/2026', so:'PT0074_01', dien_giai:'Thanh toán tiền...', so_tien:'9.686.354', doi_tuong:'NGUYỄN THANH...', ly_do:'Rút tiền gửi về nhập quỹ', loai:'Phiếu thu' },
    { id:2, ngay:'21/04/2026', so:'PC0168_01', dien_giai:'Thanh toán tiền...', so_tien:'9.686.354', doi_tuong:'NGUYỄN THANH...', ly_do:'Chi khác', loai:'Phiếu chi' },
    { id:3, ngay:'18/04/2026', so:'PT0076_01', dien_giai:'Thu tiền của ANH...', so_tien:'150.000.800', doi_tuong:'ANH QUÝ...', ly_do:'Thu khác', loai:'Phiếu thu' },
    { id:4, ngay:'17/04/2026', so:'PT0077_01', dien_giai:'Thu tiền của CÔNG TY...', so_tien:'25.000.000', doi_tuong:'CÔNG TY TNHH...', ly_do:'Thu khác', loai:'Phiếu thu' },
  ],
  muaHang: [
    { id:1, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0080_04', ma_ncc:'NCC00005', ncc:'CÔNG TY TNHH...', dien_giai:'Mua hàng của CÔNG TY...', tong:0, gt_nhap:0, tt_thanh_toan:'Chưa thanh toán', loai:'Mua hàng trong nước nhập kho chưa thanh toán' },
    { id:2, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0079_04', ma_ncc:'NCC00005', ncc:'CÔNG TY TNHH...', dien_giai:'XUẤT HD SỐ 120+121', tong:'6.681.280', gt_nhap:'6.681.280', tt_thanh_toan:'Chưa thanh toán', loai:'Mua hàng trong nước nhập kho chưa thanh toán' },
    { id:3, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0077_04', ma_ncc:'NCC041', ncc:'CÔNG TY TNHH DỆT...', dien_giai:'NHẬP MỘC NGÀY...', tong:'3.213.000', gt_nhap:'3.213.000', tt_thanh_toan:'Chưa thanh toán', loai:'Mua hàng trong nước nhập kho chưa thanh toán' },
  ],
  banHang: [
    { id:1, ngay:'22/04/2026', so:'BH0147_04', kh:'CÔNG TY CỔ PHẦN OKAPI', tong:'1.036.800', tt_lap_hd:'Chưa lập', tt_thanh_toan:'Chưa thanh toán', tt_xuat:'Chưa xuất', loai:'Bán hàng trong nước' },
    { id:2, ngay:'22/04/2026', so:'BH0146_04', kh:'ANH THÁI TRẦN', tong:'16.800', tt_lap_hd:'Chưa lập', tt_thanh_toan:'Chưa thanh toán', tt_xuat:'Chưa xuất', loai:'Bán hàng trong nước' },
    { id:3, ngay:'22/04/2026', so:'BH0145_04', kh:'CÔNG TY TNHH GARMENT...', tong:'28.350.000', tt_lap_hd:'Chưa lập', tt_thanh_toan:'Chưa thanh toán', tt_xuat:'Đã xuất đủ', loai:'Bán hàng trong nước' },
    { id:4, ngay:'21/04/2026', so:'BH0141_04', kh:'CÔNG TY TNHH GARMENT', tong:'49.824.000', tt_lap_hd:'Chưa lập', tt_thanh_toan:'Chưa thanh toán', tt_xuat:'Đã xuất đủ', loai:'Bán hàng trong nước' },
  ],
  donDatHang: [
    { id:1, ngay:'21/04/2026', so:'DH0002859', kh:'HỘ KINH DOANH...', gt_don:'9.324.500', gt_da_xuat:'10.070.460', thuc_thu:0, con_phai_thu:'10.070.460', tt_giao:'Đã giao đủ', loai:'Sale Order' },
    { id:2, ngay:'20/04/2026', so:'DH0002857', kh:'CÔNG TY TNHH M...', gt_don:'50.873.000', gt_da_xuat:'53.786.160', thuc_thu:0, con_phai_thu:'53.786.160', tt_giao:'Đang giao', loai:'Sale Order' },
    { id:3, ngay:'20/04/2026', so:'DH0002856', kh:'CÔNG TY TNHH...', gt_don:'35.800.000', gt_da_xuat:'40.533.480', thuc_thu:0, con_phai_thu:'40.533.480', tt_giao:'Đã giao đủ', loai:'Sale Order' },
  ],
};
