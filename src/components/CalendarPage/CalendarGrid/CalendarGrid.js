import React from 'react';
import {
  GridWrapper,
  CellWrapper,
  RowInCell,
  DayWrapper,
} from './CalendarGrid.styled';
const CalendarPage = ({ startDay }) => {
  // const totalDays = 35;
  const day = startDay.clone().subtract();
  const daysArray = [...Array(35)].map(() => day.add(1, 'day').clone());
  console.log(daysArray);
  return (
    <GridWrapper>
      {daysArray.map(dayItem => (
        <CellWrapper key={dayItem.format('DDMMYYYY')}>
          <RowInCell>
            <DayWrapper>{dayItem.format('D')}</DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};
export default CalendarPage;
