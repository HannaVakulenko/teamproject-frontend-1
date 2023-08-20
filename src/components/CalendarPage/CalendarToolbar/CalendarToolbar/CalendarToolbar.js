import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { PeriodPaginator, PeriodTypeSelect } from '../../index';
import { Container, ContainerSecond } from './CalendarToolbar.styled';
// import { parse, startOfMonth, endOfMonth, format } from 'date-fns'; // Додайте імпорт
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

// import { fetchTasks } from '../../../../redux/tasks/operations';

const CalendarToolbar = () => {
  // const dateGlobal = useSelector(state => state.date.currentDate);
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(sc); // Виводить щось на зразок "16-08-2023"

  // const dispatch = useDispatch();

  //   return {
  //     monthStart: formattedFirstDay,
  //     monthEnd: formattedLastDay,
  //   };
  // };
  // const forFetchData = () => {
  //   const parsedDate = new Date(date); // Парсинг даты в стандартном формате
  //   const startDate = startOfMonth(parsedDate);
  //   const endDate = endOfMonth(parsedDate);

  //   const formattedStartDate = format(startDate, 'yyyy-MM-dd');
  //   const formattedEndDate = format(endDate, 'yyyy-MM-dd');

  //   console.log('Start of the month:', formattedStartDate);
  //   console.log('End of the month:', formattedEndDate);
  // };

  // forFetchData()

  // useEffect(() => {
  //   dispatch(fetchTasks());
  //   //  // formatDateForFetch(date); а потом записать их в selectTasks??
  // }, [date, dateGlobal]);

  const changeDate = e => {
    const newDate = new Date(date);

    let formattedDate = '';

    if (location.pathname.startsWith('/calendar/day')) {
      if (e.currentTarget.className.includes('decrease')) {
        console.log('yes');
        newDate.setDate(newDate.getDate() - 1);
      } else {
        newDate.setDate(newDate.getDate() + 1);
      }

      setDate(newDate);
      formattedDate = format(newDate, 'yyyy-MM-dd');
    } else {
      if (e.currentTarget.className.includes('decrease')) {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }

      setDate(newDate);
      formattedDate = format(newDate, 'yyyy-MM-dd');
    }
    navigate(`/calendar/${location.pathname.split('/')[2]}/${formattedDate}`);
  };

  // const formatDateString = inputDate => {
  //   if (location.pathname === '/calendar/day') {
  //     const parsedDate = new Date(inputDate);
  //     const options = { day: 'numeric', month: 'short', year: 'numeric' };
  //     const formattedDate = parsedDate.toLocaleDateString('en-GB', options);
  //     return formattedDate.replace(
  //       parsedDate.toLocaleString('en-GB', { month: 'short' }),
  //       parsedDate.toLocaleString('en-GB', { month: 'short' }).toUpperCase()
  //     );
  //   }
  //   const parsedDate = new Date(inputDate);
  //   const options = { month: 'short', year: 'numeric' };
  //   const formattedDate = parsedDate.toLocaleDateString('en-GB', options);
  //   const monthUpperCase = formattedDate.split(' ')[0].toUpperCase();
  //   const year = formattedDate.split(' ')[1];
  //   return `${monthUpperCase} ${year}`;
  // };

  // const formattedDate = formatDateString(date);

  return (
    <>
      <Container>
        <ContainerSecond>
          <PeriodPaginator
            date={date}
            getTasks={changeDate}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setDate={setDate}
          />
        </ContainerSecond>
        <div>
          <PeriodTypeSelect />
        </div>
      </Container>
      {/* <Routes>
        <Route path="/month" element={<div>day</div>} />
        <Route path="/day" element={<div>month</div>} />
      </Routes> */}
    </>
  );
};
export default CalendarToolbar;
