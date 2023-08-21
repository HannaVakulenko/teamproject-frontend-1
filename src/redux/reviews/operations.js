import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AXIOS_BASE_URL } from 'constants/axiosBaseUrl';
import Swal from 'sweetalert2';

axios.defaults.baseURL = AXIOS_BASE_URL;

export const fetchReviews = createAsyncThunk(
  'reviews/getReviews',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/reviews?page=${page}&limit=${limit}`);
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
      const { data } = await axios.post('/reviews/own', review);
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
      const { data } = await axios.delete(`/reviews/own`);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your review has been successfully deleted!',
        confirmButtonColor: '#3E85F3',
      });
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editReview = createAsyncThunk(
  'reviews/editReviews',
  async (review, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/reviews/own`, review);
      return data.reviews;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchReviewOwn = createAsyncThunk(
  'reviews/fetchReviewById',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/reviews/own`);
      return data.reviews;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
