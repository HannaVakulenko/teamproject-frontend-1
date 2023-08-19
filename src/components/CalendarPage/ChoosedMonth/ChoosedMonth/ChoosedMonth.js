import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { startOfMonth, endOfMonth, format, parseISO } from 'date-fns';
import { fetchTasks } from 'redux/tasks/operations';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from '../CalendarTable/CalendarTable';


const ChoosedMonth = () => {
  const { currentDate } = useParams();
  const dispatch = useDispatch();
  const startDay = moment().startOf('month').startOf('week'); // Початок місяця

  const currentDateObject = parseISO(currentDate, 'yyyy-MM-dd', new Date());
  const startOfMonthDate = startOfMonth(currentDateObject);
  const endOfMonthDate = endOfMonth(currentDateObject);
  const formatedStartMonthDate = format(startOfMonthDate, 'yyyy-MM-dd');
  const formatedEndMonthDate = format(endOfMonthDate, 'yyyy-MM-dd');

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        await dispatch(fetchTasks({
          monthStart: formatedStartMonthDate,
          monthEnd: formatedEndMonthDate,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    getAllTasks();
  }, [dispatch, formatedEndMonthDate, formatedStartMonthDate]);

  return (
    <>
      <MonthCalendarHead />
      <CalendarTable startDay={startDay} />
    </>
  );
};

export default ChoosedMonth;
