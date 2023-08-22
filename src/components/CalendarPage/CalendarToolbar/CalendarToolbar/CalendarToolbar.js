import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PeriodPaginator, PeriodTypeSelect } from '../../index';
import { Container, ContainerSecond } from './CalendarToolbar.styled';
import { parseISO, startOfMonth, endOfMonth, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { fetchTasks } from '../../../../redux/tasks/operations';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const CalendarToolbar = () => {
  const { t } = useTranslation();

  const error_text = t('error_text');

  const { currentDate } = useParams();
  const { currentDay } = useParams();
  // console.log(currentDay);

  const dayDate = currentDay || currentDate;
  const newDate = parseISO(dayDate);
  // console.log(dayDate);

  const formatDate =
    newDate === 'Invalid Date' ? new Date(newDate) : new Date();

  const [date, setDate] = useState(formatDate);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { currentDate } = useParams();
  // const { currentDay } = useParams();

  // const dayDate = currentDate || currentDay;

  // const currentMonth = new Date().getMonth() + 1;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const forFetchData = () => {
    const monthFromURL = parseISO(dayDate);
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
      if (dayDate) {
        try {
          await dispatch(fetchTasks(forFetchData())).unwrap();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error_text,
            confirmButtonColor: '#3E85F3',
          });
        }
      }
    };
    getAllTasks();
  }, [dayDate, dispatch, forFetchData]);

  useEffect(() => {
    if (dayDate) {
      const newDate = new Date(dayDate);
      setDate(newDate);
    }
  }, [dayDate]);

  const changeDate = e => {
    const newDate = new Date(date);
    let formattedDate = '';

    if (
      location.pathname.startsWith('/calendar/day') ||
      location.pathname.startsWith('/statistics')
    ) {
      if (e.currentTarget.className.includes('decrease')) {
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

    if (location.pathname.startsWith('/calendar/day')) {
      navigate(`/calendar/${location.pathname.split('/')[2]}/${formattedDate}`);
    } else if (location.pathname.startsWith('/calendar/month')) {
      navigate(`/calendar/${location.pathname.split('/')[2]}/${formattedDate}`);
    } else {
      navigate(`/statistics/${formattedDate}`);
    }
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
        {location.pathname.includes('statistics') ? (
          ''
        ) : (
          <div>
            <PeriodTypeSelect />
          </div>
        )}
      </Container>
    </>
  );
};
export default CalendarToolbar;
