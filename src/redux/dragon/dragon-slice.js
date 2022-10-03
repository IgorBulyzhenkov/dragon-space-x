import { createSlice } from "@reduxjs/toolkit";
import dragonOperation from "./dragonOperation";

const { fetchDragon, fetchDragonId } = dragonOperation;

const initialState = {
  items: [],
  itemsId: [],
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
};

const dragon = createSlice({
  name: "dragon",
  initialState,
  extraReducers: {
    [fetchDragon.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchDragonId.fulfilled](state, { payload }) {
      state.itemsId = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchDragon.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [fetchDragonId.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [fetchDragon.pending](state) {
      state.isLoggedIn = true;
      state.error = null;
      state.isRefreshing = false;
    },
    [fetchDragonId.pending](state) {
      state.isLoggedIn = true;
      state.error = null;
      state.isRefreshing = false;
    },
  },
});

export default dragon.reducer;
