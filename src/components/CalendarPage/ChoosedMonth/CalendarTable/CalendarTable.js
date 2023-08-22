import React from 'react';
import { useParams } from 'react-router-dom';
import {
  format,
  lastDayOfMonth,
  startOfMonth,
  startOfWeek,
  isToday,
  isSameMonth,
  isSameDay,
  addDays,
  getDate,
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

  const tasks = useSelector(selectTasks);

  return (
    <GridWrapper>
      {daysArray.map(({ day, isCurrentMonth }, i) => (
        <CellWrapper key={day ? format(day, 'ddMMyyyy') : `empty-${i}`}>
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
