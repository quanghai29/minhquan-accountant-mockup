// BanHang.js — Bán hàng: Đơn đặt hàng, Chứng từ bán hàng, Trả lại hàng bán, Xuất kho bán hàng

(function () {
  // ── Đơn đặt hàng ───────────────────────────────────────────
  window.PageDonHang = function () {
    const [sel, setSel] = React.useState(MOCK.donDatHang[0]?.id);
    return React.createElement('div', {
      style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '18px 22px 0' }
    },
      React.createElement(PageHeader, {
        title: 'Đơn đặt hàng',
        subtitle: 'Đơn hàng từ khách, theo dõi tình trạng giao và thu tiền',
        actions: React.createElement(React.Fragment, null,
          React.createElement(Btn, { label: 'In đơn', variant: 'outline', icon: 'print' }),
          React.createElement(Btn, { label: 'Thêm đơn đặt hàng', variant: 'primary', icon: 'plus' })
        )
      }),

      React.createElement('div', { style: { display: 'flex', gap: 10, marginBottom: 12 } },
        React.createElement(KPICard, { label: 'Tổng đơn', value: '3', sub: 'Trong tháng', tone: 'neutral', icon: 'banhang' }),
        React.createElement(KPICard, { label: 'Giá trị đơn', value: '96.0M', sub: '3 khách hàng', tone: 'neutral', icon: 'tienthu' }),
        React.createElement(KPICard, { label: 'Đã xuất', value: '104.4M', sub: 'Đã giao đủ', tone: 'positive', icon: 'arrowOut' }),
        React.createElement(KPICard, { label: 'Còn phải thu', value: '84.4M', sub: 'Chờ thanh toán', tone: 'neutral', icon: 'tienthu' }),
      ),

      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingBottom: 14 } },
        React.createElement(FilterBar, {}),
        React.createElement('div', { style: { flex: 1, overflow: 'auto', background: T.surface, border: `1px solid ${T.border}`, borderTop: 'none' } },
          React.createElement(DataTable, {
            rowKey: 'id', selectedId: sel, onSelect: setSel,
            rows: MOCK.donDatHang,
            columns: [
              { key: 'ngay',        label: 'Ngày đặt',       width: 100 },
              { key: 'so',          label: 'Số đơn',          width: 130, bold: true, link: true },
              { key: 'ma_kh',       label: 'Mã KH',           width: 100, bold: true },
              { key: 'kh',          label: 'Khách hàng' },
              { key: 'nv_ban',      label: 'NV bán',          width: 90 },
              { key: 'gt_don',      label: 'Giá trị đơn',     right: true, render: r => React.createElement(MoneyCell, { value: r.gt_don, tone: 'neutral' }) },
              { key: 'gt_da_xuat',  label: 'Đã xuất',         right: true, render: r => React.createElement(MoneyCell, { value: r.gt_da_xuat, tone: 'positive' }) },
              { key: 'thuc_thu',    label: 'Thực thu',        right: true, render: r => React.createElement(MoneyCell, { value: r.thuc_thu, tone: 'positive', zero: 'dash' }) },
              { key: 'con_phai_thu',label: 'Còn phải thu',    right: true, render: r => React.createElement(MoneyCell, { value: r.con_phai_thu, tone: 'neutral', zero: 'dash' }) },
              { key: 'tt_giao',     label: 'TT giao hàng',    width: 130, render: r => React.createElement(Tag, { label: r.tt_giao, variant: r.tt_giao === 'Đã giao đủ' ? 'green' : 'yellow', small: true }) },
            ]
          })
        ),
        React.createElement(Pagination, { total: 156, perPage: 20, current: 1 })
      )
    );
  };

  // ── Chứng từ bán hàng ─────────────────────────────────────
  window.PageChungTuBH = function () {
    const [sel, setSel] = React.useState(MOCK.banHang[0]?.id);
    return React.createElement('div', {
      style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '18px 22px 0' }
    },
      React.createElement(PageHeader, {
        title: 'Chứng từ bán hàng',
        subtitle: 'Hóa đơn, phiếu bán hàng theo dõi trạng thái lập HĐ, thanh toán, xuất kho',
        actions: React.createElement(React.Fragment, null,
          React.createElement(Btn, { label: 'Nhập Excel', variant: 'outline', icon: 'download' }),
          React.createElement(Btn, { label: 'In chứng từ', variant: 'outline', icon: 'print' }),
          React.createElement(Btn, { label: 'Thêm bán hàng', variant: 'primary', icon: 'plus' })
        )
      }),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingBottom: 14 } },
        React.createElement(FilterBar, {
          extra: React.createElement('div', { style: { display: 'flex', gap: 6 } },
            React.createElement('span', {
              style: { padding: '6px 13px', fontSize: 12.5, background: T.surface, color: T.text,
                borderRadius: 'var(--r-pill)', fontWeight: 400, border: `1px solid ${T.border}`,
                letterSpacing: '-0.005em' }
            }, 'Tháng 04/2026')
          )
        }),
        React.createElement('div', { style: { flex: 1, overflow: 'auto', background: T.surface, border: `1px solid ${T.border}`, borderTop: 'none' } },
          React.createElement(DataTable, {
            rowKey: 'id', selectedId: sel, onSelect: setSel,
            rows: MOCK.banHang,
            columns: [
              { key: 'ngay',         label: 'Ngày HT',       width: 100 },
              { key: 'so',           label: 'Số CT',         width: 120, bold: true, link: true },
              { key: 'ma_kh',        label: 'Mã KH',         width: 100, bold: true },
              { key: 'kh',           label: 'Khách hàng' },
              { key: 'tong',         label: 'Tổng tiền',     right: true, render: r => React.createElement(MoneyCell, { value: r.tong, tone: 'neutral' }) },
              { key: 'tt_lap_hd',    label: 'TT lập HĐ',     width: 110, render: r => React.createElement(Tag, { label: r.tt_lap_hd, variant: r.tt_lap_hd === 'Đã lập' ? 'green' : 'gray', small: true }) },
              { key: 'tt_thanh_toan',label: 'TT thanh toán', width: 140, render: r => React.createElement(Tag, { label: r.tt_thanh_toan, variant: r.tt_thanh_toan === 'Đã thanh toán' ? 'green' : 'yellow', small: true }) },
              { key: 'tt_xuat',      label: 'TT xuất kho',   width: 120, render: r => React.createElement(Tag, { label: r.tt_xuat, variant: r.tt_xuat === 'Đã xuất đủ' ? 'green' : 'gray', small: true }) },
              { key: 'loai',         label: 'Loại CT',       width: 170, render: r => React.createElement(Tag, { label: r.loai, variant: 'blue', small: true }) },
            ]
          })
        ),
        React.createElement(Pagination, { total: 342, perPage: 20, current: 1 })
      )
    );
  };

  // ── Trả lại hàng bán ──────────────────────────────────────
  window.PageTraLaiBan = function () {
    return React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '18px 22px 0' } },
      React.createElement(PageHeader, {
        title: 'Trả lại hàng bán',
        subtitle: 'Chứng từ khách trả lại hàng đã bán',
        actions: React.createElement(Btn, { label: 'Thêm phiếu trả', variant: 'primary', icon: 'plus' })
      }),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingBottom: 14 } },
        React.createElement(FilterBar, {}),
        React.createElement('div', { style: { flex: 1, overflow: 'auto', background: T.surface, border: `1px solid ${T.border}`, borderTop: 'none' } },
          React.createElement(Empty, { text: 'Chưa có chứng từ trả lại hàng bán trong kỳ này' })
        ),
        React.createElement(Pagination, { total: 0, perPage: 20, current: 1 })
      )
    );
  };

  // ── Xuất kho bán hàng ─────────────────────────────────────
  window.PageXuatKhoBH = function () {
    const [sel, setSel] = React.useState(MOCK.xuatKho[0]?.id);
    const rows = MOCK.xuatKho.filter(r => /bán hàng/.test(r.loai));
    return React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '18px 22px 0' } },
      React.createElement(PageHeader, {
        title: 'Xuất kho bán hàng',
        subtitle: 'Phiếu xuất kho phục vụ hoạt động bán hàng',
        actions: React.createElement(Btn, { label: 'Thêm phiếu xuất', variant: 'primary', icon: 'plus' })
      }),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingBottom: 14 } },
        React.createElement(FilterBar, {}),
        React.createElement('div', { style: { flex: 1, overflow: 'auto', background: T.surface, border: `1px solid ${T.border}`, borderTop: 'none' } },
          React.createElement(DataTable, {
            rowKey: 'id', selectedId: sel, onSelect: setSel,
            rows,
            columns: [
              { key: 'ngay',       label: 'Ngày HT',       width: 100 },
              { key: 'ngay_ct',    label: 'Ngày CT',       width: 100 },
              { key: 'so',         label: 'Số CT',         width: 120, bold: true, link: true },
              { key: 'dien_giai',  label: 'Diễn giải' },
              { key: 'tong',       label: 'Tổng tiền',     right: true, render: r => React.createElement(MoneyCell, { value: r.tong, tone: 'neutral', zero: 'dash' }) },
              { key: 'nguoi_nhan', label: 'Người nhận',    width: 200 },
              { key: 'loai',       label: 'Loại chứng từ', width: 160, render: r => React.createElement(Tag, { label: r.loai, variant: 'green', small: true }) },
            ]
          })
        ),
        React.createElement(Pagination, { total: rows.length * 12, perPage: 20, current: 1 })
      )
    );
  };
})();
