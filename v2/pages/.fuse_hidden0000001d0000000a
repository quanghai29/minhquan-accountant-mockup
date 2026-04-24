// TienThuChi.js — Tiền mặt / Tiền gửi (thu & chi) — 4 pages
// Columns: Ngày HT · Số CT · Diễn giải · Số tiền · Đối tượng · Lý do · Loại CT

(function () {
  const CashList = ({ title, subtitle, icon, rows, createLabel, columns, summary }) => {
    const [sel, setSel] = React.useState(null);
    return React.createElement('div', {
      style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '18px 22px 0' }
    },
      React.createElement(PageHeader, {
        title, subtitle,
        actions: React.createElement(React.Fragment, null,
          React.createElement(Btn, { label: 'In báo cáo', variant: 'outline', icon: 'print' }),
          React.createElement(Btn, { label: createLabel, variant: 'primary', icon: 'plus' })
        )
      }),

      // Quick summary row
      summary && React.createElement('div', {
        style: { display: 'flex', gap: 10, marginBottom: 12, flexWrap: 'wrap' }
      },
        summary.map((s, i) => React.createElement(KPICard, { key: i, ...s }))
      ),

      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingBottom: 14 } },
        React.createElement(FilterBar, {}),
        React.createElement('div', { style: { flex: 1, overflow: 'auto', background: T.surface, border: `1px solid ${T.border}`, borderTop: 'none' } },
          React.createElement(DataTable, { rowKey: 'id', columns, rows, selectedId: sel, onSelect: setSel })
        ),
        React.createElement(Pagination, { total: rows.length * 12, perPage: 20, current: 1 })
      )
    );
  };

  const cashColumns = (type) => [
    { key: 'ngay',      label: 'Ngày HT',       width: 100 },
    { key: 'so',        label: 'Số CT',         width: 120, bold: true, link: true },
    { key: 'dien_giai', label: 'Diễn giải' },
    { key: 'so_tien',   label: 'Số tiền',       right: true, render: r => React.createElement(MoneyCell, { value: r.so_tien, tone: type === 'thu' ? 'positive' : 'negative' }) },
    { key: 'doi_tuong', label: 'Đối tượng',     width: 220 },
    { key: 'ly_do',     label: 'Lý do',         width: 140 },
    { key: 'loai',      label: 'Loại CT',       width: 110, render: r => React.createElement(Tag, { label: r.loai, variant: type === 'thu' ? 'green' : 'red', small: true }) },
  ];

  const bankColumns = (type) => [
    { key: 'ngay',      label: 'Ngày HT',       width: 100 },
    { key: 'so',        label: 'Số CT',         width: 130, bold: true, link: true },
    { key: 'dien_giai', label: 'Diễn giải' },
    { key: 'so_tien',   label: 'Số tiền',       right: true, render: r => React.createElement(MoneyCell, { value: r.so_tien, tone: type === 'thu' ? 'positive' : 'negative' }) },
    { key: 'doi_tuong', label: 'Đối tượng',     width: 240 },
    { key: 'tk_nh',     label: 'TK ngân hàng',  width: 140, bold: true },
    { key: 'loai',      label: 'Loại CT',       width: 130, render: r => React.createElement(Tag, { label: r.loai, variant: type === 'thu' ? 'green' : 'red', small: true }) },
  ];

  const filterByType = (rows, type) =>
    rows.filter(r => type === 'thu' ? /Phiếu thu|Thu/.test(r.loai) : /Phiếu chi|Chi/.test(r.loai));

  // ── Tiền mặt — Thu ──────────────────────────────────────────
  window.PageTienMatThu = function () {
    const rows = filterByType(MOCK.tienMat, 'thu');
    return React.createElement(CashList, {
      title: 'Tiền mặt — Phiếu thu',
      subtitle: 'Thu tiền mặt từ khách hàng, thu khác',
      icon: 'receipt',
      createLabel: 'Phiếu thu mới',
      rows, columns: cashColumns('thu'),
      summary: [
        { label: 'Tồn quỹ đầu ngày', value: '125M',  sub: '21/04/2026',  tone: 'neutral' },
        { label: 'Thu trong ngày',   value: '159.7M',sub: '2 phiếu',     tone: 'positive', icon: 'arrowIn' },
        { label: 'Số dư hiện tại',   value: '275M',  sub: '',            tone: 'neutral', icon: 'tienthu' },
      ]
    });
  };

  // ── Tiền mặt — Chi ──────────────────────────────────────────
  window.PageTienMatChi = function () {
    const rows = filterByType(MOCK.tienMat, 'chi');
    return React.createElement(CashList, {
      title: 'Tiền mặt — Phiếu chi',
      subtitle: 'Chi tiền mặt cho nhà cung cấp, chi khác',
      icon: 'receipt',
      createLabel: 'Phiếu chi mới',
      rows, columns: cashColumns('chi'),
      summary: [
        { label: 'Tồn quỹ đầu ngày', value: '125M', sub: '21/04/2026', tone: 'neutral' },
        { label: 'Chi trong ngày',   value: '9.7M', sub: '1 phiếu',     tone: 'negative', icon: 'arrowOut' },
        { label: 'Số dư hiện tại',   value: '275M', sub: '',            tone: 'neutral', icon: 'tienthu' },
      ]
    });
  };

  // ── Tiền gửi — Thu ──────────────────────────────────────────
  window.PageTienGuiThu = function () {
    const rows = MOCK.tienGui.filter(r => /Thu/.test(r.loai));
    return React.createElement(CashList, {
      title: 'Tiền gửi — Thu',
      subtitle: 'Thu tiền gửi ngân hàng',
      icon: 'bank',
      createLabel: 'Ủy nhiệm thu mới',
      rows, columns: bankColumns('thu'),
      summary: [
        { label: 'Số dư ngân hàng', value: '6.53B', sub: 'ACB · 6899999888', tone: 'neutral', icon: 'bank' },
        { label: 'Thu hôm nay',     value: '28.3M', sub: '1 giao dịch',      tone: 'positive', icon: 'arrowIn' },
      ]
    });
  };

  // ── Tiền gửi — Chi ──────────────────────────────────────────
  window.PageTienGuiChi = function () {
    const rows = MOCK.tienGui.filter(r => /Chi/.test(r.loai));
    return React.createElement(CashList, {
      title: 'Tiền gửi — Chi',
      subtitle: 'Chi tiền gửi ngân hàng, thanh toán nhà cung cấp',
      icon: 'bank',
      createLabel: 'Ủy nhiệm chi mới',
      rows, columns: bankColumns('chi'),
      summary: [
        { label: 'Số dư ngân hàng', value: '6.53B', sub: 'ACB · 6899999888', tone: 'neutral', icon: 'bank' },
        { label: 'Chi hôm nay',     value: '3.2M',  sub: '1 giao dịch',      tone: 'negative', icon: 'arrowOut' },
      ]
    });
  };
})();
