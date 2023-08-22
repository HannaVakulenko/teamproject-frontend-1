import React from 'react';
import {
  LargeWeekday,
  WeekWrapper,
  WeekDayWrapper,
} from './MonthCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const MonthCalendarHead = () => {
  const { t } = useTranslation();

  const isTabletOrDesktop = useMediaQuery({ minWidth: 376 });

  const monL = t('days.monL');
  const tueL = t('days.tueL');
  const wedL = t('days.wedL');
  const thuL = t('days.thuL');
  const friL = t('days.friL');
  const satL = t('days.satL');
  const sunL = t('days.sunL');

  const monS = t('days.monS');
  const tueS = t('days.tueS');
  const wedS = t('days.wedS');
  const thuS = t('days.thuS');
  const friS = t('days.friS');
  const satS = t('days.satS');
  const sunS = t('days.sunS');

  return (
    <WeekWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? monL : monS}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? tueL : tueS}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? wedL : wedS}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? thuL : thuS}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={false}>
          {isTabletOrDesktop ? friL : friS}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={true}>
          {isTabletOrDesktop ? satL : satS}
        </LargeWeekday>
      </WeekDayWrapper>
      <WeekDayWrapper>
        <LargeWeekday $weekend={true}>
          {isTabletOrDesktop ? sunL : sunS}
        </LargeWeekday>
      </WeekDayWrapper>
    </WeekWrapper>
  );
};

export default MonthCalendarHead;
