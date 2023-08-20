import { createSlice } from '@reduxjs/toolkit';
import {
  fetchReviews,
  addReview,
  editReview,
  deleteReview,
  fetchReviewOwn,
} from './operations';

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    userReview: [
      {
        rating: null,
        review: '',
      },
    ],
    isLoading: false,
    error: null,
  },
  reducers: {
    changeRating(state, action) {
      state.userReview.rating = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchReviews.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addReview.pending, state => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.userReview = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteReview.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.userReview = [];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editReview.pending, state => {
        state.isLoading = true;
      })
      .addCase(editReview.fulfilled, (state, action) => {
        state.userReview = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchReviewOwn.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchReviewOwn.fulfilled, (state, action) => {
        if (action.payload) {
          state.userReview = action.payload;
        } else {
          state.userReview = [
            {
              rating: '',
              review: '',
            },
          ];
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchReviewOwn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeRating } = reviewSlice.actions;
export const reviewsReducer = reviewSlice.reducer;
