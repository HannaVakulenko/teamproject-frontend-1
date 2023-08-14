import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import en from 'date-fns/locale/en-US';
import styled from 'styled-components';
import { GlobalStyles, CustomDatePickerStyles } from './DatePiker.styled';

registerLocale('en', en);

const CustomDatePicker = styled(DatePicker)`
  ${CustomDatePickerStyles}
`;

const MyDatePicker = props => {
  return (
    <div>
      <GlobalStyles /> {/* Застосовуємо глобальні стилі */}
      <CustomDatePicker
        selected={props.date}
        onChange={props.onChange}
        open
        dropdownMode="select"
        dateFormat="yyyy.MM.dd."
        todayButton="Ma"
        closeOnScroll={true}
        locale="en"
        calendarStartDay={1}
      />
    </div>
  );
};

export default MyDatePicker;

// //  moment
// import React from 'react';
// import moment from 'moment/moment';

// const MyDatePicker = () => {
//   console.log(moment());
//   moment.updateLocale('en', { week: { dow: 1 } });
//   const startDay = moment().startOf('month').startOf('week');
//   const endDay = moment().endOf('month').endOf('week');
//   window.startDay = startDay;
//   window.endDay = endDay;
//   let calendar = [];
//   const day = startDay.clone();
//   window.day = day;
//   while (!day.isAfter(endDay)) {
//     calendar.push(day.clone());
//     day.add(1, 'day');
//   }
//   console.log(calendar);
//   return <div></div>;
// };

// export default MyDatePicker;
