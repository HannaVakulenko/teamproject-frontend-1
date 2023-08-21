import React from 'react';
import { useParams } from 'react-router-dom';
import {
  format,
  startOfMonth,
  startOfWeek,
  isToday,
  isSameMonth,
  isSameDay,
  addDays,
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
  const { dateParam } = useParams();
  const currentDate = dateParam ? new Date(dateParam) : new Date();

  const daysArray = [];
  const firstDayOfMonth = startOfMonth(currentDate);
  const firstDayOfWeek = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });

  for (let i = 0; i < 35; i++) {
    const currentDay = addDays(firstDayOfWeek, i);
    const isCurrentMonth = isSameMonth(currentDay, currentDate);

    daysArray.push({
      day: currentDay,
      isCurrentMonth: isCurrentMonth,
    });
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
