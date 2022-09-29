import { createSlice } from "@reduxjs/toolkit";
import userThunk from "./userOperation";

const {
  registrationNewUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
  fetchVerifyUser,
} = userThunk;

const initialState = {
  user: { name: null, verify: false },
  verificationToken: null,
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registrationNewUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.verificationToken = payload.user.verificationToken;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchVerifyUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.token = payload.user.token;
      state.verificationToken = null;
      state.isRefreshing = false;
    },
    [registrationNewUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [logInUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [logOutUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [fetchVerifyUser.rejected](state, { payload }) {
      state.user = payload;
      state.isRefreshing = false;
    },
    [registrationNewUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [logInUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [logOutUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [fetchCurrentUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [fetchVerifyUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
  },
});

export default authSlice.reducer;
