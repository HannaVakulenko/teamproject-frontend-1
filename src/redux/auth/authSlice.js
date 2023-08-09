import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    userName: null,
    email: null,
    birthday: null,
    phone: null,
    skype: null,
    imageURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

export const authReducer = authSlice.reducer;
