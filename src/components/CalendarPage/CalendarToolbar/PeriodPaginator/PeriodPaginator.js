// import {
//   ButtonIncrease,
//   ButtonDecrease,
//   IconLeft,
//   IconRight,
//   DatePickerWrapperStyles,
//   Date,
//   ForDatePicker,
//   Container,
//   DatePickerWrapper,
// } from './PeriodPaginator.styled';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import icon from 'assets/icons/symbol-defs.svg';
// import { useLocation, useNavigate } from 'react-router-dom';
// import 'react-datepicker/dist/react-datepicker.css';
// import { enGB } from 'date-fns/locale';
// import { format } from 'date-fns';

// registerLocale('enGB', enGB);

// const PeriodPaginator = ({ date, getTasks, isOpen, setIsOpen, setDate }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleChange = e => {
//     const formattedDate = format(e, 'yyyy-MM-dd');

//     setIsOpen(!isOpen);
//     setDate(e);

//     if (location.pathname.startsWith('/calendar/month')) {
//       navigate(`/calendar/month/${formattedDate}`);
//     } else if (location.pathname.startsWith('/statistics')) {
//       navigate(`/statistics/${formattedDate}`);
//     } else {
//       navigate(`/calendar/day/${formattedDate}`);
//     }
//   };
//   const handleClick = e => {
//     e.preventDefault();
//     setIsOpen(!isOpen);
//   };

//   // console.log(date);

//   return (
//     <>
//       <ForDatePicker>
//         <Date className="example-custom-input" onClick={handleClick}>
//           {location.pathname.startsWith('/calendar/day') ||
//           location.pathname.startsWith('/statistics')
//             ? format(date, 'dd MMM yyyy')
//             : format(date, 'MMMM yyyy')}
//         </Date>
//         {isOpen && (
//           <DatePickerWrapper>
//             <DatePicker
//               locale="enGB"
//               onClickOutside={() => setIsOpen(!isOpen)}
//               formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
//               selected={date}
//               onChange={handleChange}
//               inline
//             />
//           </DatePickerWrapper>
//         )}
//       </ForDatePicker>

//       <Container>
//         <ButtonDecrease className="decrease" onClick={getTasks}>
//           <IconLeft height="9">
//             <use href={icon + '#icon-chevron-left'}></use>
//           </IconLeft>
//         </ButtonDecrease>
//         <ButtonIncrease className="increase" onClick={getTasks}>
//           <IconRight height="9">
//             <use href={icon + '#icon-chevron-right'}></use>
//           </IconRight>
//         </ButtonIncrease>
//       </Container>

//       <DatePickerWrapperStyles />
//     </>
//   );
// };
// export default PeriodPaginator;

import React, { useState } from 'react'; // Додали useState
import {
  ButtonIncrease,
  ButtonDecrease,
  IconLeft,
  IconRight,
  DatePickerWrapperStyles,
  Date,
  ForDatePicker,
  Container,
  DatePickerWrapper,
} from './PeriodPaginator.styled';
import DatePicker, { registerLocale } from 'react-datepicker';
import icon from 'assets/icons/symbol-defs.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { enGB } from 'date-fns/locale';
import { format, addMonths, subMonths } from 'date-fns'; // Додали addMonths та subMonths для зміни місяців

registerLocale('enGB', enGB);

const PeriodPaginator = ({ date, getTasks, isOpen, setIsOpen, setDate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Додали стан для поточної дати
  const [currentDate, setCurrentDate] = useState(date);

  const handleChange = e => {
    const formattedDate = format(e, 'yyyy-MM-dd');

    setIsOpen(!isOpen);
    setDate(e);
    setCurrentDate(e); // Оновлюємо поточну дату

    if (location.pathname.startsWith('/calendar/month')) {
      navigate(`/calendar/month/${formattedDate}`);
    } else if (location.pathname.startsWith('/statistics')) {
      navigate(`/statistics/${formattedDate}`);
    } else {
      navigate(`/calendar/day/${formattedDate}`);
    }
  };

  // Додали функцію для перемикання місяців та виклик функції getTasks
  const handleIncreaseMonth = () => {
    const newDate = addMonths(currentDate, 1);
    setCurrentDate(newDate);
    getTasks(newDate); // Викликаємо функцію getTasks для завантаження завдань нового місяця
  };

  const handleDecreaseMonth = () => {
    const newDate = subMonths(currentDate, 1);
    setCurrentDate(newDate);
    getTasks(newDate); // Викликаємо функцію getTasks для завантаження завдань нового місяця
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ForDatePicker>
        <Date className="example-custom-input" onClick={handleClick}>
          {location.pathname.startsWith('/calendar/day') ||
          location.pathname.startsWith('/statistics')
            ? format(currentDate, 'dd MMM yyyy') // Змінюємо на використання поточної дати
            : format(currentDate, 'MMMM yyyy')}{' '}
        </Date>
        {isOpen && (
          <DatePickerWrapper>
            <DatePicker
              locale="enGB"
              onClickOutside={() => setIsOpen(!isOpen)}
              formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
              selected={currentDate} // Змінюємо на використання поточної дати
              onChange={handleChange}
              inline
            />
          </DatePickerWrapper>
        )}
      </ForDatePicker>

      <Container>
        {/* Додали обробники для кнопок перемикання місяців */}
        <ButtonDecrease className="decrease" onClick={handleDecreaseMonth}>
          <IconLeft height="9">
            <use href={icon + '#icon-chevron-left'}></use>
          </IconLeft>
        </ButtonDecrease>
        <ButtonIncrease className="increase" onClick={handleIncreaseMonth}>
          <IconRight height="9">
            <use href={icon + '#icon-chevron-right'}></use>
          </IconRight>
        </ButtonIncrease>
      </Container>

      <DatePickerWrapperStyles />
    </>
  );
};
export default PeriodPaginator;
