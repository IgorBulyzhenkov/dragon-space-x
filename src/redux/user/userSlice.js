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
  email: null,
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
  verifyMail: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registrationNewUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.verificationToken = payload.user.verificationToken;
      state.token = null;
      state.email = payload.user.email;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.verifyMail = true;
    },
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.verifyMail = false;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.verifyMail = false;
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
      state.verifyMail = false;
    },
    [registrationNewUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
      state.verificationToken = null;
      state.verifyMail = false;
    },
    [logInUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
      state.verifyMail = false;
    },
    [logOutUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
      state.verifyMail = false;
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
