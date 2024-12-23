const NGUOI_DUNG_API = {
  GET_ALL: "/api/users",
  CREATE: "/api/users",
  DELETE: "/api/users",
  SEARCH: (tenNguoiDung: string) => `/api/users/search/${tenNguoiDung}`,
  GET_BY_ID: (id: string) => `/api/users/${id}`,
  UPDATE: (id: string) => `/api/users/${id}`,
  PAGINATE: "/api/users/phan-trang-tim-kiem",
  UPLOAD_AVATAR: "/api/users/upload-avatar",
};

export default NGUOI_DUNG_API;
