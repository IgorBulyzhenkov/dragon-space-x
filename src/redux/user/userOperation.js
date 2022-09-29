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
    console.log(state.user.verificationToken);
    if (persistorToken === null) return rejectWithValue();
    try {
      const { data } = await axios.get(`/verify/${persistorToken}`);
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
};

export default user;
