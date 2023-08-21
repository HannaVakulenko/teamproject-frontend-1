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
import { format } from 'date-fns';

registerLocale('enGB', enGB);

const PeriodPaginator = ({ date, getTasks, isOpen, setIsOpen, setDate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = e => {
    const formattedDate = format(e, 'yyyy-MM-dd');

    setIsOpen(!isOpen);
    setDate(e);

    if (location.pathname.startsWith('/calendar/month')) {
      navigate(`/calendar/month/${formattedDate}`);
    } else if (location.pathname.startsWith('/statistics')) {
      navigate(`/statistics/${formattedDate}`);
    } else {
      navigate(`/calendar/day/${formattedDate}`);
    }
  };
  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // console.log(date);

  return (
    <>
      <ForDatePicker>
        <Date className="example-custom-input" onClick={handleClick}>
          {location.pathname.startsWith('/calendar/day') ||
          location.pathname.startsWith('/statistics')
            ? format(date, 'dd MMM yyyy')
            : format(date, 'MMMM yyyy')}
        </Date>
        {isOpen && (
          <DatePickerWrapper>
            <DatePicker
              locale="enGB"
              onClickOutside={() => setIsOpen(!isOpen)}
              formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
              selected={date}
              onChange={handleChange}
              inline
            />
          </DatePickerWrapper>
        )}
      </ForDatePicker>

      <Container>
        <ButtonDecrease className="decrease" onClick={getTasks}>
          <IconLeft height="9">
            <use href={icon + '#icon-chevron-left'}></use>
          </IconLeft>
        </ButtonDecrease>
        <ButtonIncrease className="increase" onClick={getTasks}>
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
