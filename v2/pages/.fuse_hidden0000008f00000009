// MuaHang.js — Mua hàng (Purchases) list + Trả lại hàng mua

(function () {
  // ── Danh sách mua hàng ─────────────────────────────────────
  window.PageMuaHang = function () {
    const [sel, setSel] = React.useState(MOCK.muaHang[0]?.id);
    const [showModal, setShowModal] = React.useState(false);

    return React.createElement('div', {
      style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '18px 22px 0', position: 'relative' }
    },
      React.createElement(PageHeader, {
        title: 'Mua hàng',
        subtitle: 'Danh sách chứng từ mua hàng trong nước và nhập khẩu',
        actions: React.createElement(React.Fragment, null,
          React.createElement(Btn, { label: 'Nhập Excel', variant: 'outline', icon: 'download' }),
          React.createElement(Btn, { label: 'In chứng từ', variant: 'outline', icon: 'print' }),
          React.createElement(Btn, { label: 'Thêm mua hàng', variant: 'primary', icon: 'plus', onClick: () => setShowModal(true) })
        )
      }),

      // KPI strip
      React.createElement('div', { style: { display: 'flex', gap: 10, marginBottom: 12 } },
        React.createElement(KPICard, { label: 'Tổng mua', value: '22.4M', sub: '4 chứng từ', tone: 'neutral', icon: 'muahang' }),
        React.createElement(KPICard, { label: 'Đã thanh toán', value: '12.5M', sub: '1 chứng từ', tone: 'positive', icon: 'check' }),
        React.createElement(KPICard, { label: 'Còn phải trả', value: '9.9M', sub: '3 chứng từ', tone: 'neutral', icon: 'tienthu' }),
      ),

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
            rows: MOCK.muaHang,
            columns: [
              { key: 'ngay',         label: 'Ngày HT',        width: 100 },
              { key: 'ngay_ct',      label: 'Ngày CT',        width: 100 },
              { key: 'so',           label: 'Số CT',          width: 120, bold: true, link: true },
              { key: 'ma_ncc',       label: 'Mã NCC',         width: 110, bold: true },
              { key: 'ncc',          label: 'Nhà cung cấp' },
              { key: 'dien_giai',    label: 'Diễn giải',      width: 220 },
              { key: 'tong',         label: 'Tổng tiền',      right: true, render: r => React.createElement(MoneyCell, { value: r.tong, tone: 'neutral', zero: 'dash' }) },
              { key: 'tt_thanh_toan',label: 'TT thanh toán',  width: 140, render: r => React.createElement(Tag, { label: r.tt_thanh_toan, variant: r.tt_thanh_toan === 'Đã thanh toán' ? 'green' : 'yellow', small: true }) },
              { key: 'loai',         label: 'Loại chứng từ',  width: 180, render: r => React.createElement(Tag, { label: r.loai, variant: 'blue', small: true }) },
            ]
          })
        ),
        React.createElement(Pagination, { total: 284, perPage: 20, current: 1 })
      ),

      showModal && React.createElement(Modal, {
        title: 'Thêm chứng từ mua hàng',
        subtitle: 'Mua hàng trong nước',
        icon: 'muahang',
        onClose: () => setShowModal(false),
        saveLabel: 'Cất & Thêm',
        width: 900
      },
        React.createElement('div', { style: { padding: 20, background: T.surface2 } },
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 14 } },
            React.createElement(FormField, { label: 'Nhà cung cấp', value: 'NCC00005 — CÔNG TY TNHH SX VẢI MINH HẢI', span: 2, required: true, withBtn: true }),
            React.createElement(FormField, { label: 'Ngày hạch toán', value: '22/04/2026', required: true }),
            React.createElement(FormField, { label: 'Ngày chứng từ', value: '22/04/2026', required: true }),
            React.createElement(FormField, { label: 'Số chứng từ', value: 'NK0081_04', required: true }),
            React.createElement(FormField, { label: 'Loại chứng từ', value: 'Mua hàng trong nước' }),
            React.createElement(FormField, { label: 'Diễn giải', value: '', placeholder: 'Nhập diễn giải...', span: 2 }),
          ),
          React.createElement('div', {
            style: { background: T.surface, border: `1px solid ${T.border}`, borderRadius: 'var(--r)', padding: 14 }
          },
            React.createElement('div', { style: { fontSize: 12, fontWeight: 600, color: T.textMute, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.3 } }, 'Chi tiết hàng hóa'),
            React.createElement('table', { style: { width: '100%', fontSize: 12.5 } },
              React.createElement('thead', null,
                React.createElement('tr', { style: { background: T.surface2 } },
                  ['Mã hàng', 'Tên hàng', 'Kho', 'ĐVT', 'Số lượng', 'Đơn giá', 'Thành tiền'].map((h, i) =>
                    React.createElement('th', { key: i, style: { ...SS.th, padding: '8px 10px' } }, h))
                )
              ),
              React.createElement('tbody', null,
                MOCK.chiTietKho.slice(0, 2).map((d, i) => React.createElement('tr', { key: i },
                  React.createElement('td', { style: { ...SS.td, fontWeight: 600 } }, d.ma),
                  React.createElement('td', { style: SS.td }, d.ten),
                  React.createElement('td', { style: SS.td }, d.kho),
                  React.createElement('td', { style: SS.td }, d.dvt),
                  React.createElement('td', { style: { ...SS.td, textAlign: 'right' } }, d.sl.toLocaleString('vi-VN')),
                  React.createElement('td', { style: { ...SS.td, textAlign: 'right' } }, fmtMoney(d.don_gia)),
                  React.createElement('td', { style: { ...SS.td, textAlign: 'right', color: T.text, fontWeight: 500 } }, fmtMoney(d.tt)),
                )),
                React.createElement('tr', null,
                  React.createElement('td', { colSpan: 7, style: { padding: 10 } },
                    React.createElement(Btn, { label: 'Thêm dòng', variant: 'soft', icon: 'plus', small: true })
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  // ── Trả lại hàng mua ──────────────────────────────────────
  window.PageTraLaiMua = function () {
    const [sel, setSel] = React.useState(null);
    return React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '18px 22px 0' } },
      React.createElement(PageHeader, {
        title: 'Trả lại hàng mua',
        subtitle: 'Chứng từ trả lại hàng đã mua cho nhà cung cấp',
        actions: React.createElement(Btn, { label: 'Thêm phiếu trả', variant: 'primary', icon: 'plus' })
      }),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingBottom: 14 } },
        React.createElement(FilterBar, {}),
        React.createElement('div', { style: { flex: 1, overflow: 'auto', background: T.surface, border: `1px solid ${T.border}`, borderTop: 'none' } },
          React.createElement(Empty, { text: 'Chưa có chứng từ trả lại hàng mua trong kỳ này' })
        ),
        React.createElement(Pagination, { total: 0, perPage: 20, current: 1 })
      )
    );
  };
})();
