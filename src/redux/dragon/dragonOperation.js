import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://api.spacexdata.com/v4/dragons";

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

const fetchDragonId = createAsyncThunk(
  "dragon/fetchDragonId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/${id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dragonOperation = { fetchDragon, fetchDragonId };

export default dragonOperation;
