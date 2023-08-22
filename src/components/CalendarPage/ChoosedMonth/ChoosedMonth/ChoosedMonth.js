import React from 'react';
import { startOfMonth, startOfWeek } from 'date-fns';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from '../CalendarTable/CalendarTable';

const ChoosedMonth = () => {
  const currentDate = new Date();
  const startDay = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 });

  return (
    <>
      <MonthCalendarHead />
      <CalendarTable startDay={startDay} />
    </>
  );
};

export default ChoosedMonth;
