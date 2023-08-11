// import React from 'react';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { CalendarContainer, StyledDatePicker } from './DatePiker.syled';

// const MyDatePicker = () => {
//   return (
//     <CalendarContainer>
//       <div className="weekdays">
//         <div>Sun</div>
//         <div>Mon</div>
//         <div>Tue</div>
//         <div>Wed</div>
//         <div>Thu</div>
//         <div>Fri</div>
//         <div>Sat</div>
//       </div>
//       <StyledDatePicker
//         dateAdapter={AdapterDateFns}
//         openTo="day"
//         views={['day']}
//         disableToolbar
//       />
//     </CalendarContainer>
//   );
// };

// export default MyDatePicker;
import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  CalendarContainer,
  StyledDatePicker,
  WeekdayCell,
} from './DatePiker.syled';

const MyDatePicker = () => {
  return (
    <CalendarContainer>
      <WeekdayCell>Sun</WeekdayCell>
      <WeekdayCell>Mon</WeekdayCell>
      <WeekdayCell>Tue</WeekdayCell>
      <WeekdayCell>Wed</WeekdayCell>
      <WeekdayCell>Thu</WeekdayCell>
      <WeekdayCell>Fri</WeekdayCell>
      <WeekdayCell>Sat</WeekdayCell>
      <StyledDatePicker
        dateAdapter={AdapterDateFns}
        openTo="day"
        views={['day']}
        disableToolbar
      />
    </CalendarContainer>
  );
};

export default MyDatePicker;
