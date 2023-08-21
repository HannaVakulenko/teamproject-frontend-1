import styled from 'styled-components';
import { device } from 'constants';

export const WeekWrapper = styled.div`
  display: flex;
  border: 1px solid ${p => p.theme.calendarDeviderColor};
  border-radius: 8px;
  background-color: ${p => p.theme.secondaryBgColor};
  margin-bottom: 14px;
`;

export const WeekDayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: ${device.tablet}px) {
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

export const LargeWeekday = styled.div`
  color: ${p =>
    p.$weekend ? p.theme.mainAccentColor : p.theme.secondaryTextColor};
  font-size: 16px;
  font-weight: 600;
  line-height: 112.5%;
  text-transform: uppercase;
`;
