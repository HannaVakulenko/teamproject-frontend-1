import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarWrapper } from './DatePiker.syled';

const MyDatePicker = () => {
  return (
    <CalendarWrapper>
      <DatePicker />
    </CalendarWrapper>
  );
};
export default MyDatePicker;
