import { useNavigate } from 'react-router-dom';
import { ButtonMonth, ButtonDay } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = () => {
  const navigate = useNavigate();

  const toMonth = () => {
    // какой маршрут??????
    navigate('');
  };
  const toDay = () => {
    // какой маршрут??????
    navigate('');
  };
  return (
    <>
      <ButtonMonth onClick={toMonth}>Month</ButtonMonth>
      <ButtonDay onClick={toDay}>Day</ButtonDay>
    </>
  );
};
export default PeriodTypeSelect;
