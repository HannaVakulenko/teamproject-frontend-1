import { useNavigate } from 'react-router-dom';
import { ButtonMonth, ButtonDay, Container } from './PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const PeriodTypeSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const toMonth = () => {
    // какой маршрут в итоге будет??????
    // navigate('/calendar/month/:currentDate');
    const currentDate = moment().format('YYYY-MM-DD');
    navigate(`/calendar/month/${currentDate}`);
  };
  const toDay = () => {
    // какой маршрут в итоге будет??????
    navigate('/calendar/day');
    // const currentDate = moment().format('YYYY-MM-DD');
    // navigate(`/calendar/day/${currentDate}`);
  };
  return (
    <Container>
      <ButtonMonth
        $isActive={location.pathname.includes('day')}
        onClick={toMonth}
      >
        Month
      </ButtonMonth>
      <ButtonDay
        $isActive={location.pathname.includes('month')}
        onClick={toDay}
      >
        Day
      </ButtonDay>
    </Container>
  );
};
export default PeriodTypeSelect;
