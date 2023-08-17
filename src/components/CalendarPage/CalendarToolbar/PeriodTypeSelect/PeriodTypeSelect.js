import { useNavigate } from 'react-router-dom';
import { ButtonMonth, ButtonDay, Container } from './PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';

const PeriodTypeSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const toMonth = () => {
    // какой маршрут в итоге будет??????
    navigate('/calendar/month');
  };
  const toDay = () => {
    // какой маршрут в итоге будет??????
    navigate('/calendar/day');
  };
  return (
    <Container>
      <ButtonMonth
        isActive={location.pathname.includes('day')}
        onClick={toMonth}
      >
        Month
      </ButtonMonth>
      <ButtonDay isActive={location.pathname.includes('month')} onClick={toDay}>
        Day
      </ButtonDay>
    </Container>
  );
};
export default PeriodTypeSelect;
