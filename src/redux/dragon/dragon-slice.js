import { createSlice } from "@reduxjs/toolkit";
import dragonOperation from "./dragonOperation";

const { fetchDragon, fetchDragonId } = dragonOperation;

const initialState = {
  items: [],
  itemsId: [],
  error: null,
};

const dragon = createSlice({
  name: "dragon",
  initialState,
  extraReducers: {
    [fetchDragon.fulfilled](state, { payload }) {
      state.items = payload;
      state.error = null;
    },
    [fetchDragonId.fulfilled](state, { payload }) {
      state.itemsId = payload;
       state.error = null;
    },
    [fetchDragon.rejected](state, { payload }) {
      state.error = payload;
    },
    [fetchDragonId.rejected](state, { payload }) {
      state.error = payload;
    },
    [fetchDragon.pending](state) {
      state.error = null;
    },
    [fetchDragonId.pending](state) {
      state.error = null;
    },
  },
});

export default dragon.reducer;
