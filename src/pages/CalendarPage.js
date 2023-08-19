import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { CalendarToolbar } from '../components/CalendarPage/index';

const CalendarPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/calendar" || "/calendar/") {
      navigate(`/calendar/month/${format(new Date(), 'yyyy-MM-dd')}`);
    }
  }, [navigate, pathname]);

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
