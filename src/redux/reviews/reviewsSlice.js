import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
});

export const reviewsReducer = reviewsSlice.reducer;
