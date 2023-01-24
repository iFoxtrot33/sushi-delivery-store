import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchSushi = createAsyncThunk(
  "sushi/fetchSushiStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63c1e64a376b9b2e6485d812.mockapi.io/items?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchSushi.pending]: (state, action) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchSushi.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchSushi.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectSushiData = (state) => state.sushi;

export const { setItems } = sushiSlice.actions;

export default sushiSlice.reducer;
