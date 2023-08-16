import { PeriodPaginator, PeriodTypeSelect } from '../../index';
import { useState, useEffect } from 'react';
import { Container, ContainerSecond } from './CalendarToolbar.styled';

// сюда получаем период из вне как пропс - ?????где его взять??????
// и стэйт глобальный с задачами
const CalendarToolbar = () => {
  const dateStart = new Date();

  // const date1 = dateStart.getDate();

  // const monthNames = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];

  // const finalDate = `${dateDate} ${dateMonth} ${dateYear}`;

  const [date, setDate] = useState(dateStart);
  console.log(date);

  useEffect(() => {}, []);

  const changeDate = e => {
    const newDate = new Date(date);

    if (e.currentTarget.className === 'sc-gJiVIX') {
      const result = newDate.setDate(newDate.getDate() - 1);
      setDate(result);
    } else {
      const result = newDate.setDate(newDate.getDate() + 1);
      setDate(result);
    }
  };

  return (
    <>
      <Container>
        <ContainerSecond>
          <PeriodPaginator date={1} getTasks={changeDate} />
        </ContainerSecond>
        <div>
          <PeriodTypeSelect />
        </div>
      </Container>
    </>
  );
};
export default CalendarToolbar;
