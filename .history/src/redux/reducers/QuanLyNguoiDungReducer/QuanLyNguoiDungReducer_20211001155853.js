import { ACCESS_TOKEN, USER_LOGIN } from "../../../util/setting";
import {
  DANG_NHAP_ACTION,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  DANH_SACH_NGUOI_DUNG,
  DANH_SACH_MA_LOAI_NGUOI_DUNG,
} from "../../types/QuanLyNguoiDungTypes";

// Đặt giá trị mặc định cho user để lưu thông tin đăng nhập khi tắt máy
let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
  thongTinDangKy: {},
  danhSachNguoiDung: {},
  danhSachMaLoaiNguoiDung: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action; // Lấy thông tin người dùng đăng nhập
      //   Lưu vào localStorage
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap)); //   Biến thông tin đăng nhập thành chuỗi
      localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    case SET_DANH_SACH_NGUOI_DUNG: {
      state.arrUsers = action.arrUsers;
      state.arrUsersDefault = state.arrUsers; //  Gán mảng arrUsersDefault = arrUsers (arrUsers là dữ liệu lần đầu tiên api trả về)
      return { ...state };
    }
    // case DANG_KY: {
    //   state.thongTinDangKy = action.thongTinDangKy;
    //   return { ...state };
    // }

    case DANH_SACH_NGUOI_DUNG: {
      state.danhSachNguoiDung = action.danhSachNguoiDung;
      return { ...state };
    }
    case DANH_SACH_MA_LOAI_NGUOI_DUNG: {
      state.dsMaLoaiNguoiDung = action.dsMaLoaiNguoiDung;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
