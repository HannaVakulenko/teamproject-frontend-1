import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { ChoosedDay } from 'components/CalendarPage';
import { Section } from 'components/Common';
// import { CalendarGrid, CalendarToolbar, WeekdayHeader } from '../components/CalendarPage/index';
import React from 'react';
// import moment from 'moment';

const CalendarPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks({
      monthStart: "2023-08-01",
      monthEnd: "2023-08-31"
    }));
  }, [dispatch]);

  return (
    <>
      {/* <CalendarToolbar /> */}
      <Section>
        {/* <Section> */}
          {/* <WeekdayHeader /> */}
          {/* <CalendarGrid startDay={startDay} /> */}
        {/* </Section> */}
        <ChoosedDay />
      </Section>
    </>
  )
};
// const startDay = moment().startOf('month').startOf('week');

export default CalendarPage;
