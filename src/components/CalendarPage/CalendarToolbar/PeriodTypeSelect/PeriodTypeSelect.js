import { useNavigate } from 'react-router-dom';
import { ButtonMonth, ButtonDay } from './PeriodTypeSelect.styled';
// import i18n from '../../../../i18n';
import { useTranslation } from 'react-i18next';

const PeriodTypeSelect = () => {
  const { t } = useTranslation();

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
      {/* <Suspense fallback="loading..."> */}
      {/* <I18nextProvider i18n={i18n} defaultNS={'translation'}> */}
      <ButtonMonth onClick={toMonth}>{t('month')}</ButtonMonth>
      <ButtonDay onClick={toDay}>{t('day')}</ButtonDay>
      {/* </I18nextProvider>
      </Suspense> */}
    </>
  );
};
export default PeriodTypeSelect;
