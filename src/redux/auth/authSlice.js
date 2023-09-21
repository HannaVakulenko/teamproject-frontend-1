import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logout,
  login,
  refreshUser,
  fetchUserAccount,
  updateUserAccount,
  verify,
  verificationEmail,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    phone: null,
    skype: null,
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (_, __) => {
        // state.user = action.payload.user;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(verificationEmail.fulfilled, (_, __) => {
        // state.user = action.payload.user;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(verify.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(fetchUserAccount.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUserAccount.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
