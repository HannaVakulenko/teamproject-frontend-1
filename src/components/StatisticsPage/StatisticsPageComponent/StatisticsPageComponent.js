import StatisticsChart from '../StatisticsChart/StatisticsChart';

import CalendarToolbar from '../../CalendarPage/CalendarToolbar/CalendarToolbar/CalendarToolbar';

import { WrapperPaginator } from './StatisticsPageComponent.styled';

import Statisticslegend from '../StatisticsLegend/StatisticsLegend';

const StatisticsPageComponent = () => {
  return (
    <>
      <WrapperPaginator>
        <CalendarToolbar />
        <Statisticslegend />
      </WrapperPaginator>
      <StatisticsChart />
    </>
  );
};
export default StatisticsPageComponent;
