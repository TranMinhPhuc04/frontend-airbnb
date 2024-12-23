const VI_TRI_API = {
  GET_ALL: "/api/vi-tri",
  CREATE: "/api/vi-tri",
  PAGINATE: "/api/vi-tri/phan-trang-tim-kiem",
  GET_BY_ID: (id: string) => `/api/vi-tri/${id}`,
  UPDATE: (id: string) => `/api/vi-tri/${id}`,
  DELETE: (id: string) => `/api/vi-tri/${id}`,
  UPLOAD_IMAGE: "/api/vi-tri/upload-hinh-vitri",
};

export default VI_TRI_API;
