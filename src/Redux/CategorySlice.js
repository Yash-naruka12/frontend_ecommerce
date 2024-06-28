import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../Helper/Status";
import { BASE_URL } from "../Helper/Api";

const initialState = {
  categories: [],
  categoryStatus: STATUS.IDLE,
  categoryProduct: [],
  categoryProductStatus: STATUS.IDLE,
};

export const fetchAsyncCategory = createAsyncThunk(
  "category/fetch",
  async () => {
    const response = await axios.get(`${BASE_URL}products/categories`);
    return response.data;
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategory.pending, (state) => {
        state.categoryStatus = STATUS.PENDING;
      })
      .addCase(fetchAsyncCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoryStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncCategory.rejected, (state) => {
        state.categoryStatus = STATUS.REJECTED;
      });
  },
});

export const getAllCategories = (state) => state.category.categories;
export default CategorySlice.reducer;
