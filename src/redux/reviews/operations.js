import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-gr25.onrender.com';

export const fetchReviews = createAsyncThunk(
  'reviews/getREviews',
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
      return data;
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
