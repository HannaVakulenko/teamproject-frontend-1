import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import {
  format,
  lastDayOfMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  isToday,
  isSameMonth,
  isSameDay,
  addDays,
  getDate,
  eachDayOfInterval,
} from 'date-fns';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import {
  GridWrapper,
  CellWrapper,
  DayWrapper,
  Task,
  TaskContainer,
  TaskContainerWrapper,
} from './CalendarTable.styled';

const CalendarTable = () => {
  const { currentDate } = useParams();
  const navigate = useNavigate();

  const dateParam = currentDate ? new Date(currentDate) : new Date();

  const daysArray = [];
  const firstDayOfMonth = startOfMonth(dateParam);
  const endDayOfMonth = lastDayOfMonth(dateParam);
  const numberOfDays = getDate(endDayOfMonth);
  const date = new Date(firstDayOfMonth);
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const firstDayOfWeek = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  const lastDayOfWeek = endOfWeek(endDayOfMonth, { weekStartsOn: 1 });

  if (
    (dayOfWeek === 'Saturday' && numberOfDays === 31) ||
    (dayOfWeek === 'Sunday' && numberOfDays === 31) ||
    (dayOfWeek === 'Sunday' && numberOfDays === 30)
  ) {
    for (let i = 0; i < 42; i++) {
      const currentDay = addDays(firstDayOfWeek, i);
      const isCurrentMonth = isSameMonth(currentDay, dateParam);

      daysArray.push({
        day: currentDay,
        isCurrentMonth: isCurrentMonth,
      });
    }
  } else {
    for (let i = 0; i < 35; i++) {
      const currentDay = addDays(firstDayOfWeek, i);
      const isCurrentMonth = isSameMonth(currentDay, dateParam);

      daysArray.push({
        day: currentDay,
        isCurrentMonth: isCurrentMonth,
      });
    }
  }

  const days = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek,
  });

  const tasks = useSelector(selectTasks);
// setHours(endDayOfMonth.getHours() + 3);
  const handleClick = day => {
    const endDayOfMonthLocal = new Date(
      new Date(endDayOfMonth).setHours(new Date(endDayOfMonth).getHours() + 3)
    );
    if (
      new Date(day) < new Date(firstDayOfMonth) ||
      new Date(day) > new Date(endDayOfMonthLocal)
    ) {
      return;
    }
    navigate(`/calendar/day/${day}`);
  };

  return (
    <GridWrapper>
      {daysArray.map(({ day, isCurrentMonth }, i) => (
        <CellWrapper
          key={format(days[i], 'yyyy-MM-dd')}
          to={`/calendar/day/${format(days[i], 'yyyy-MM-dd')}`}
          onClick={() => handleClick(format(days[i], 'yyyy-MM-dd'))}
        >
          {day && isCurrentMonth && (
            <DayWrapper
              className={isCurrentMonth ? 'current-month' : ''}
              $today={isToday(day)}
            >
              {format(day, 'd')}
            </DayWrapper>
          )}
          {day && isCurrentMonth && (
            <TaskContainerWrapper key={`day-${format(day, 'ddMMyyyy')}`}>
              {tasks.map((task, index) => {
                const taskDate = new Date(task.date);
                if (isSameDay(day, taskDate)) {
                  return (
                    <TaskContainer
                      key={task.id ? `task-${task.id}` : `task-${index}`}
                    >
                      <Task $priority={task.priority}>{task.title}</Task>
                    </TaskContainer>
                  );
                }
                return null;
              })}
            </TaskContainerWrapper>
          )}
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarTable;
