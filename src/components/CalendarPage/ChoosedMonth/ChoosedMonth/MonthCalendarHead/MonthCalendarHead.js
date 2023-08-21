import React from 'react';
import {
  LargeWeekday,
  WeekWrapper,
  WeekDayWrapper,
} from './MonthCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';

const MonthCalendarHead = () => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 376 });

  return (
    <WeekWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? 'mon' : 'm'}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? 'tue' : 't'}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? 'wed' : 'w'}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? 'thu' : 't'}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? 'fri' : 'f'}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={true}>
          {isTabletOrDesktop ? 'sat' : 's'}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={true}>
          {isTabletOrDesktop ? 'sun' : 's'}
        </LargeWeekday>
      </WeekDayWrapper>
    </WeekWrapper>
  );
};

export default MonthCalendarHead;
