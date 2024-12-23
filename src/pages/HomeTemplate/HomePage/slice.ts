import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services/apiConfig";
import { PHONG_API } from "@/constants/api";

export const fetchListRoom = createAsyncThunk(
  "listRoomPage/fetchListRoom",
  async (_, { rejectWithValue }: any) => {
    try {
      const result = await api.get(PHONG_API.GET_ALL);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

type Room = {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
};

type AppState = {
  loading: boolean;
  data: null | Room[];
  error: null | any;
};

const initialState: AppState = {
  loading: false,
  data: null,
  error: null,
};

const listRoomReducer = createSlice({
  name: "listRoomReducer",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchListRoom.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchListRoom.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchListRoom.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default listRoomReducer.reducer;
