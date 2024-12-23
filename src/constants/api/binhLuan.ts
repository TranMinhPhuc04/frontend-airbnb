const BINH_LUAN_API = {
  GET_ALL: "/api/binh-luan",
  POST_COMMENT: "/api/binh-luan",
  UPDATE_COMMENT: (id: string) => `/api/binh-luan/${id}`,
  DELETE_COMMENT: (id: string) => `/api/binh-luan/${id}`,
  GET_BY_ROOM: (maPhong: string) => `/api/binh-luan/lay-binh-luan-theo-phong/${maPhong}`,
};

export default BINH_LUAN_API;
