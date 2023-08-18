import StatisticsChart from '../StatisticsChart/StatisticsChart';
import {
  Zaglushka,
 
} from './StatisticsPageComponent.styled';

import  Statisticslegend  from "../StatisticsLegend/StatisticsLegend";

const StatisticsPageComponent = () => {
  return (
    <>
      <Zaglushka />
     
      <Statisticslegend/>
      <StatisticsChart />
    </>
  );
};
export default StatisticsPageComponent;
