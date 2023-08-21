import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { PeriodPaginator, PeriodTypeSelect } from '../../index';
import { Container, ContainerSecond } from './CalendarToolbar.styled';
import { parseISO, startOfMonth, endOfMonth, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { fetchTasks } from '../../../../redux/tasks/operations';
import Swal from 'sweetalert2';

const CalendarToolbar = () => {
  // const dateGlobal = useSelector(state => state.date.currentDate);
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentDate } = useParams();

  const monthFromURL = parseISO(currentDate);
  const currentMonth = new Date().getMonth() + 1;

  // console.log(sc); // Виводить щось на зразок "16-08-2023"

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const forFetchData = () => {
    const startDate = startOfMonth(monthFromURL);
    const endDate = endOfMonth(monthFromURL);

    const formattedStartDate = format(startDate, 'yyyy-MM-dd');
    const formattedEndDate = format(endDate, 'yyyy-MM-dd');

    return {
      monthStart: formattedStartDate,
      monthEnd: formattedEndDate,
    };
  };

  useEffect(() => {
    const getAllTasks = async () => {
      if (monthFromURL !== currentMonth) {
        try {
          await dispatch(fetchTasks());
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            confirmButtonColor: '#3E85F3',
          });
        }
      }
    };
    getAllTasks();
  }, [currentMonth, dispatch, forFetchData, monthFromURL]);

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
