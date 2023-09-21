import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLightTheme } from '../themeSlice';
import { AXIOS_BASE_URL } from 'constants/axiosBaseUrl';

axios.defaults.baseURL = AXIOS_BASE_URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const verificationEmail = createAsyncThunk(
  'auth/verificationEmail',
  async (email, thunkAPI) => {
    try {
      const res = await axios.post('/auth/verify', email);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const verify = createAsyncThunk(
  'auth/verify',
  async (verificationToken, thunkAPI) => {
    try {
      const res = await axios.get(`auth/verify/${verificationToken}`);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      // setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    thunkAPI.dispatch(setLightTheme());
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUserAccount = createAsyncThunk(
  'auth/fetchAccount',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user account');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/account');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserAccount = createAsyncThunk(
  'auth/updateAccount',
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user account');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.patch('/auth/account', formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
