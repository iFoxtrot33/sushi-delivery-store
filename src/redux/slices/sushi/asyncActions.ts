import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Sushi, FetchSushiArgs } from "./types";

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
