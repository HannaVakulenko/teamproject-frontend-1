import React from 'react';
import { MyDatePicker } from 'components/CalendarPage';
import { CalendarWrapper } from './Calendar.styled';
const CalendarPage = () => (
  <>
    <CalendarWrapper>
      <div>CalendarPage</div>
      <MyDatePicker />
    </CalendarWrapper>
  </>
);

export default CalendarPage;
