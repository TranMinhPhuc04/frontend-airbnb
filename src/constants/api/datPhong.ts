const DAT_PHONG_API = {
  GET_ALL: "/api/dat-phong",
  CREATE: "/api/dat-phong",
  GET_BY_ID: (id: string) => `/api/dat-phong/${id}`,
  UPDATE: (id: string) => `/api/dat-phong/${id}`,
  DELETE: (id: string) => `/api/dat-phong/${id}`,
  GET_BY_USER: (maNguoiDung: string) => `/api/dat-phong/lay-theo-nguoi-dung/${maNguoiDung}`,
};

export default DAT_PHONG_API;
