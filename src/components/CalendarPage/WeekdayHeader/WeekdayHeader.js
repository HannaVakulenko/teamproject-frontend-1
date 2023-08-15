import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { LargeWeekday, SmallWeekday } from './WeekdayHeader.styled';
const WeekdayHeader = ({ isTabletOrDesktop }) => {
  return (
    <div>
      <LargeWeekday>M</LargeWeekday>
      <LargeWeekday>T</LargeWeekday>
      <LargeWeekday>W</LargeWeekday>
      <LargeWeekday>T</LargeWeekday>
      <LargeWeekday>F</LargeWeekday>
      {isTabletOrDesktop ? (
        <LargeWeekday>S</LargeWeekday>
      ) : (
        <SmallWeekday>S</SmallWeekday>
      )}
      {isTabletOrDesktop ? (
        <LargeWeekday>S</LargeWeekday>
      ) : (
        <SmallWeekday>S</SmallWeekday>
      )}
    </div>
  );
};

export default WeekdayHeader;
