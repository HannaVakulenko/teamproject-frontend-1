import React from 'react';
import moment from 'moment';
import {
  CalendarGrid,
  CalendarToolbar,
  WeekdayHeader,
} from 'components/CalendarPage';

const startDay = moment().startOf('month').startOf('week');
const CalendarPage = () => {
  return (
    <div>
      <CalendarToolbar />
      <WeekdayHeader />
      <CalendarGrid startDay={startDay} />
    </div>
  );
};

export default CalendarPage;
