import { styled } from 'styled-components';
import { device } from 'constants';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid ${p => p.theme.calendarDeviderColor};
  border-radius: 8px;
  background-color: ${p => p.theme.secondaryBgColor};
  flex-grow: 1;
  flex-shrink: 1;
`;

export const CellWrapper = styled.div`
  border: 1px solid ${p => p.theme.calendarDeviderColor};
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 47.85px;
  cursor: pointer;
`;

export const DayWrapper = styled.div`
  box-sizing: border-box;
  align-self: flex-end;
  height: 22px;
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${p => (p.$today ? p.theme.buttonTextColor : 'inherit')};
  background-color: ${p =>
    p.$today ? p.theme.mainAccentColor : 'transparent'};
  border-radius: ${p => (p.$today ? '8px' : '0')};
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: 0em;
`;

const getColor = priority => {
  switch (priority) {
    case 'low':
      return '#3e85f3';
    case 'medium':
      return '#f3b249';
    default:
      return '#ea3d65';
  }
};

const getBackground = priority => {
  switch (priority) {
    case 'low':
      return '#ceeefd';
    case 'medium':
      return '#fcf0d4';
    default:
      return '#ffd2dd';
  }
};

export const TaskContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 1px;
  overflow: hidden;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const TaskContainer = styled.div`
  display: flex;
`;

export const Task = styled.div`
  font-size: 10px;

  width: 100%;
  border-radius: 8px;
  font-weight: 700;
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 8px;

  color: ${p => getColor(p.$priority)};
  background: ${p => getBackground(p.$priority)};

  @media screen and (min-width: ${device.tablet}px) {
    padding: 4px 12px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.25;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 14px;
    line-height: 1.25;
    /* height: 26px; */
  }

  @media (min-width: 1441px) {
    font-size: 16px;
    line-height: 1.25;
    /* height: 26px; */
  }
`;
