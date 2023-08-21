import {
  ButtonIncrease,
  ButtonDecrease,
  Icon,
  DatePickerWrapperStyles,
  Date,
  ForDatePicker,
  Container,
  DatePickerWrapper,
} from './PeriodPaginator.styled';
import DatePicker from 'react-datepicker';
import icon from 'assets/icons/symbol-defs.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const PeriodPaginator = ({ date, getTasks, isOpen, setIsOpen, setDate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = e => {
    const formattedDate = format(e, 'yyyy-MM-dd');

    setIsOpen(!isOpen);
    setDate(e);

    if (location.pathname.startsWith('/calendar/day')) {
      navigate(`/calendar/month/${formattedDate}`);
    }
    navigate(`/calendar/day/${formattedDate}`);
  };
  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ForDatePicker>
        {' '}
        <Date className="example-custom-input" onClick={handleClick}>
          {location.pathname.startsWith('/calendar/day') ||
          location.pathname === '/statistics'
            ? format(date, 'dd MMM yyyy')
            : format(date, 'MMMM yyyy')}
        </Date>
        {isOpen && (
          <DatePickerWrapper>
            {' '}
            <DatePicker
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
        {' '}
        <ButtonDecrease className="decrease" onClick={getTasks}>
          <Icon width="18" height="18">
            <use href={icon + '#icon-chevron-left'}></use>
          </Icon>
        </ButtonDecrease>
        <ButtonIncrease className="increase" onClick={getTasks}>
          <svg width="18" height="18">
            <use href={icon + '#icon-chevron-right'}></use>
          </svg>
        </ButtonIncrease>
      </Container>

      <DatePickerWrapperStyles />
    </>
  );
};
export default PeriodPaginator;
