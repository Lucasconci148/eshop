import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IShopItem } from "@/app/hooks/useGetProducts";
import {
  decrementItem,
  increseItem,
  removeObjectById,
  updateOrAddItem,
} from "./utils";

export interface CounterState {
  itemSelected: IShopItem | null;
  chart: Array<IShopItem | null>;
}

const initialState: CounterState = {
  itemSelected: null,
  chart: [],
};

export const shopCartSlice = createSlice({
  name: "shopCart",
  initialState,
  reducers: {
    setItemSelected: (state, action: PayloadAction<IShopItem | null>) => {
      state.itemSelected = action.payload;
    },

    addToChart: (state, action: PayloadAction<IShopItem>) => {
      state.chart = updateOrAddItem(state.chart, action.payload);
    },

    increase: (state, action: PayloadAction<number>) => {
      state.chart = increseItem(state.chart, action.payload);
    },

    decrement: (state, action: PayloadAction<number>) => {
      state.chart = decrementItem(state.chart, action.payload);
    },

    deleteById: (state, action: PayloadAction<number>) => {
      const filterChart = removeObjectById(state.chart, action.payload);
      state.chart = filterChart;
    },
  },
});

export const { setItemSelected, addToChart, increase, decrement, deleteById } =
  shopCartSlice.actions;

export const selectAllState = (state: RootState) => state;

export default shopCartSlice.reducer;
