import { useNavigate } from 'react-router-dom';
import { ButtonMonth, ButtonDay, Container } from './PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const PeriodTypeSelect = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();
  const currentDate = moment().format('YYYY-MM-DD');

  const toMonth = () => {
    navigate(`/calendar/month/${currentDate}`);
  };

  const toDay = () => {
    navigate(`/calendar/day/${currentDate}`);
  };

  return (
    <Container>
      <ButtonMonth
        $isActive={location.pathname.includes('day')}
        onClick={toMonth}
      >
        {t('month')}
      </ButtonMonth>
      <ButtonDay
        $isActive={location.pathname.includes('month')}
        onClick={toDay}
      >
        {t('day')}
      </ButtonDay>
    </Container>
  );
};
export default PeriodTypeSelect;
