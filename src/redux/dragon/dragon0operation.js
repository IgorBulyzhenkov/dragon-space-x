import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL =
  "https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f";
const fetchDragon = createAsyncThunk(
  "dragon/fetchDragon",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchDragon;
