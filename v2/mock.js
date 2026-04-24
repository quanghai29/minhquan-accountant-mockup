// mock.js — Sample data mimicking the old system's real records
// Mirrors the column structure of MQtex's legacy MISA-style tables
// (Ngày HT, Số CT, Mã NCC/KH, Diễn giải, Tổng tiền, TT thanh toán, Loại CT, ...)

window.MOCK = {
  // ── DANH MỤC ──────────────────────────────────────────────────────
  hangHoa: [
    { id:1,  ma:'6410-MQ311',      ten:'6410-MQ311 ĐEN',            tinh_chat:'Thành phẩm',  nhom:'TP',  dvt:'kg', gia_von:0,       gia_ban:85000, sl_ton:0,     gt_ton:2825600 },
    { id:2,  ma:'AIGVN16BLACK',    ten:'AIGVN 16 Black - MQ3057',   tinh_chat:'Thành phẩm',  nhom:'TP',  dvt:'kg', gia_von:0,       gia_ban:92000, sl_ton:0,     gt_ton:0 },
    { id:3,  ma:'AIGVN16BLUE',     ten:'AIGVN 16 Blue - MQ3057',    tinh_chat:'Thành phẩm',  nhom:'TP',  dvt:'kg', gia_von:0,       gia_ban:92000, sl_ton:0,     gt_ton:8522666 },
    { id:4,  ma:'CASAUCVCVODAU',   ten:'Cá sấu CVC Vô đầu 15 CÂY',  tinh_chat:'NVL',         nhom:'NVL', dvt:'kg', gia_von:85000,   gia_ban:0,     sl_ton:273.2, gt_ton:23450000 },
    { id:5,  ma:'CASAUCVCVANGMO14',ten:'Cá sấu CVC Vàng Mơ 14 CÂY', tinh_chat:'NVL',         nhom:'NVL', dvt:'kg', gia_von:71000,   gia_ban:0,     sl_ton:266.0, gt_ton:18900000 },
    { id:6,  ma:'MOCBONGCT',       ten:'Mộc Bông Cotton',           tinh_chat:'Bán TP',      nhom:'BTP', dvt:'kg', gia_von:0,       gia_ban:0,     sl_ton:0,     gt_ton:0 },
    { id:7,  ma:'MOCCASAUTHUNME',  ten:'Mộc Cá Sấu Thun Mè',        tinh_chat:'Bán TP',      nhom:'BTP', dvt:'kg', gia_von:0,       gia_ban:0,     sl_ton:0,     gt_ton:0 },
    { id:8,  ma:'MOCCHANCUA',      ten:'Mộc chân cua',              tinh_chat:'Bán TP',      nhom:'BTP', dvt:'kg', gia_von:115400,  gia_ban:0,     sl_ton:18.2,  gt_ton:2100000 },
  ],

  ncc: [
    { id:1, ma:'NCC00005', ten:'CÔNG TY TNHH SẢN XUẤT VẢI MINH HẢI',   dien_thoai:'0901234567', email:'ncc5@gmail.com',    dia_chi:'Bình Dương',   ms_thue:'0301234567', no_phai_tra:15940000, trang_thai:'Hoạt động' },
    { id:2, ma:'NCC00041', ten:'CÔNG TY TNHH DỆT MQTEX',                dien_thoai:'0912345678', email:'mqtex@gmail.com',   dia_chi:'Quận 1, TP.HCM',ms_thue:'0301234100', no_phai_tra:8200000,  trang_thai:'Hoạt động' },
    { id:3, ma:'NCC00069', ten:'CÔNG TY TNHH DỊCH VỤ BÔNG',             dien_thoai:'0923456789', email:'bong@gmail.com',    dia_chi:'Quận 7, TP.HCM',ms_thue:'0301234200', no_phai_tra:0,        trang_thai:'Hoạt động' },
    { id:4, ma:'NCC00072', ten:'CÔNG TY TNHH THUỐC NHUỘM HƯNG THỊNH',   dien_thoai:'0934567890', email:'hungthinh@gmail.com', dia_chi:'Đồng Nai',    ms_thue:'0301234300', no_phai_tra:25300000, trang_thai:'Hoạt động' },
  ],

  khachHang: [
    { id:1, ma:'KH001',  ten:'CÔNG TY CỔ PHẦN OKAPI',     dien_thoai:'0934567890', email:'okapi@gmail.com',   dia_chi:'Quận 3, TP.HCM',  ms_thue:'0302345678', no_phai_thu:1036800,  trang_thai:'Hoạt động' },
    { id:2, ma:'KH002',  ten:'ANH THÁI TRẦN',             dien_thoai:'0945678901', email:'thai@gmail.com',    dia_chi:'Quận 10, TP.HCM', ms_thue:'',           no_phai_thu:16800,    trang_thai:'Hoạt động' },
    { id:3, ma:'KH003',  ten:'CÔNG TY TNHH GARMENT ABC',  dien_thoai:'0956789012', email:'garment@gmail.com', dia_chi:'Bình Dương',      ms_thue:'0302345679', no_phai_thu:28350000, trang_thai:'Hoạt động' },
    { id:4, ma:'KH0998', ten:'HỘ KINH DOANH MAI LINH',    dien_thoai:'0967890123', email:'mailinh@gmail.com', dia_chi:'Đồng Nai',        ms_thue:'',           no_phai_thu:10070460, trang_thai:'Hoạt động' },
  ],

  nhanVien: [
    { id:1, ma:'NV001', ten:'Lê Quang Hải',      phong_ban:'Kế toán',    chuc_vu:'Trưởng phòng', trang_thai:'Hoạt động' },
    { id:2, ma:'NV002', ten:'Nguyễn Thị Mai',    phong_ban:'Kho',        chuc_vu:'Thủ kho',       trang_thai:'Hoạt động' },
    { id:3, ma:'NV003', ten:'Trần Văn Tuấn',     phong_ban:'Kinh doanh', chuc_vu:'Nhân viên',     trang_thai:'Hoạt động' },
    { id:4, ma:'NV004', ten:'Phạm Thị Lan',      phong_ban:'Kinh doanh', chuc_vu:'Nhân viên',     trang_thai:'Hoạt động' },
  ],

  phongBan: [
    { id:1, ma:'PB01', ten:'Kế toán',    mo_ta:'Quản lý tài chính' },
    { id:2, ma:'PB02', ten:'Kho vận',    mo_ta:'Quản lý kho hàng' },
    { id:3, ma:'PB03', ten:'Kinh doanh', mo_ta:'Mua bán hàng hóa' },
  ],

  kho: [
    { id:1, ma:'TP',  ten:'Kho thành phẩm',        dia_chi:'Bình Dương', loai:'Kho nội bộ' },
    { id:2, ma:'BTP', ten:'Kho bán thành phẩm',    dia_chi:'Bình Dương', loai:'Kho nội bộ' },
    { id:3, ma:'NVL', ten:'Kho nguyên vật liệu',   dia_chi:'Bình Dương', loai:'Kho nội bộ' },
  ],

  dvt: [
    { id:1, ma:'KG',   ten:'Kilogram', mo_ta:'Trọng lượng' },
    { id:2, ma:'CAI',  ten:'Cái',      mo_ta:'Đơn vị đếm' },
    { id:3, ma:'M',    ten:'Mét',      mo_ta:'Chiều dài' },
    { id:4, ma:'CUON', ten:'Cuộn',     mo_ta:'Đơn vị cuộn' },
  ],

  nhomVTHH: [
    { id:1, ma:'TP',  ten:'Thành phẩm',          cap:'1', cha:'' },
    { id:2, ma:'NVL', ten:'Nguyên vật liệu',     cap:'1', cha:'' },
    { id:3, ma:'BTP', ten:'Bán thành phẩm',      cap:'1', cha:'' },
    { id:4, ma:'HH',  ten:'Hàng hóa',            cap:'1', cha:'' },
  ],

  tkNH: [
    { id:1, so_tk:'6899999888', ngan_hang:'Ngân hàng TMCP Á Châu (ACB)', chi_nhanh:'Bình Dương',  chu_tk:'CTY TNHH SÀI GÒN MQTEX', so_du:6533324118 },
    { id:2, so_tk:'1900123456', ngan_hang:'Vietcombank',                  chi_nhanh:'TP.HCM',       chu_tk:'CTY TNHH SÀI GÒN MQTEX', so_du:250000000 },
  ],

  // ── KHO — NHẬP / XUẤT ─────────────────────────────────────────────
  nhapKho: [
    { id:1, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0080_04', dien_giai:'Mua hàng của CÔNG TY TNHH SẢN XUẤT VẢI MINH HẢI', tong:0,         ma_dt:'NCC00005', doi_tuong:'NCC00005', loai:'Mua hàng trong nước' },
    { id:2, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0079_04', dien_giai:'Xuất HĐ số 120 + 121',                             tong:6681280,  ma_dt:'NCC00005', doi_tuong:'NCC00005', loai:'Mua hàng trong nước' },
    { id:3, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0078_04', dien_giai:'Nhập kho trả lại hàng bán của KH0998',             tong:0,         ma_dt:'KH0998',   doi_tuong:'KH0998',   loai:'Nhập kho từ hàng bán trả lại' },
    { id:4, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0077_04', dien_giai:'NHẬP MỘC NGÀY 22/04',                              tong:3213000,  ma_dt:'NCC00041', doi_tuong:'NCC00041', loai:'Mua hàng trong nước' },
    { id:5, ngay:'21/04/2026', ngay_ct:'21/04/2026', so:'NK0076_04', dien_giai:'Mua hàng của CÔNG TY TNHH DỊCH VỤ BÔNG',           tong:0,         ma_dt:'NCC00069', doi_tuong:'NCC00069', loai:'Mua hàng trong nước' },
  ],

  xuatKho: [
    { id:1, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'XK0151_04', dien_giai:'Xuất kho sản xuất',                      tong:0, nguoi_nhan:'CÔNG TY TNHH SẢN XUẤT', ly_do:'Xuất kho sản xuất',   loai:'Xuất kho sản xuất' },
    { id:2, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'XK0150_04', dien_giai:'Xuất kho sản xuất',                      tong:0, nguoi_nhan:'CÔNG TY TNHH SX-TM',    ly_do:'Xuất kho sản xuất',   loai:'Xuất kho sản xuất' },
    { id:3, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'XK0149_04', dien_giai:'Xuất kho sản xuất',                      tong:0, nguoi_nhan:'CÔNG TY TNHH NHIÊN',     ly_do:'Xuất kho sản xuất',   loai:'Xuất kho sản xuất' },
    { id:4, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'XK0147_04', dien_giai:'Xuất kho bán hàng CỔ PHẦN OKAPI',        tong:1036800, nguoi_nhan:'CÔNG TY CỔ PHẦN OKAPI', ly_do:'Xuất kho bán hàng',  loai:'Xuất kho bán hàng' },
  ],

  chiTietKho: [
    { ma:'CASAUCVCVODAU',   ten:'Cá Sấu CVC Vô Đầu 15 CÂY',    kho:'NVL', tk_no:'1551', tk_co:'331', dvt:'kg', sl:273.20, don_gia:85000, tt:23222000 },
    { ma:'CASAUCVCVANGMO14',ten:'Cá Sấu CVC Vàng Mơ 14 CÂY',   kho:'NVL', tk_no:'1551', tk_co:'331', dvt:'kg', sl:266.00, don_gia:71000, tt:18886000 },
    { ma:'CSCVCRUOC2',      ten:'Cá Sấu CVC Ruốc 14 CÂY',      kho:'NVL', tk_no:'1551', tk_co:'331', dvt:'kg', sl:262.50, don_gia:70000, tt:18375000 },
  ],

  // ── TIỀN MẶT / TIỀN GỬI — THU / CHI ───────────────────────────────
  tienMat: [
    { id:1, ngay:'21/04/2026', so:'PT0074_01', dien_giai:'Rút tiền gửi về nhập quỹ',     so_tien:9686354,   doi_tuong:'NGUYỄN THANH HẢI',          ly_do:'Rút tiền gửi', loai:'Phiếu thu' },
    { id:2, ngay:'21/04/2026', so:'PC0168_01', dien_giai:'Chi trả tiền hàng NCC',         so_tien:9686354,   doi_tuong:'CÔNG TY TNHH SX VẢI MINH HẢI',ly_do:'Chi mua hàng', loai:'Phiếu chi' },
    { id:3, ngay:'18/04/2026', so:'PT0076_01', dien_giai:'Thu tiền của ANH QUÝ',          so_tien:150000800, doi_tuong:'ANH QUÝ',                    ly_do:'Thu khác',     loai:'Phiếu thu' },
    { id:4, ngay:'17/04/2026', so:'PT0077_01', dien_giai:'Thu tiền của CÔNG TY TNHH ABC', so_tien:25000000,  doi_tuong:'CÔNG TY TNHH ABC',           ly_do:'Thu khác',     loai:'Phiếu thu' },
  ],

  tienGui: [
    { id:1, ngay:'22/04/2026', so:'UNC0045_04', dien_giai:'Thu tiền hàng KH003',          so_tien:28350000, doi_tuong:'CÔNG TY TNHH GARMENT ABC',  tk_nh:'6899999888', loai:'Thu tiền gửi' },
    { id:2, ngay:'22/04/2026', so:'UNC0046_04', dien_giai:'Thanh toán tiền hàng NCC041',  so_tien:3213000,  doi_tuong:'CÔNG TY TNHH DỆT MQTEX',   tk_nh:'6899999888', loai:'Chi tiền gửi' },
  ],

  // ── MUA HÀNG ──────────────────────────────────────────────────────
  muaHang: [
    { id:1, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0080_04', ma_ncc:'NCC00005', ncc:'CÔNG TY TNHH SX VẢI MINH HẢI',  dien_giai:'Mua hàng',             tong:0,        gt_nhap:0,        tt_thanh_toan:'Chưa thanh toán', loai:'Mua hàng trong nước' },
    { id:2, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0079_04', ma_ncc:'NCC00005', ncc:'CÔNG TY TNHH SX VẢI MINH HẢI',  dien_giai:'XUẤT HĐ số 120+121',   tong:6681280, gt_nhap:6681280, tt_thanh_toan:'Chưa thanh toán', loai:'Mua hàng trong nước' },
    { id:3, ngay:'22/04/2026', ngay_ct:'22/04/2026', so:'NK0077_04', ma_ncc:'NCC00041', ncc:'CÔNG TY TNHH DỆT MQTEX',        dien_giai:'NHẬP MỘC 22/04',       tong:3213000, gt_nhap:3213000, tt_thanh_toan:'Chưa thanh toán', loai:'Mua hàng trong nước' },
    { id:4, ngay:'20/04/2026', ngay_ct:'20/04/2026', so:'NK0075_04', ma_ncc:'NCC00069', ncc:'CÔNG TY TNHH DV BÔNG',          dien_giai:'Mua bông',             tong:12500000,gt_nhap:12500000,tt_thanh_toan:'Đã thanh toán',  loai:'Mua hàng trong nước' },
  ],

  // ── BÁN HÀNG ──────────────────────────────────────────────────────
  banHang: [
    { id:1, ngay:'22/04/2026', so:'BH0147_04', ma_kh:'KH001', kh:'CÔNG TY CỔ PHẦN OKAPI',    tong:1036800,  tt_lap_hd:'Chưa lập', tt_thanh_toan:'Chưa thanh toán', tt_xuat:'Chưa xuất',   loai:'Bán hàng trong nước' },
    { id:2, ngay:'22/04/2026', so:'BH0146_04', ma_kh:'KH002', kh:'ANH THÁI TRẦN',             tong:16800,    tt_lap_hd:'Chưa lập', tt_thanh_toan:'Chưa thanh toán', tt_xuat:'Chưa xuất',   loai:'Bán hàng trong nước' },
    { id:3, ngay:'22/04/2026', so:'BH0145_04', ma_kh:'KH003', kh:'CÔNG TY TNHH GARMENT ABC',  tong:28350000, tt_lap_hd:'Đã lập',   tt_thanh_toan:'Đã thanh toán',   tt_xuat:'Đã xuất đủ', loai:'Bán hàng trong nước' },
    { id:4, ngay:'21/04/2026', so:'BH0141_04', ma_kh:'KH003', kh:'CÔNG TY TNHH GARMENT ABC',  tong:49824000, tt_lap_hd:'Đã lập',   tt_thanh_toan:'Chưa thanh toán', tt_xuat:'Đã xuất đủ', loai:'Bán hàng trong nước' },
  ],

  donDatHang: [
    { id:1, ngay:'21/04/2026', so:'DH0002859', ma_kh:'KH0998', kh:'HỘ KINH DOANH MAI LINH',   nv_ban:'NV003', gt_don:9324500,  gt_da_xuat:10070460, thuc_thu:0,       con_phai_thu:10070460, tt_giao:'Đã giao đủ' },
    { id:2, ngay:'20/04/2026', so:'DH0002857', ma_kh:'KH003',  kh:'CÔNG TY TNHH GARMENT ABC', nv_ban:'NV004', gt_don:50873000, gt_da_xuat:53786160, thuc_thu:0,       con_phai_thu:53786160, tt_giao:'Đang giao'   },
    { id:3, ngay:'20/04/2026', so:'DH0002856', ma_kh:'KH001',  kh:'CÔNG TY CỔ PHẦN OKAPI',    nv_ban:'NV003', gt_don:35800000, gt_da_xuat:40533480, thuc_thu:20000000,con_phai_thu:20533480, tt_giao:'Đã giao đủ' },
  ],

  // ── BÁO CÁO ──────────────────────────────────────────────────────
  bcTonKho: [
    { kho:'Bán thành phẩm', ma:'DACATICI',        ten:'MỘC DA CÁ TICI',           dvt:'kg', dk_sl:0,     dk_gt:0, nhap_sl:0,      nhap_gt:0,        xuat_sl:0,     xuat_gt:0, ck_sl:0,     ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCBONGCT',       ten:'Mộc Bông Cotton',           dvt:'kg', dk_sl:0,     dk_gt:0, nhap_sl:0,      nhap_gt:0,        xuat_sl:0,     xuat_gt:0, ck_sl:0,     ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCHANCUA',      ten:'Mộc Chân Cua',              dvt:'kg', dk_sl:18.2,  dk_gt:0, nhap_sl:2012.2, nhap_gt:0,        xuat_sl:2012.2,xuat_gt:0, ck_sl:18.2,  ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCS2DA230GRM',  ten:'Mộc cá sầu 2da - 230grm',   dvt:'kg', dk_sl:641,   dk_gt:0, nhap_sl:3205,   nhap_gt:0,        xuat_sl:641,    xuat_gt:0, ck_sl:641,   ck_gt:0 },
    { kho:'Bán thành phẩm', ma:'MOCCSCVC',        ten:'Mộc cá sầu CVC',            dvt:'kg', dk_sl:0,     dk_gt:0, nhap_sl:3354.6, nhap_gt:16773000, xuat_sl:3354.6, xuat_gt:0, ck_sl:0,     ck_gt:0 },
    { kho:'Thành phẩm',     ma:'AIGVN16BLUE',     ten:'AIGVN 16 Blue - MQ3057',    dvt:'kg', dk_sl:100.5, dk_gt:9250000, nhap_sl:0, nhap_gt:0,       xuat_sl:0,     xuat_gt:0, ck_sl:100.5, ck_gt:9250000 },
  ],

  bcCongNoTra: [
    { ma:'NCC00005', ten:'CÔNG TY TNHH SX VẢI MINH HẢI',  no_dau_ky:5000000,  phat_sinh_tang:15940000, phat_sinh_giam:5000000,  no_cuoi_ky:15940000 },
    { ma:'NCC00041', ten:'CÔNG TY TNHH DỆT MQTEX',         no_dau_ky:0,        phat_sinh_tang:8200000,  phat_sinh_giam:0,        no_cuoi_ky:8200000  },
    { ma:'NCC00072', ten:'CÔNG TY TNHH THUỐC NHUỘM HƯNG THỊNH', no_dau_ky:10000000, phat_sinh_tang:25300000, phat_sinh_giam:10000000, no_cuoi_ky:25300000 },
  ],

  bcCongNoThu: [
    { ma:'KH001',  ten:'CÔNG TY CỔ PHẦN OKAPI',     no_dau_ky:0,        phat_sinh_tang:1036800,  phat_sinh_giam:0,        no_cuoi_ky:1036800 },
    { ma:'KH002',  ten:'ANH THÁI TRẦN',             no_dau_ky:0,        phat_sinh_tang:16800,    phat_sinh_giam:0,        no_cuoi_ky:16800 },
    { ma:'KH003',  ten:'CÔNG TY TNHH GARMENT ABC',  no_dau_ky:21000000, phat_sinh_tang:28350000, phat_sinh_giam:21000000, no_cuoi_ky:28350000 },
    { ma:'KH0998', ten:'HỘ KINH DOANH MAI LINH',    no_dau_ky:0,        phat_sinh_tang:10070460, phat_sinh_giam:0,        no_cuoi_ky:10070460 },
  ],
};
