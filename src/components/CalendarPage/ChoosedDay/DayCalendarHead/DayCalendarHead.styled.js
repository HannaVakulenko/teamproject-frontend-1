import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'constants';

export const Wrapper = styled.div`
  padding: 14px 18px;
  margin-bottom: 14px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.calendarDeviderColor};
  background-color: ${p => p.theme.secondaryBgColor};

  @media screen and (min-width: ${device.tablet}px) {
    padding: 10px 32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${device.desktop}px) {
    padding: 10px 46px;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DayLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 6px;

  @media screen and (min-width: ${device.tablet}px) {
    gap: 8px;
  }
`;

export const WeekDay = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.12;
  color: ${p => p.theme.secondaryTextColor};
  text-transform: uppercase;

  @media screen and (min-width: ${device.tablet}px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const WeekDate = styled.p`
  padding: 4px 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.16;
  color: ${p => p.theme.secondaryTextColor};
  border-radius: 6px;

  @media screen and (min-width: ${device.tablet}px) {
    font-size: 16px;
    line-height: 1.12;
  }

  &.current-day {
    color: #fff;
    background-color: ${p => p.theme.mainAccentColor};
  }
`;
