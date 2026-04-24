// DanhMuc.js — All "Danh mục" (Master Data) list pages.
// Each is a thin wrapper over PageHeader + FilterBar + DataTable + Pagination,
// keeping the exact column names from the old MISA-style system.

(function () {
  // Shared list-page shell
  const ListShell = ({ title, subtitle, createLabel, columns, rows, total, rowKey = 'id', onRowClick }) => {
    const [sel, setSel] = React.useState(null);
    return React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '18px 22px 0' } },
      React.createElement(PageHeader, {
        title, subtitle,
        actions: React.createElement(React.Fragment, null,
          React.createElement(Btn, { label: 'Nhập Excel', variant: 'outline', icon: 'download' }),
          React.createElement(Btn, { label: createLabel || 'Thêm mới', variant: 'primary', icon: 'plus' })
        )
      }),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingBottom: 14 } },
        React.createElement(FilterBar, {}),
        React.createElement('div', { style: { flex: 1, overflow: 'auto', background: T.surface, border: `1px solid ${T.border}`, borderTop: 'none' } },
          React.createElement(DataTable, {
            rowKey, columns, rows,
            selectedId: sel, onSelect: setSel, onRowClick
          })
        ),
        React.createElement(Pagination, { total: total || rows.length, perPage: 20, current: 1 })
      )
    );
  };

  // ── Hàng hóa, dịch vụ ─────────────────────────────────────────
  window.PageHangHoa = function () {
    return React.createElement(ListShell, {
      title: 'Hàng hóa, dịch vụ',
      subtitle: 'Quản lý danh mục vật tư, thành phẩm, bán thành phẩm',
      createLabel: 'Thêm hàng hóa',
      rows: MOCK.hangHoa,
      total: 1248,
      columns: [
        { key: 'ma',         label: 'Mã hàng',      width: 150, bold: true, link: true },
        { key: 'ten',        label: 'Tên hàng hóa, dịch vụ' },
        { key: 'tinh_chat',  label: 'Tính chất',    width: 110, render: r => React.createElement(Tag, { label: r.tinh_chat, variant: r.tinh_chat === 'Thành phẩm' ? 'green' : r.tinh_chat === 'NVL' ? 'blue' : 'yellow', small: true }) },
        { key: 'nhom',       label: 'Nhóm',         width: 70 },
        { key: 'dvt',        label: 'ĐVT',          width: 60 },
        { key: 'gia_von',    label: 'Giá vốn',      right: true, render: r => React.createElement(MoneyCell, { value: r.gia_von, zero: 'dash' }) },
        { key: 'gia_ban',    label: 'Giá bán',      right: true, render: r => React.createElement(MoneyCell, { value: r.gia_ban, zero: 'dash' }) },
        { key: 'sl_ton',     label: 'SL tồn',       right: true, render: r => r.sl_ton ? r.sl_ton.toLocaleString('vi-VN') : '—' },
        { key: 'gt_ton',     label: 'Giá trị tồn',  right: true, render: r => React.createElement(MoneyCell, { value: r.gt_ton, zero: 'dash' }) },
      ]
    });
  };

  // ── Nhà cung cấp ─────────────────────────────────────────────
  window.PageNCC = function () {
    return React.createElement(ListShell, {
      title: 'Nhà cung cấp',
      subtitle: 'Danh mục đối tác cung cấp vật tư, hàng hóa',
      createLabel: 'Thêm nhà cung cấp',
      rows: MOCK.ncc,
      total: 72,
      columns: [
        { key: 'ma',         label: 'Mã NCC',        width: 100, bold: true, link: true },
        { key: 'ten',        label: 'Tên nhà cung cấp' },
        { key: 'dien_thoai', label: 'Điện thoại',    width: 120 },
        { key: 'email',      label: 'Email',         width: 180 },
        { key: 'dia_chi',    label: 'Địa chỉ',       width: 160 },
        { key: 'ms_thue',    label: 'Mã số thuế',    width: 120 },
        { key: 'no_phai_tra',label: 'Nợ phải trả',   right: true, render: r => React.createElement(MoneyCell, { value: r.no_phai_tra, tone: 'negative', zero: 'dash' }) },
        { key: 'trang_thai', label: 'Trạng thái',    width: 110, render: r => React.createElement(Tag, { label: r.trang_thai, variant: 'green', small: true }) },
      ]
    });
  };

  // ── Khách hàng ───────────────────────────────────────────────
  window.PageKhachHang = function () {
    return React.createElement(ListShell, {
      title: 'Khách hàng',
      subtitle: 'Danh mục khách hàng mua hàng',
      createLabel: 'Thêm khách hàng',
      rows: MOCK.khachHang,
      total: 998,
      columns: [
        { key: 'ma',         label: 'Mã KH',         width: 100, bold: true, link: true },
        { key: 'ten',        label: 'Tên khách hàng' },
        { key: 'dien_thoai', label: 'Điện thoại',    width: 120 },
        { key: 'email',      label: 'Email',         width: 180 },
        { key: 'dia_chi',    label: 'Địa chỉ',       width: 160 },
        { key: 'ms_thue',    label: 'Mã số thuế',    width: 120 },
        { key: 'no_phai_thu',label: 'Nợ phải thu',   right: true, render: r => React.createElement(MoneyCell, { value: r.no_phai_thu, tone: 'accent', zero: 'dash' }) },
        { key: 'trang_thai', label: 'Trạng thái',    width: 110, render: r => React.createElement(Tag, { label: r.trang_thai, variant: 'green', small: true }) },
      ]
    });
  };

  // ── Nhân viên ────────────────────────────────────────────────
  window.PageNhanVien = function () {
    return React.createElement(ListShell, {
      title: 'Nhân viên',
      subtitle: 'Danh mục nhân sự của công ty',
      createLabel: 'Thêm nhân viên',
      rows: MOCK.nhanVien,
      total: 18,
      columns: [
        { key: 'ma',         label: 'Mã NV',         width: 100, bold: true },
        { key: 'ten',        label: 'Họ và tên' },
        { key: 'phong_ban',  label: 'Phòng ban',     width: 160 },
        { key: 'chuc_vu',    label: 'Chức vụ',       width: 160 },
        { key: 'trang_thai', label: 'Trạng thái',    width: 110, render: r => React.createElement(Tag, { label: r.trang_thai, variant: 'green', small: true }) },
      ]
    });
  };

  // ── Phòng ban ────────────────────────────────────────────────
  window.PagePhongBan = function () {
    return React.createElement(ListShell, {
      title: 'Phòng ban',
      subtitle: 'Cơ cấu phòng ban của công ty',
      createLabel: 'Thêm phòng ban',
      rows: MOCK.phongBan,
      columns: [
        { key: 'ma',   label: 'Mã',        width: 100, bold: true },
        { key: 'ten',  label: 'Tên phòng ban', width: 240 },
        { key: 'mo_ta',label: 'Mô tả' },
      ]
    });
  };

  // ── Kho ──────────────────────────────────────────────────────
  window.PageKhoDM = function () {
    return React.createElement(ListShell, {
      title: 'Kho',
      subtitle: 'Danh mục kho hàng',
      createLabel: 'Thêm kho',
      rows: MOCK.kho,
      columns: [
        { key: 'ma',       label: 'Mã kho', width: 100, bold: true },
        { key: 'ten',      label: 'Tên kho', width: 260 },
        { key: 'dia_chi',  label: 'Địa chỉ' },
        { key: 'loai',     label: 'Loại kho', width: 140, render: r => React.createElement(Tag, { label: r.loai, variant: 'gray', small: true }) },
      ]
    });
  };

  // ── Đơn vị tính ──────────────────────────────────────────────
  window.PageDVT = function () {
    return React.createElement(ListShell, {
      title: 'Đơn vị tính',
      subtitle: 'Danh mục đơn vị tính',
      createLabel: 'Thêm ĐVT',
      rows: MOCK.dvt,
      columns: [
        { key: 'ma',   label: 'Mã ĐVT',  width: 100, bold: true },
        { key: 'ten',  label: 'Tên',      width: 220 },
        { key: 'mo_ta',label: 'Mô tả' },
      ]
    });
  };

  // ── Nhóm VT, HH, DV ──────────────────────────────────────────
  window.PageNhomVTHH = function () {
    return React.createElement(ListShell, {
      title: 'Nhóm vật tư, hàng hóa, dịch vụ',
      subtitle: 'Cây nhóm hàng — quản lý phân loại',
      createLabel: 'Thêm nhóm',
      rows: MOCK.nhomVTHH,
      columns: [
        { key: 'ma',  label: 'Mã nhóm', width: 100, bold: true },
        { key: 'ten', label: 'Tên nhóm', width: 260 },
        { key: 'cap', label: 'Cấp',      width: 60 },
        { key: 'cha', label: 'Nhóm cha', render: r => r.cha || '—' },
      ]
    });
  };

  // ── Tài khoản ngân hàng ──────────────────────────────────────
  window.PageTKNganHang = function () {
    return React.createElement(ListShell, {
      title: 'Tài khoản ngân hàng',
      subtitle: 'Danh mục tài khoản ngân hàng của công ty',
      createLabel: 'Thêm tài khoản',
      rows: MOCK.tkNH,
      columns: [
        { key: 'so_tk',     label: 'Số tài khoản',  width: 160, bold: true },
        { key: 'ngan_hang', label: 'Ngân hàng' },
        { key: 'chi_nhanh', label: 'Chi nhánh',     width: 180 },
        { key: 'chu_tk',    label: 'Chủ tài khoản', width: 220 },
        { key: 'so_du',     label: 'Số dư',         right: true, render: r => React.createElement(MoneyCell, { value: r.so_du, tone: 'positive' }) },
      ]
    });
  };
})();
