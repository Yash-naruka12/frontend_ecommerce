import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Helper/Status";
import { BASE_URL } from "../Helper/Api";
import axios from "axios";

const initialState = {
  categories: [],
  categoryStatus: STATUS.IDLE,
  categoryProduct: [],
  categoryProductStatus: STATUS.IDLE,
};

export const fetchAsyncCategory = createAsyncThunk(
  "category/fetch",
  async () => {
    try {
      const res = await axios.get(`${BASE_URL}products/categories`);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategory.pending, (state, action) => {
        state.categoryStatus = STATUS.PENDING;
      })
      .addCase(fetchAsyncCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoryStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncCategory.rejected, (state, action) => {
        state.categoryStatus = STATUS.REJECTED;
      });
  },
});

export const getAllCategories = (state) => state.category.categories;
export default CategorySlice.reducer;
