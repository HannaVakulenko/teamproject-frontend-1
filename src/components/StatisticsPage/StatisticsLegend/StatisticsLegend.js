import { useTranslation } from 'react-i18next';
import {
  CircleDay,
  CircleMonth,
  WrapperLegend,
  WrapperInner,
  TextLegend,
} from './StatisticsLegend.styled';

const Statisticslegend = () => {
  const { t } = useTranslation();
  return (
    <>
      <WrapperLegend>
        <WrapperInner>
          <CircleDay />
          <TextLegend>{t('by_day')}</TextLegend>
        </WrapperInner>
        <WrapperInner>
          <CircleMonth />
          <TextLegend>{t('by_month')}</TextLegend>
        </WrapperInner>
      </WrapperLegend>
    </>
  );
};
export default Statisticslegend;
