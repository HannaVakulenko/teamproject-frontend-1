// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import en from 'date-fns/locale/en-US';
// import { DayNamesWrapper, DayName } from './DatePiker.styled';

// registerLocale('en', en);
// const MyDatePicker = props => {
//   return (
//     <div>
//       <DayNamesWrapper>
//         <DayName>Sun</DayName>
//         <DayName>Mon</DayName>
//         <DayName>Tue</DayName>
//         <DayName>Wed</DayName>
//         <DayName>Thu</DayName>
//         <DayName>Fri</DayName>
//         <DayName>Sat</DayName>
//       </DayNamesWrapper>
//       <DatePicker
//         selected={props.date}
//         onChange={props.onChange}
//         open
//         dropdownMode="select"
//         dateFormat="yyyy.MM.dd."
//         todayButton="Ma"
//         closeOnScroll={true}
//         locale="en"
//         calendarStartDay={1}
//       />
//     </div>
//   );
// };

// export default MyDatePicker;

//react-style-css
// import React from 'react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import en from 'date-fns/locale/en-US';
// import styled from 'styled-components';
// import { datePickerStyles } from './DatePiker.styled';

// registerLocale('en', en);

// const CustomDatePicker = styled(DatePicker)`
//   /* Стилі вашого календаря */
//   ${datePickerStyles};
// `;

// const MyDatePicker = props => {
//   return (
//     <div>
//       <CustomDatePicker
//         selected={props.date}
//         onChange={props.onChange}
//         open
//         dropdownMode="select"
//         dateFormat="yyyy.MM.dd."
//         todayButton="Ma"
//         closeOnScroll={true}
//         locale="en"
//         calendarStartDay={1}
//       />
//     </div>
//   );
// };

// export default MyDatePicker;
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

// import { css } from 'styled-components';

// export const datePickerStyles = css`
//   /* Стилі для react-datepicker__day-names */
//   .react-datepicker__day-names {
//         display: none;
//     position: absolute;
//     top: -40px
//     left: 0;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #f5f5f5;
//     padding: 8px;
//     border-top-left-radius: 4px;
//     border-top-right-radius: 4px;
//     width: 100%; /* Розтягуємо на всю ширину */
//     z-index: 1; /* Забезпечуємо відображення над календарем */
//   }

//   .react-datepicker__day-name {
//     font-weight: bold;
//     text-align: center;
//     flex-basis: calc(100% / 7);
//   }
// `;
//Стилі для react-datepicker__day-names */
