import React from 'react';
import moment from 'moment';
import
CalendarGrid,
CalendarToolbar,
PeriodPaginator,
'components/CalendarPage';
// import MyDatePicker from 'components/CalendarPage/DatePicker/DatePicker';
const startDay = moment().startOf('month').startOf('week');
const CalendarPage = () => {
  return (
    <div>
       <CalendarToolbar /> 
      <PeriodPaginator /> 
      <CalendarGrid startDay={startDay} />
     
    </div>
  );
};

export default CalendarPage;
