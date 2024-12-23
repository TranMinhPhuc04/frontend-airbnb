const PHONG_API = {
  GET_ALL: "/api/phong-thue",
  CREATE: "/api/phong-thue",
  GET_BY_LOCATION: "/api/phong-thue/lay-phong-theo-vi-tri",
  PAGINATE: "/api/phong-thue/phan-trang-tim-kiem",
  GET_BY_ID: (id: string) => `/api/phong-thue/${id}`,
  UPDATE: (id: string) => `/api/phong-thue/${id}`,
  DELETE: (id: string) => `/api/phong-thue/${id}`,
  UPLOAD_IMAGE: "/api/phong-thue/upload-hinh-phong",
};

export default PHONG_API;
