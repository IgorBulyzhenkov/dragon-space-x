import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axios from "axios";
import { token } from "./axios";

const registrationNewUser = createAsyncThunk(
  "user/registrationNewUser",

  async ({ name, email, password, reset }, { rejectWithValue }) => {
    const body = {
      name,
      email,
      password,
    };
    try {
      const { data } = await axios.post("/register", body);

      reset();
      Notify.success("Email sent!");
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const logInUser = createAsyncThunk(
  "user/logInUser",
  async ({ email, password, reset }, { rejectWithValue }) => {
    const body = { email, password };

    try {
      const { data } = await axios.post("/login", body);
      token.set(data.token);
      reset();
      Notify.success(`Hello ${data.name}!`);
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const logOutUser = createAsyncThunk(
  "user/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/logout");
      Notify.warning("You is log out");
      token.unset();
    } catch (error) {
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",

  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistorToken = state.user.token;
    if (persistorToken === null) return rejectWithValue();
    token.set(persistorToken);
    try {
      const { data } = await axios.get("/current");
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const fetchVerifyUser = createAsyncThunk(
  "user/fetchVerifyUser",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistorToken = state.user.verificationToken;
    if (persistorToken === null) return rejectWithValue();
    try {
      const { data } = await axios.get(`/verify/${persistorToken}`);

      Notify.success("Email sent!");
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const fetchVerifyMail = createAsyncThunk(
  "user/fetchVerifyMail",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistorMail = state.user.email;

    console.log(persistorMail);

    if (persistorMail === null) return rejectWithValue();
    try {
      const { data } = await axios.post("/verify", { email: persistorMail });
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const user = {
  registrationNewUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
  fetchVerifyUser,
  fetchVerifyMail,
};

export default user;
