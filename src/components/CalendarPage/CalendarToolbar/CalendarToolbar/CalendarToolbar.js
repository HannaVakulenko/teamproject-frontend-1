import { PeriodPaginator, PeriodTypeSelect } from '../../index';
import { useState } from 'react';
import { Container, ContainerSecond } from './CalendarToolbar.styled';

// сюда получаем период из вне как пропс - ?????где его взять??????
const CalendarToolbar = () => {
  const [date] = useState(0);
  //const [date, setDate] = useState(0);

  const getTasksForThePeriod = () => {
    // если изменилось date или пропсом переданный период, то выполни фэтч на таски за период и запиши в глобальный стэйт - ???где этот стэйт????.
    // Ошибка - пуш уведомление
  };

  return (
    <>
      <Container>
        <ContainerSecond>
          <PeriodPaginator $date={date} $getTasks={getTasksForThePeriod} />
        </ContainerSecond>
        <div>
          <PeriodTypeSelect />
        </div>
      </Container>
    </>
  );
};
export default CalendarToolbar;
