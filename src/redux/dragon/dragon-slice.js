import { createSlice } from "@reduxjs/toolkit";
import fetchDragon from "./dragon0operation";

const initialState = {
  items: [],
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
    [fetchDragon.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [fetchDragon.pending](state) {
      state.isLoggedIn = true;
      state.error = null;
      state.isRefreshing = false;
    },
  },
});

export default dragon.reducer;
