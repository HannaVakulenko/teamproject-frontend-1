// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import styled from 'styled-components';

// export const CalendarContainer = styled.div`
//   border: 1px solid #ccc;
//   box-sizing: border-box;
//   display: flex;
//   // flex-direction: column;
//   align-items: center;
// `;

// export const WeekdayCell = styled.div`
//   width: 100%;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const StyledDatePicker = styled(DatePicker)`
//   .MuiPickersDay-root {
//     width: 100%;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .MuiPickersCalendarHeader-switchHeader {
//     display: none;
//   }

//   .MuiPickersCalendarHeader-daysHeader {
//     display: none;
//   }

//   .MuiPickersCalendarHeader-iconButton {
//     display: none;
//   }
// `;
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
    /* Стилі для планшетної версії (ширина від 376px до 768px) */
    /* Можна додати додаткові стилі для планшетної версії */
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    /* Стилі для настільної версії (ширина від 769px до 1440px) */
    /* Можна додати додаткові стилі для настільної версії */
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
