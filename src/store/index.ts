import { configureStore } from "@reduxjs/toolkit";
import listRoomReducer from "@/pages/HomeTemplate/HomePage/slice";

const store = configureStore({
  reducer: {
    listRoomReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
