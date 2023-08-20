// import React from 'react';
// import moment from 'moment';
// import { useSelector } from 'react-redux';
// import { selectTasks } from '../../../../redux/tasks/selectors';
// import {
//   GridWrapper,
//   CellWrapper,
//   RowInCell,
//   DayWrapper,
//   LowPriorityTask,
//   MediumPriorityTask,
//   HighPriorityTask,
//   TaskContainer,
// } from './CalendarTable.styled';

// const CalendarTable = ({ startDay }) => {
//   const currentDate = moment();
//   const firstDayOfCurrentMonth = currentDate.clone().startOf('month');
//   const lastDayOfCurrentMonth = currentDate.clone().endOf('month');

//   const daysArray = [];
//   let currentDay = startDay.clone();

//   if (currentDay.day() === 0) {
//     currentDay.add(1, 'day');
//   }

//   let isCurrentMonth = false;

//   for (let i = 0; i < 35; i++) {
//     if (currentDay.isSame(firstDayOfCurrentMonth, 'day')) {
//       isCurrentMonth = true;
//     }

//     if (
//       !isCurrentMonth ||
//       currentDay.isSameOrBefore(lastDayOfCurrentMonth, 'day')
//     ) {
//       daysArray.push({
//         day: isCurrentMonth ? currentDay.clone() : null,
//         isCurrentMonth: isCurrentMonth,
//       });
//     }

//     if (isCurrentMonth && currentDay.isSame(lastDayOfCurrentMonth, 'day')) {
//       break;
//     }

//     currentDay.add(1, 'day');
//   }

//   while (daysArray.length < 35) {
//     daysArray.push({
//       day: null,
//       isCurrentMonth: false,
//     });
//   }
//   const tasks = useSelector(selectTasks);

//   return (
//     <div>
//       <GridWrapper>
//         {daysArray.map(({ day, isCurrentMonth }, i) => (
//           <CellWrapper key={day ? day.format('DDMMYYYY') : `empty-${i}`}>
//             <RowInCell>
//               <DayWrapper
//                 className={isCurrentMonth ? 'current-month' : ''}
//                 $today={day && day.isSame(currentDate, 'day')}
//               >
//                 {day ? day.format('D') : ''}
//               </DayWrapper>
//               {day && (
//                 <div key={`day-${day.format('DDMMYYYY')}`}>
//                   {tasks.map((task, index) => {
//                     if (day.isSame(task.date, 'day')) {
//                       let TaskComponent = null;

//                       if (task.priority === 'low') {
//                         TaskComponent = LowPriorityTask;
//                       } else if (task.priority === 'medium') {
//                         TaskComponent = MediumPriorityTask;
//                       } else if (task.priority === 'high') {
//                         TaskComponent = HighPriorityTask;
//                       }

//                       return (
//                         <TaskContainer
//                           key={task.id ? `task-${task.id}` : `task-${index}`}
//                         >
//                           <TaskComponent>{task.title}</TaskComponent>
//                         </TaskContainer>
//                       );
//                     }
//                     return null;
//                   })}
//                 </div>
//               )}
//             </RowInCell>
//           </CellWrapper>
//         ))}
//       </GridWrapper>
//     </div>
//   );
// };

// export default CalendarTable;
import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../../../redux/tasks/selectors';
import {
  GridWrapper,
  CellWrapper,
  // RowInCell,
  DayWrapper,
  LowPriorityTask,
  MediumPriorityTask,
  HighPriorityTask,
  TaskContainer,
} from './CalendarTable.styled';

const CalendarTable = ({ startDay }) => {
  const currentDate = moment();
  const firstDayOfCurrentMonth = currentDate.clone().startOf('month');
  const lastDayOfCurrentMonth = currentDate.clone().endOf('month');

  const daysArray = [];
  let currentDay = startDay.clone();

  if (currentDay.day() === 0) {
    currentDay.add(1, 'day');
  }

  let isCurrentMonth = false;

  for (let i = 0; i < 35; i++) {
    if (currentDay.isSame(firstDayOfCurrentMonth, 'day')) {
      isCurrentMonth = true;
    }

    if (
      !isCurrentMonth ||
      currentDay.isSameOrBefore(lastDayOfCurrentMonth, 'day')
    ) {
      daysArray.push({
        day: isCurrentMonth ? currentDay.clone() : null,
        isCurrentMonth: isCurrentMonth,
      });
    }

    if (isCurrentMonth && currentDay.isSame(lastDayOfCurrentMonth, 'day')) {
      break;
    }

    currentDay.add(1, 'day');
  }

  while (daysArray.length < 35) {
    daysArray.push({
      day: null,
      isCurrentMonth: false,
    });
  }
  const tasks = useSelector(selectTasks);

  return (
    <div>
      <GridWrapper>
        {daysArray.map(({ day, isCurrentMonth }, i) => (
          <CellWrapper key={day ? day.format('DDMMYYYY') : `empty-${i}`}>
            {day && (
              <DayWrapper
                className={isCurrentMonth ? 'current-month' : ''}
                $today={day && day.isSame(currentDate, 'day')}
              >
                {day ? day.format('D') : ''}
              </DayWrapper>
            )}
            {day && (
              <div key={`day-${day.format('DDMMYYYY')}`}>
                {tasks.map((task, index) => {
                  if (day.isSame(task.date, 'day')) {
                    let TaskComponent = null;

                    if (task.priority === 'low') {
                      TaskComponent = LowPriorityTask;
                    } else if (task.priority === 'medium') {
                      TaskComponent = MediumPriorityTask;
                    } else if (task.priority === 'high') {
                      TaskComponent = HighPriorityTask;
                    }

                    return (
                      <TaskContainer
                        key={task.id ? `task-${task.id}` : `task-${index}`}
                      >
                        <TaskComponent>{task.title}</TaskComponent>
                      </TaskContainer>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </CellWrapper>
        ))}
      </GridWrapper>
    </div>
  );
};

export default CalendarTable;
