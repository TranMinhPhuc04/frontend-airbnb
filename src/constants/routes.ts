const ROUTES = {
  // Authentication
  LOGIN: "/login",
  SIGNUP: "/signup",

  // Home (Trang chủ)
  HOME: "/",

  // Admin
  ADMIN: "/admin/dashboard",
  ADMIN_USERS: "/admin/users",
  ADMIN_ROOMS: "/admin/rooms",
  ADMIN_LOCATIONS: "/admin/locations",
  ADMIN_BOOKINGS: "/admin/bookings",

  // Booking (Đặt phòng)
  GET_BOOKINGS: "/booking",
  GET_BOOKING_BY_ID: (id: string) => `/booking/${id}`,
  CREATE_BOOKING: "/booking/create",

  // Comments (Bình luận)
  GET_COMMENTS: "/comments",
  POST_COMMENT: "/comments/create",
  UPDATE_COMMENT: (id: string) => `/comments/${id}`,
  DELETE_COMMENT: (id: string) => `/comments/${id}`,

  // Users (Người dùng)
  GET_USERS: "/users",
  GET_USER_BY_ID: (id: string) => `/users/${id}`,
  CREATE_USER: "/users/create",
  UPDATE_USER: (id: string) => `/users/${id}`,
  DELETE_USER: (id: string) => `/users/${id}`,

  // Rooms (Phòng)
  GET_ROOMS: "/rooms",
  GET_ROOM_BY_ID: (id: string) => `/rooms/${id}`,
  CREATE_ROOM: "/rooms/create",
  UPDATE_ROOM: (id: string) => `/rooms/${id}`,
  DELETE_ROOM: (id: string) => `/rooms/${id}`,

  // Locations (Vị trí)
  GET_LOCATIONS: "/locations",
  GET_LOCATION_BY_ID: (id: string) => `/locations/${id}`,
  CREATE_LOCATION: "/locations/create",
  UPDATE_LOCATION: (id: string) => `/locations/${id}`,
  DELETE_LOCATION: (id: string) => `/locations/${id}`,
};

export default ROUTES;
