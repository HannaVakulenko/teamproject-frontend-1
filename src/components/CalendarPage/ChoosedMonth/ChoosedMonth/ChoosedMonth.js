import moment from 'moment';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from '../CalendarTable/CalendarTable';

const ChoosedMonth = () => {
  const startDay = moment().startOf('month').startOf('week'); // Початок місяця

  return (
    <>
      <MonthCalendarHead />
      <CalendarTable startDay={startDay} />
    </>
  );
};

export default ChoosedMonth;
