import { createSlice } from "@reduxjs/toolkit";
import fetchDragon from "./dragon0operation";
// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";

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
// const items = createReducer([], {
//   [fetchDragon.fulfilled]: (_, { payload }) => payload,
// });

// const loading = createReducer(false, {
//   [fetchDragon.pending]: () => true,
//   [fetchDragon.fulfilled]: () => false,
//   [fetchDragon.rejected]: () => null,
// });

// const error = createReducer(null, {
//   [fetchDragon.pending]: () => false,
//   [fetchDragon.rejected]: (_, action) => action.payload,
// });

// export default combineReducers({
//   items,
//   loading,
//   error,
// });

export default dragon.reducer;
