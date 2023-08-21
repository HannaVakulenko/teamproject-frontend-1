// import { useState } from 'react';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
// import PeriodPaginator from '../../../components/CalendarPage/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import CalendarToolbar from '../../CalendarPage/CalendarToolbar/CalendarToolbar/CalendarToolbar';

import { ContainerSecond } from '../../../components/CalendarPage/CalendarToolbar/CalendarToolbar/CalendarToolbar.styled';

import { WrapperPaginator } from './StatisticsPageComponent.styled';

import Statisticslegend from '../StatisticsLegend/StatisticsLegend';

const StatisticsPageComponent = () => {
  // const [date, setDate] = useState(new Date());
  
  // const [isOpen, setIsOpen] = useState(false);
 
  // const changeDate = e => {
  //   const newDate = new Date(date);

  //     if (e.currentTarget.className.includes('decrease')) {
      
  //       newDate.setDate(newDate.getDate() - 1);
  //     } else {
  //       newDate.setDate(newDate.getDate() + 1);
  //     }
  //   setDate(newDate);
  //   console.log(newDate);
  // };
  return (
    <>
      <WrapperPaginator>
        <ContainerSecond>
          <CalendarToolbar />
          {/* <PeriodPaginator
            date={date}
            getTasks={changeDate}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setDate={setDate}
          /> */}
        </ContainerSecond>
        <Statisticslegend />
      </WrapperPaginator>
      <StatisticsChart />
    </>
  );
};
export default StatisticsPageComponent;
