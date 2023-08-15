import { PeriodPaginator, PeriodTypeSelect } from '../../index';
// import { useState } from 'react';
import { Container, ContainerSecond } from './CalendarToolbar.styled';

// сюда получаем период из вне как пропс - ?????где его взять??????
// и стэйт глобальный с задачами
const CalendarToolbar = () => {
  // const [date, setDate] = useState(0);
  // setDate(data => data);

  const getTasksForThePeriod = () => {
    // если изменилось date или пропсом переданный период, то выполни фэтч на таски за период и запиши в глобальный стэйт - ???где этот стэйт????.
    // Ошибка - пуш уведомление
  };

  return (
    <>
      <Container>
        <ContainerSecond>
          <PeriodPaginator date={1} getTasks={getTasksForThePeriod} />
        </ContainerSecond>
        <div>
          <PeriodTypeSelect />
        </div>
      </Container>
    </>
  );
};
export default CalendarToolbar;
