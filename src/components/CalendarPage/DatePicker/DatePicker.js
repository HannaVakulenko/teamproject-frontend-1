import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import en from 'date-fns/locale/en-US';

registerLocale('en', en);
const MyDatePicker = props => {
  return (
    <div>
      <DatePicker
        selected={props.date}
        onChange={props.onChange}
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
