import StatisticsChart from '../StatisticsChart/StatisticsChart';
import { Zaglushka, WrapperPaginator } from './StatisticsPageComponent.styled';

import  Statisticslegend  from "../StatisticsLegend/StatisticsLegend";

const StatisticsPageComponent = () => {
  return (
    <>
      <WrapperPaginator>
        <Zaglushka />
        <Statisticslegend />
      </WrapperPaginator>
      <StatisticsChart />
    </>
  );
};
export default StatisticsPageComponent;
