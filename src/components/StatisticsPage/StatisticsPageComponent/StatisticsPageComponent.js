import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import StatisticsChart from '../StatisticsChart/StatisticsChart';
import PeriodPaginator from '../../../components/CalendarPage/CalendarToolbar/PeriodPaginator/PeriodPaginator';

import { ContainerSecond } from '../../../components/CalendarPage/CalendarToolbar/CalendarToolbar/CalendarToolbar.styled';

import { WrapperPaginator } from './StatisticsPageComponent.styled';

import Statisticslegend from '../StatisticsLegend/StatisticsLegend';

const StatisticsPageComponent = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const changeDate = e => {
    const newDate = new Date(date);

    if (location.pathname === '/calendar/day') {
      if (e.currentTarget.className.includes('decrease')) {
        console.log('yes');
        newDate.setDate(newDate.getDate() - 1);
      } else {
        newDate.setDate(newDate.getDate() + 1);
      }

      setDate(newDate);
    } else {
      if (e.currentTarget.className.includes('decrease')) {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }

      setDate(newDate);
    }
  };
  return (
    <>
      <WrapperPaginator>
        <ContainerSecond>
          <PeriodPaginator
            date={date}
            getTasks={changeDate}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setDate={setDate}
          />
        </ContainerSecond>
        <Statisticslegend />
      </WrapperPaginator>
      <StatisticsChart />
    </>
  );
};
export default StatisticsPageComponent;
