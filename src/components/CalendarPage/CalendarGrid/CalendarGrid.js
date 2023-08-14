import React from 'react';
import moment from 'moment';
import {
  GridWrapper,
  CellWrapper,
  RowInCell,
  DayWrapper,
} from './CalendarGrid.styled';

const CalendarPage = ({ startDay }) => {
  const currentDate = moment();
  const firstDayOfCurrentMonth = currentDate.clone().startOf('month');
  const lastDayOfCurrentMonth = currentDate.clone().endOf('month');

  const daysArray = [];
  let currentDay = startDay.clone();

  if (currentDay.day() === 0) {
    currentDay.add(1, 'day');
  }

  let isCurrentMonth = false;

  for (let i = 0; i < 35; i++) {
    if (currentDay.isSame(firstDayOfCurrentMonth, 'day')) {
      isCurrentMonth = true;
    }

    if (
      !isCurrentMonth ||
      currentDay.isSameOrBefore(lastDayOfCurrentMonth, 'day')
    ) {
      daysArray.push({
        day: isCurrentMonth ? currentDay.clone() : null,
        isCurrentMonth: isCurrentMonth,
      });
    }

    if (isCurrentMonth && currentDay.isSame(lastDayOfCurrentMonth, 'day')) {
      break;
    }

    currentDay.add(1, 'day');
  }

  while (daysArray.length < 35) {
    daysArray.push({
      day: null,
      isCurrentMonth: false,
    });
  }

  return (
    <GridWrapper>
      {daysArray.map(({ day, isCurrentMonth }) => (
        <CellWrapper key={day ? day.format('DDMMYYYY') : 'empty'}>
          <RowInCell>
            <DayWrapper className={isCurrentMonth ? 'current-month' : ''}>
              {day ? day.format('D') : ''}
            </DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarPage;
