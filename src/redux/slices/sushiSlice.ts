import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

type FetchSushiArgs = Record<string, string | number>;

export const fetchSushi = createAsyncThunk(
  "sushi/fetchSushiStatus",
  async (params: FetchSushiArgs) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63c1e64a376b9b2e6485d812.mockapi.io/items?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data as Sushi[];
  }
);

type Sushi = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
};

export enum Status {
  LOADING = "loading",
  COMPLETED = "success",
  ERROR = "error",
}

interface SushiSliceState {
  items: Sushi[];
  status: Status;
}

const initialState: SushiSliceState = {
  items: [],
  status: Status.LOADING,
};

const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSushi.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchSushi.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.COMPLETED;
    });

    builder.addCase(fetchSushi.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectSushiData = (state: RootState) => state.sushi;

export const { setItems } = sushiSlice.actions;

export default sushiSlice.reducer;
