import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PeriodPaginator, PeriodTypeSelect } from '../../index';
import { Container, ContainerSecond } from './CalendarToolbar.styled';
import { parseISO, startOfMonth, endOfMonth, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { fetchTasks } from '../../../../redux/tasks/operations';
// import Swal from 'sweetalert2';

const CalendarToolbar = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const a = useParams();
  console.log(a);
  const { currentDate } = useParams();
  console.log(currentDate);

  const monthFromURL = parseISO(currentDate).getMonth() + 1;
  const currentMonth = new Date().getMonth() + 1;

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
    if (monthFromURL !== currentMonth && currentDate) {
      dispatch(fetchTasks(forFetchData()));
    }
  }, [currentDate, currentMonth, dispatch, forFetchData, monthFromURL]);

  //   const getAllTasks = async () => {
  //     if (monthFromURL !== currentMonth) {
  //       try {
  //         console.log('HI');
  //         await dispatch(fetchTasks(forFetchData()));
  //       } catch (error) {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'Something went wrong!',
  //           confirmButtonColor: '#3E85F3',
  //         });
  //       }
  //     }
  //   };
  //   getAllTasks();

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
    </>
  );
};
export default CalendarToolbar;
