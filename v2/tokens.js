// tokens.js — Design tokens bridged to JS
// Colors come from CSS custom properties in index.html; JS reads them so
// components can reference tokens in inline styles or computed values.
// To re-skin the whole app, edit ONLY the :root { ... } block in index.html.

(function () {
  const css = (name, fallback) => {
    try {
      const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || fallback;
    } catch { return fallback; }
  };

  window.T = {
    // Brand (all aliases resolve to Starbucks Green Accent)
    brandRed:      css('--brand-red',      '#00754A'),
    brandRedHover: css('--brand-red-hover','#006241'),
    brandRedSoft:  css('--brand-red-soft', '#D4E9E2'),
    brandGold:     css('--brand-gold',     '#CBA258'),
    brandGoldSoft: css('--brand-gold-soft','#FAF6EE'),

    // Starbucks 4-tier green
    sbxGreen:     css('--sbx-green',     '#006241'),
    sbxAccent:    css('--sbx-accent',    '#00754A'),
    sbxHouse:     css('--sbx-house',     '#1E3932'),
    sbxUplift:    css('--sbx-uplift',    '#2B5148'),
    sbxLight:     css('--sbx-light',     '#D4E9E2'),
    sbxHover:     css('--sbx-hover',     '#004F32'),

    // Gold (Rewards-only ceremony)
    sbxGold:         css('--sbx-gold',          '#CBA258'),
    sbxGoldLight:    css('--sbx-gold-light',    '#DFC49D'),
    sbxGoldLightest: css('--sbx-gold-lightest', '#FAF6EE'),

    // v4/v5 compatibility aliases → all cascade to Starbucks greens
    terracotta:      css('--sbx-accent', '#00754A'),
    terracottaHover: css('--sbx-hover',  '#004F32'),
    terracottaSoft:  css('--sbx-light',  '#D4E9E2'),
    coral:           css('--sbx-green',  '#006241'),
    warmSand:        css('--surface-2',  '#EDEBE9'),
    ringWarm:        '#E6E6E6',
    ringDeep:        '#CCCCCC',
    greenPrimary:   css('--sbx-accent', '#00754A'),
    greenSecondary: css('--sbx-green',  '#006241'),
    greenAccent:    css('--sbx-light',  '#D4E9E2'),
    greenSoft:      css('--sbx-light',  '#D4E9E2'),
    greenHover:     css('--sbx-hover',  '#004F32'),

    // Surfaces
    bg:            css('--bg',          '#F2F0EB'),
    surface:       css('--surface',     '#FFFFFF'),
    surface2:      css('--surface-2',   '#EDEBE9'),
    surfaceAlt:    css('--surface-alt', '#F9F9F9'),
    surfaceHover:  css('--surface-hover','#EDEBE9'),
    houseGreen:    css('--house-green', '#1E3932'),

    // Text (Starbucks translucent black scale)
    text:          css('--text',        'rgba(0,0,0,0.87)'),
    textMid:       css('--text-mid',    'rgba(0,0,0,0.72)'),
    textMute:      css('--text-mute',   'rgba(0,0,0,0.58)'),
    textFaint:     css('--text-faint',  'rgba(0,0,0,0.40)'),

    // Borders
    border:        css('--border',         '#D6DBDE'),
    borderStrong:  css('--border-strong',  '#B8C0C4'),

    // Status
    positive:      css('--positive', '#006241'),
    negative:      css('--negative', '#C82014'),
    info:          css('--info',     '#1E40AF'),
    warn:          css('--warn',     '#FBBC05'),

    get accent()   { return this.sbxAccent; },
    get accent2()  { return this.sbxGreen; },

    // Tag variants
    tagGreen:  { bg: css('--tag-green-bg',  '#D4E9E2'), color: css('--tag-green-fg',  '#006241') },
    tagRed:    { bg: css('--tag-red-bg',    '#FADBD6'), color: css('--tag-red-fg',    '#C82014') },
    tagYellow: { bg: css('--tag-yellow-bg', '#FEEFC7'), color: css('--tag-yellow-fg', '#8A6A07') },
    tagBlue:   { bg: css('--tag-blue-bg',   '#E0EAFF'), color: css('--tag-blue-fg',   '#1E40AF') },
    tagGray:   { bg: css('--tag-gray-bg',   '#EDEBE9'), color: css('--tag-gray-fg',   'rgba(0,0,0,0.72)') },

    // Font stacks — Starbucks is sans-only
    font:       "'Inter', 'Be Vietnam Pro', -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSerif:  "'Inter', 'Be Vietnam Pro', -apple-system, system-ui, sans-serif",
    fontMono:   "'Inter', 'Be Vietnam Pro', ui-monospace, 'SF Mono', Menlo, Consolas, monospace",

    // Shadows (Starbucks layered whisper)
    ring:         '0 0 .5px rgba(0,0,0,.14), 0 1px 1px rgba(0,0,0,.24)',
    whisper:      '0 0 .5px rgba(0,0,0,.14), 0 1px 1px rgba(0,0,0,.24)',
    shadowFrap:   '0 0 6px rgba(0,0,0,.24), 0 8px 12px rgba(0,0,0,.14)',
    shadowNav:    '0 1px 3px rgba(0,0,0,.10), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07)',
  };

  // Utility: format Vietnamese money
  window.fmtMoney = (n) => {
    if (n === 0 || n === '0' || n == null || n === '') return '0';
    if (typeof n === 'string') return n; // already formatted
    return Number(n).toLocaleString('vi-VN');
  };
})();
