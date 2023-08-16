// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchTasks } from 'redux/tasks/operations';
import { ChoosedDay } from 'components/CalendarPage';
import { Section } from 'components/Common';
// import { CalendarToolbar } from '../components/CalendarPage/index';

const CalendarPage = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTasks({
  //     monthStart: "2023-08-01",
  //     monthEnd: "2023-08-31"
  //   }));
  // }, [dispatch]);

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
