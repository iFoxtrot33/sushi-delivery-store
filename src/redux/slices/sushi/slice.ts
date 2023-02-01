import { createSlice } from "@reduxjs/toolkit";
import { Status, SushiSliceState } from "./types";
import { fetchSushi } from "./asyncActions";

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

export const { setItems } = sushiSlice.actions;

export default sushiSlice.reducer;
