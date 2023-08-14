import React from 'react';
import moment from 'moment';
import { CalendarGrid, CalendarToolbar } from 'components/CalendarPage';

const startDay = moment().startOf('month').startOf('week');
const CalendarPage = () => {
  return (
    <div>
      <CalendarToolbar />
      {/* <PeriodPaginator />  */}
      <CalendarGrid startDay={startDay} />
    </div>
  );
};

export default CalendarPage;
