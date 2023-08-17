import { ButtonIncrease, ButtonDecrease, Icon } from './PeriodPaginator.styled';
import DatePicker from 'react-datepicker';
import icon from 'assets/icons/symbol-defs.svg';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'; // Додайте імпорт
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const PeriodPaginator = ({ date, getTasks, isOpen, setIsOpen, setDate }) => {
  const location = useLocation();

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
      <button className="example-custom-input" onClick={handleClick}>
        {location.pathname === '/calendar/day'
          ? format(date, 'dd MMM yyyy')
          : format(date, 'MMM yyyy')}
      </button>
      {isOpen && <DatePicker selected={date} onChange={handleChange} inline />}
      <ButtonIncrease className="decrease" onClick={getTasks}>
        <Icon width="18" height="18">
          <use href={icon + '#icon-chevron-left'}></use>
        </Icon>
      </ButtonIncrease>
      <ButtonDecrease className="increase" onClick={getTasks}>
        <svg width="18" height="18">
          <use href={icon + '#icon-chevron-right'}></use>
        </svg>
      </ButtonDecrease>
    </>
  );
};
export default PeriodPaginator;
