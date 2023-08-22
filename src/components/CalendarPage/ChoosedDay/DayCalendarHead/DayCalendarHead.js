import {
  startOfWeek,
  eachDayOfInterval,
  format,
  addDays,
  isSameDay,
  parseISO,
} from 'date-fns';
import {
  WeekDay,
  WeekDate,
  DayLink,
  List,
  Wrapper,
} from './DayCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

const DayCalendarHead = () => {
  const { currentDay } = useParams();
  const result = parseISO(currentDay, 'yyyy-MM-dd'); // 2021-08-09T00:00:00.000Z

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const startDay = startOfWeek(result, { weekStartsOn: 1 }); // 1 - Monday
  const lastDayOfWeek = addDays(startOfWeek(result, { weekStartsOn: 1 }), 6); // 6 - Sunday

  const days = eachDayOfInterval({
    start: startDay,
    end: lastDayOfWeek,
  });
  const daysOfWeek = days.map(day => format(day, 'E'));
  const daysOfWeekForMobile = days.map(day => format(day, 'EEEEE'));
  const daysOfMonth = days.map(day => format(day, 'd'));

  return (
    <Wrapper>
      <List>
        {isMobile
          ? daysOfWeekForMobile.map((day, index) => (
              <DayLink
                to={`/calendar/day/${format(days[index], 'yyyy-MM-dd')}`}
                key={index}
              >
                <WeekDay>{day}</WeekDay>
                <WeekDate
                  className={
                    isSameDay(days[index], result) ? 'current-day' : ''
                  }
                >
                  {daysOfMonth[index]}
                </WeekDate>
              </DayLink>
            ))
          : daysOfWeek.map((day, index) => (
              <DayLink
                to={`/calendar/day/${format(days[index], 'yyyy-MM-dd')}`}
                key={index}
              >
                <WeekDay>{day}</WeekDay>
                <WeekDate
                  className={
                    isSameDay(days[index], result) ? 'current-day' : ''
                  }
                >
                  {daysOfMonth[index]}
                </WeekDate>
              </DayLink>
            ))}
      </List>
    </Wrapper>
  );
};

export default DayCalendarHead;
