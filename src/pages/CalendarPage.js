import { Section } from 'components/Common';
import { CalendarGrid, CalendarToolbar, WeekdayHeader } from '../components/CalendarPage/index';
import React from 'react';
import moment from 'moment';

const startDay = moment().startOf('month').startOf('week');
const CalendarPage = () => (
  <>
    <CalendarToolbar />

    <Section>
      <WeekdayHeader />
      <CalendarGrid startDay={startDay} />
    </Section>
  </>
);

export default CalendarPage;
