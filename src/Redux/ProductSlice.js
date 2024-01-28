import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Helper/Status";
import axios from "axios";
import { BASE_URL } from "../Helper/Api";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  singleProducts: [],
  singleProductStatus: STATUS.IDLE,
};

export const fetchAsyncProduct = createAsyncThunk(
  "product/fetch",
  async (limit) => {
    try {
      const res = await axios.get(`${BASE_URL}products?limit=${limit}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const fetchAsyncSingleProduct = createAsyncThunk(
  "single-product/fetch",
  async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}products/${id}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncProduct.pending, (state, action) => {
      state.productStatus = STATUS.PENDING;
    });
    builder.addCase(fetchAsyncProduct.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.productStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchAsyncProduct.rejected, (state, action) => {
      state.productStatus = STATUS.REJECTED;
    });
    builder.addCase(fetchAsyncSingleProduct.pending, (state, action) => {
      state.singleProductStatus = STATUS.PENDING;
    });
    builder.addCase(fetchAsyncSingleProduct.fulfilled, (state, action) => {
      state.singleProducts = action.payload;
      state.singleProductStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchAsyncSingleProduct.rejected, (state, action) => {
      state.singleProductStatus = STATUS.REJECTED;
    });
  },
});

export const getAllProducts = (state) => state.product.products;
export const productStatus = (state) => state.product.productStatus;
export const singleProducts = (state) => state.product.singleProducts;
export const singleProductStatus = (state) => state.product.singleProductStatus;
export default ProductSlice.reducer;
