import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme: state => {
      return state === 'light' ? 'dark' : 'light';
    },
    setLightTheme: () => {
      return 'light';
    },
  },
});

export const { toggleTheme, setLightTheme } = themeSlice.actions;
export const selectTheme = state => state.theme;
export default themeSlice.reducer;
