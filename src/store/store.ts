import { configureStore } from "@reduxjs/toolkit";
import shopCartSlice from "./shopSlice";

export const store = configureStore({
  reducer: {
    shopCartState: shopCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
