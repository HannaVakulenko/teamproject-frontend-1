import {
  ButtonIncrease,
  ButtonDecrease,
  Icon,
  DatePickerWrapperStyles,
  Date,
  ForDatePicker,
  Container,
} from './PeriodPaginator.styled';
import DatePicker from 'react-datepicker';
import icon from 'assets/icons/symbol-defs.svg';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'; // Додайте імпорт
import 'react-datepicker/dist/react-datepicker.css';

const PeriodPaginator = ({ date, getTasks, isOpen, setIsOpen, setDate }) => {
  const location = useLocation();
  // console.log(window);

  const handleChange = e => {
    setIsOpen(!isOpen);
    setDate(e);
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
          {location.pathname === '/calendar/day'|| '/statistics'
            ? format(date, 'dd MMM yyyy')
            : format(date, 'MMMM yyyy')}
        </Date>
        {isOpen && (
          <DatePicker selected={date} onChange={handleChange} inline />
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
