import { useNavigate } from 'react-router-dom';
import { ButtonMonth, ButtonDay } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = () => {
  const navigate = useNavigate();

  const toMonth = () => {
    // какой маршрут??????
    navigate('/calendar/month');
  };
  const toDay = () => {
    // какой маршрут??????
    navigate('/calendar/day');
  };
  return (
    <>
      <ButtonMonth onClick={toMonth}>Month</ButtonMonth>
      <ButtonDay onClick={toDay}>Day</ButtonDay>
    </>
  );
};
export default PeriodTypeSelect;
