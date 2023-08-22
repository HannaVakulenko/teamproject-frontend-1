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
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import icon from 'assets/icons/symbol-defs.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import uk from 'date-fns/locale/uk';
import de from 'date-fns/locale/de';
import enGB from 'date-fns/locale/en-GB'; //
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

registerLocale('uk', uk);
registerLocale('de', de);
registerLocale('en-GB', enGB);
setDefaultLocale('en-GB');

const i18nextLocaleMap = {
  ua: 'uk',
  de: 'de',
  en: 'en-GB',
};

const PeriodPaginator = ({ date, getTasks, isOpen, setIsOpen, setDate }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

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

  const datePickerLocale = i18nextLocaleMap[currentLanguage];

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
              locale={datePickerLocale}
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
