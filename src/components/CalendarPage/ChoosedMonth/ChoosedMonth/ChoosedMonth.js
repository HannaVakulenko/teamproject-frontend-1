import React from 'react';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from '../CalendarTable/CalendarTable';
import moment from 'moment';

const ChoosedMonth = () => {
  const startDay = moment().startOf('month').startOf('week');
  return (
    <>
      <MonthCalendarHead />
      <CalendarTable startDay={startDay} />
    </>
  );
};

export default ChoosedMonth;
