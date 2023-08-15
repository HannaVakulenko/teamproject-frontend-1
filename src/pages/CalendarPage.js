import { ChoosedDay } from 'components/CalendarPage';
import { Section } from 'components/Common';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';
// import { CalendarToolbar } from '../components/CalendarPage/index';

const CalendarPage = () => {
  const tasks = useSelector(selectTasks);
  console.log(tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks({
      monthStart: "2023-09-01",
      monthEnd: "2023-09-30"
    }));
  }, [dispatch]);

  return (
    <>
      {/* <CalendarToolbar /> */}
      <Section>
        <h2>CalendarPage</h2>
        <p>
          dfuhdkfhgfkdfjhgkjdfgdfkjghfdkjghkjdfhgkjfd dfkghdfkjghkdfjhgkjdfhgkjdf
          gdfjghdfkjhgkjdfhgkjfdhng
        </p>
        <ChoosedDay />
      </Section>
    </>
  )
};

export default CalendarPage;
