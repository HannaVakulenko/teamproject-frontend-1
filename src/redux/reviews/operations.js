import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AXIOS_BASE_URL } from 'constants/axiosBaseUrl';

axios.defaults.baseURL = AXIOS_BASE_URL;

export const fetchReviews = createAsyncThunk(
  'reviews/getReviews',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/reviews?page=${page}&limit=${limit}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReviews',
  async (review, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/reviews/own', review);
      return data.reviews;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReviews',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/reviews/own`);
      console.log(data);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editReview = createAsyncThunk(
  'reviews/editReviews',
  async ({ _, review }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/reviews/own`, review);

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchReviewOwn = createAsyncThunk(
  'reviews/fetchReviewById',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/reviews/own`);
      return data.reviews;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
