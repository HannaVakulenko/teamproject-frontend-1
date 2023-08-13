import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';

export const CalendarContainer = styled.div`
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  width: 100%;

  @media (max-width: 375px) {
    width: 335;
    display: flex;
  }

  @media (min-width: 376px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const WeekdayCell = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDatePicker = styled(DatePicker)`
  .MuiPickersDay-root {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .MuiPickersCalendarHeader-switchHeader {
    display: none;
  }

  .MuiPickersCalendarHeader-daysHeader {
    display: none;
  }

  .MuiPickersCalendarHeader-iconButton {
    display: none;
  }
`;

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components';

// export const CalendarContainer = styled.div`
//   border: 1px solid #ccc;
//   box-sizing: border-box;
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   gap: 2px;
//   width: 100%;

//   @media (max-width: 375px) {
//     width: 335px;
//     display: flex;
//   }
// `;

// export const WeekdayCell = styled.div`
//   width: 100%;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const StyledDatePicker = styled(DatePicker)`
//   .react-datepicker__day {
//     width: 100%;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .react-datepicker__navigation--previous,
//   .react-datepicker__navigation--next {
//     display: none;
//   }
// `;
