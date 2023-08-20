import { startOfWeek, eachDayOfInterval, format, addDays, isSameDay, parseISO } from 'date-fns';
import { WeekDay, WeekDate, Item, List, Wrapper } from './DayCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

const DayCalendarHead = () => {
  const { currentDay } = useParams();
  const result = parseISO(currentDay, 'yyyy-MM-dd');

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const startDay = startOfWeek(result, { weekStartsOn: 1 }); // 1 - Monday
  const lastDayOfWeek = addDays(startOfWeek(result, { weekStartsOn: 1 }), 6) // 6 - Sunday

  const days = eachDayOfInterval({
    start: startDay,
    end: lastDayOfWeek
  });
  const daysOfWeek = days.map(day => format(day, 'E'));
  const daysOfWeekForMobile = days.map(day => format(day, 'EEEEE'));
  const daysOfMonth = days.map(day => format(day, 'd'));

  return (
    <Wrapper>
      <List>
        {isMobile
          ? daysOfWeekForMobile.map((day, index) => (
            <Item key={index}>
              <WeekDay>{day}</WeekDay>
              <WeekDate className={
                isSameDay(days[index], result)
                  ? 'current-day'
                  : ''
                }
              >
                {daysOfMonth[index]}
              </WeekDate>
            </Item>
          ))
          : daysOfWeek.map((day, index) => (
            <Item key={index}>
              <WeekDay>{day}</WeekDay>
              <WeekDate className={
                isSameDay(days[index], result)
                  ? 'current-day'
                  : ''
                }
              >
                {daysOfMonth[index]}</WeekDate>
            </Item>
          ))}
      </List>
    </Wrapper>
  );
};

export default DayCalendarHead;
