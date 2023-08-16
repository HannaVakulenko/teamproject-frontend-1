import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PeriodPaginator, PeriodTypeSelect } from '../../index';
import { Container, ContainerSecond } from './CalendarToolbar.styled';
// import { fetchTasks } from '../../../../redux/tasks/operations';

const CalendarToolbar = () => {
  const dateGlobal = useSelector(state => state.date.currentDate);
  const [date, setDate] = useState(dateGlobal);
  const location = useLocation();
  console.log(location);

  // const dispatch = useDispatch();

  // const formatDateForFetch = date => {
  //   const parts = date.split('-');
  //   const year = parseInt(parts[0]);
  //   const month = parseInt(parts[1]) - 1;

  //   const firstDayOfMonth = new Date(year, month, 1);
  //   const lastDayOfMonth = new Date(year, month + 1, 0);

  //   const formattedFirstDay = `${year}-${(month + 1)
  //     .toString()
  //     .padStart(2, '0')}-01`;
  //   const formattedLastDay = `${year}-${(month + 1)
  //     .toString()
  //     .padStart(2, '0')}-${lastDayOfMonth
  //     .getDate()
  //     .toString()
  //     .padStart(2, '0')}`;

  //   console.log({
  //     monthStart: formattedFirstDay,
  //     monthEnd: formattedLastDay,
  //   });

  //   return {
  //     monthStart: formattedFirstDay,
  //     monthEnd: formattedLastDay,
  //   };
  // };

  // useEffect(() => {
  //   dispatch(fetchTasks());
  //   //  // formatDateForFetch(date); а потом записать их в selectTasks??
  // }, [date, dateGlobal]);

  const changeDate = e => {
    const newDate = new Date(date);

    if (location.pathname === '/calendar/day') {
      if (e.currentTarget.className === 'sc-gJiVIX') {
        newDate.setDate(newDate.getDate() - 1);
      } else {
        newDate.setDate(newDate.getDate() + 1);
      }

      setDate(newDate);
    } else {
      if (e.currentTarget.className === 'sc-gJiVIX') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }

      setDate(newDate);
    }
  };

  const formatDateString = inputDate => {
    if (location.pathname === '/calendar/day') {
      const parsedDate = new Date(inputDate);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      const formattedDate = parsedDate.toLocaleDateString('en-GB', options);
      return formattedDate.replace(
        parsedDate.toLocaleString('en-GB', { month: 'short' }),
        parsedDate.toLocaleString('en-GB', { month: 'short' }).toUpperCase()
      );
    }
    const parsedDate = new Date(inputDate);
    const options = { month: 'short', year: 'numeric' };
    const formattedDate = parsedDate.toLocaleDateString('en-GB', options);
    const monthUpperCase = formattedDate.split(' ')[0].toUpperCase();
    const year = formattedDate.split(' ')[1];
    return `${monthUpperCase} ${year}`;
  };

  const formattedDate = formatDateString(date);

  return (
    <>
      <Container>
        <ContainerSecond>
          <PeriodPaginator date={formattedDate} getTasks={changeDate} />
        </ContainerSecond>
        <div>
          <PeriodTypeSelect />
        </div>
      </Container>
      <Routes>
        <Route path="/calendar/month" element={<div>day</div>} />
        <Route path="/calendar/day" element={<div>month</div>} />
      </Routes>
    </>
  );
};
export default CalendarToolbar;
