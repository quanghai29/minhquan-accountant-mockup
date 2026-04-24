// nav.js — Navigation + role-based access map
// Roles: ketoan (Kế toán / Accountant) — full, sale (Bán hàng) — restricted

window.NAV = [
  { key: 'dashboard', label: 'Tổng quan', icon: 'dashboard' },

  { key: 'danhmuc', label: 'Danh mục', icon: 'danhmuc', subs: [
    { key: 'hanghoa',     label: 'Hàng hóa, DV',       icon: 'package' },
    { key: 'ncc',         label: 'Nhà cung cấp',        icon: 'building' },
    { key: 'khachhang',   label: 'Khách hàng',          icon: 'user' },
    { key: 'nhanvien',    label: 'Nhân viên',           icon: 'users' },
    { key: 'phongban',    label: 'Phòng ban',           icon: 'building' },
    { key: 'kho_dm',      label: 'Kho',                 icon: 'danhmuc' },
    { key: 'dvt',         label: 'Đơn vị tính',         icon: 'danhmuc' },
    { key: 'nhom_vthh',   label: 'Nhóm VT, HH, DV',    icon: 'danhmuc' },
    { key: 'tk_nganhang', label: 'Tài khoản ngân hàng', icon: 'bank' },
  ]},

  { key: 'kho', label: 'Kho', icon: 'kho', subs: [
    { key: 'nhapkho', label: 'Nhập kho', icon: 'arrowIn' },
    { key: 'xuatkho', label: 'Xuất kho', icon: 'arrowOut' },
  ]},

  { key: 'tienthu', label: 'Thu / Chi', icon: 'tienthu', subs: [
    { key: 'tienmat_thu', label: 'Tiền mặt — Thu', icon: 'receipt' },
    { key: 'tienmat_chi', label: 'Tiền mặt — Chi', icon: 'receipt' },
    { key: 'tiengui_thu', label: 'Tiền gửi — Thu', icon: 'bank' },
    { key: 'tiengui_chi', label: 'Tiền gửi — Chi', icon: 'bank' },
  ]},

  { key: 'muahang', label: 'Mua hàng', icon: 'muahang', subs: [
    { key: 'muahang_list', label: 'Danh sách mua hàng', icon: 'receipt' },
    { key: 'tralai_mua',   label: 'Trả lại hàng mua',    icon: 'transfer' },
  ]},

  { key: 'banhang', label: 'Bán hàng', icon: 'banhang', subs: [
    { key: 'donhang',    label: 'Đơn đặt hàng',      icon: 'receipt' },
    { key: 'chungtubh',  label: 'Chứng từ bán hàng', icon: 'receipt' },
    { key: 'tralai_ban', label: 'Trả lại hàng bán',  icon: 'transfer' },
    { key: 'xuatkho_bh', label: 'Xuất kho bán hàng', icon: 'arrowOut' },
  ]},

  { key: 'baocao', label: 'Báo cáo', icon: 'baocao', subs: [
    { key: 'bc_tonkho',     label: 'Tổng hợp tồn kho',    icon: 'baocao' },
    { key: 'bc_doanhthu',   label: 'Báo cáo doanh thu',   icon: 'baocao' },
    { key: 'bc_donhang',    label: 'Báo cáo đơn hàng',    icon: 'baocao' },
    { key: 'bc_congno_thu', label: 'Công nợ phải thu',     icon: 'baocao' },
    { key: 'bc_congno_tra', label: 'Công nợ phải trả',     icon: 'baocao' },
    { key: 'bc_taichinh',   label: 'Tình hình tài chính', icon: 'dashboard' },
  ]},
];

// Role → allowed page keys (sub-keys). Empty-means-all at module level.
// Sale role: dashboard, khách hàng + hàng hóa (xem), bán hàng (đặt hàng + chứng từ), báo cáo doanh thu/đơn hàng.
window.ROLE_ACCESS = {
  ketoan: null, // null = full access
  sale: new Set([
    'dashboard',
    // Danh mục — view only
    'khachhang', 'hanghoa',
    // Bán hàng — core
    'donhang', 'chungtubh', 'xuatkho_bh',
    // Báo cáo — limited
    'bc_doanhthu', 'bc_donhang',
  ]),
};

// Sub-to-parent map (computed once)
window.SUB_TO_PARENT = {};
window.NAV.forEach(n => (n.subs || []).forEach(s => window.SUB_TO_PARENT[s.key] = n.key));

// Role helpers
window.isAllowed = function (pageKey, role) {
  const access = window.ROLE_ACCESS[role];
  if (!access) return true; // full access
  return access.has(pageKey);
};

// Build a NAV tree filtered for the given role
window.navForRole = function (role) {
  const access = window.ROLE_ACCESS[role];
  if (!access) return window.NAV;
  return window.NAV
    .map(item => {
      if (!item.subs) return access.has(item.key) ? item : null;
      const subs = item.subs.filter(s => access.has(s.key));
      if (!subs.length) return null;
      return { ...item, subs };
    })
    .filter(Boolean);
};

// Role metadata
window.ROLES = [
  { key: 'ketoan', label: 'Kế toán',    short: 'KT', icon: 'receipt' },
  { key: 'sale',   label: 'Bán hàng',   short: 'BH', icon: 'banhang' },
];
