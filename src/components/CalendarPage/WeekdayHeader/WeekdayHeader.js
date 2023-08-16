import React from 'react';
import { LargeWeekday, WeekWrapper } from './WeekdayHeader.styled';
import { useMediaQuery } from 'react-responsive';

const WeekdayHeader = () => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <WeekWrapper>
      <LargeWeekday isWeekend={false}>
        {isTabletOrDesktop ? 'mon' : 'm'}
      </LargeWeekday>
      <LargeWeekday isWeekend={false}>
        {isTabletOrDesktop ? 'tue' : 't'}
      </LargeWeekday>
      <LargeWeekday isWeekend={false}>
        {isTabletOrDesktop ? 'wed' : 'w'}
      </LargeWeekday>
      <LargeWeekday isWeekend={false}>
        {isTabletOrDesktop ? 'thu' : 't'}
      </LargeWeekday>
      <LargeWeekday isWeekend={false}>
        {isTabletOrDesktop ? 'fri' : 'f'}
      </LargeWeekday>
      <LargeWeekday isWeekend={true}>
        {isTabletOrDesktop ? 'sat' : 's'}
      </LargeWeekday>
      <LargeWeekday isWeekend={true}>
        {isTabletOrDesktop ? 'sun' : 's'}
      </LargeWeekday>
    </WeekWrapper>
  );
};

export default WeekdayHeader;
