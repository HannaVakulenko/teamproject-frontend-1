import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startOfMonth, endOfMonth, format, parseISO } from 'date-fns';
import Swal from 'sweetalert2';
import { fetchTasks } from 'redux/tasks/operations';
import { CalendarToolbar } from '../components/CalendarPage/index';

const CalendarPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const currentDate = format(new Date(), 'yyyy-MM-dd');

  const currentDateObject = parseISO(currentDate, 'yyyy-MM-dd', new Date());
  const startOfMonthDate = startOfMonth(currentDateObject);
  const endOfMonthDate = endOfMonth(currentDateObject);
  const formatedStartMonthDate = format(startOfMonthDate, 'yyyy-MM-dd');
  const formatedEndMonthDate = format(endOfMonthDate, 'yyyy-MM-dd');

  useEffect(() => {
    if ((pathname === "/calendar" || "/calendar/") && pathname.length < 11) {
      navigate(`/calendar/month/${currentDate}`);
    }
  }, [currentDate, navigate, pathname]);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        await dispatch(fetchTasks({
          monthStart: formatedStartMonthDate,
          monthEnd: formatedEndMonthDate,
        }));
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          confirmButtonColor: '#3E85F3',
        });
      }
    };
    getAllTasks();
  }, [dispatch, formatedEndMonthDate, formatedStartMonthDate]);

  return (
    <>
      <CalendarToolbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
