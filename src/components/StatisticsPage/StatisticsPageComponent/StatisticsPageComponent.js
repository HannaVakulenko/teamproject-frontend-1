import StatisticsChart from '../StatisticsChart/StatisticsChart';
import {
  Zaglushka,
  WrapperSideBar
 
} from './StatisticsPageComponent.styled';

import  Statisticslegend  from "../StatisticsLegend/StatisticsLegend";

const StatisticsPageComponent = () => {
  return (
    <>
      <WrapperSideBar>
        <Zaglushka />
        <Statisticslegend />
      </WrapperSideBar>
      <StatisticsChart />
    </>
  );
};
export default StatisticsPageComponent;
