import { createSlice } from '@reduxjs/toolkit';
import format from 'date-fns/format';

const initialState = {
  currentDate: format(Date.now(), 'yyyy-MM-dd'),
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducer: {
    setDates: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
});

export const { setDates } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
