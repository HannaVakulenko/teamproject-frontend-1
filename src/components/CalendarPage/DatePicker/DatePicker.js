import React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  CalendarContainer,
  StyledDatePicker,
  WeekdayCell,
} from './DatePiker.styled';

const MyDatePicker = () => {
  const locale = {
    weekStartsOn: 1,
  };
  return (
    <CalendarContainer>
      <WeekdayCell>Mon</WeekdayCell>
      <WeekdayCell>Tue</WeekdayCell>
      <WeekdayCell>Wed</WeekdayCell>
      <WeekdayCell>Thu</WeekdayCell>
      <WeekdayCell>Fri</WeekdayCell>
      <WeekdayCell>Sat</WeekdayCell>
      <WeekdayCell>Sun</WeekdayCell>
      <StyledDatePicker
        dateAdapter={AdapterDateFns}
        open
        views={['day']}
        disableToolbar
        firstDayOfWeek={1}
        locale={locale}
      />
    </CalendarContainer>
  );
};

export default MyDatePicker;
// // <DatePicker
// //   label="Select a date"
// //   value={selectedDate}
// //   onChange={date => setSelectedDate(date)}
// //   renderInput={params => <TextField {...params} />}
// //   startDay="1" // Monday
// //   shouldDisableDate={() => false}
// // />;
// import React, { useState } from 'react';
// import { DatePicker } from '@mui/x-date-pickers';
// import { TextField } from '@mui/material';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// const MyDatePicker = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   return (
//     <div>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <DatePicker
//           label="Select a date"
//           value={selectedDate}
//           onChange={date => setSelectedDate(date)}
//           renderInput={params => <TextField {...params} />}
//           startDay="1" // Monday
//           shouldDisableDate={() => false}
//         />
//       </LocalizationProvider>
//     </div>
//   );
// };

// export default MyDatePicker;

// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

//  <LocalizationProvider dateAdapter={AdapterDateFns}>
//    <DatePicker
//      label="Select a date"
//      value={selectedDate}
//      onChange={date => setSelectedDate(date)}
//      renderInput={params => <TextField {...params} />}
//      startDay="1" // Monday
//      shouldDisableDate={() => false}
//    />
//  </LocalizationProvider>;
