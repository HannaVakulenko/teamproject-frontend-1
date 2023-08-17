import React from 'react';
import { LargeWeekday, WeekWrapper } from './WeekdayHeader.styled';
import { useMediaQuery } from 'react-responsive';

const WeekdayHeader = () => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 376 });

  return (
    <WeekWrapper>
      <LargeWeekday $weekend={false}>
        {isTabletOrDesktop ? 'mon' : 'm'}
      </LargeWeekday>
      <LargeWeekday $weekend={false}>
        {isTabletOrDesktop ? 'tue' : 't'}
      </LargeWeekday>
      <LargeWeekday $weekend={false}>
        {isTabletOrDesktop ? 'wed' : 'w'}
      </LargeWeekday>
      <LargeWeekday $weekend={false}>
        {isTabletOrDesktop ? 'thu' : 't'}
      </LargeWeekday>
      <LargeWeekday $weekend={false}>
        {isTabletOrDesktop ? 'fri' : 'f'}
      </LargeWeekday>
      <LargeWeekday $weekend={true}>
        {isTabletOrDesktop ? 'sat' : 's'}
      </LargeWeekday>
      <LargeWeekday $weekend={true}>
        {isTabletOrDesktop ? 'sun' : 's'}
      </LargeWeekday>
    </WeekWrapper>
  );
};

export default WeekdayHeader;
