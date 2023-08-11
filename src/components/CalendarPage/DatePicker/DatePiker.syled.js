// import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export const CalendarContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   gap: 2px;
// `;

// export const StyledDatePicker = styled(DatePicker)`
//   .MuiPickersDay-root {
//     width: 100%;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid #ccc; /* Додайте рамку для кожного дня */
//     box-sizing: border-box; /* Збереження розміру включаючи рамку */
//   }

//   .MuiPickersCalendarHeader-switchHeader {
//     display: none;
//   }

//   .MuiPickersCalendarHeader-daysHeader {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 8px;
//   }

//   .MuiPickersCalendarHeader-iconButton {
//     display: none;
//   }
// `;
import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const WeekdayCell = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const StyledDatePicker = styled(DatePicker)`
  .MuiPickersDay-root {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    box-sizing: border-box;
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
