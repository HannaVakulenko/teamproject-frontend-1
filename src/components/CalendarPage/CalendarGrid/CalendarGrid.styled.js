import { styled } from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid #84828a;
  border-radius: 8px;

  @media (max-width: 375px) {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    height: 470px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    // grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    // grid-template-columns: repeat(7, minmax(0, 1fr));
  }
`;

export const CellWrapper = styled.div`
  @media (max-width: 375px) {
    border: 1px solid #84828a;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    border: 1px solid #ddd;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    color: #84828a;
  }
`;
export const RowInCell = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: center;
  @media (max-width: 375px) {
  }

  @media (min-width: 376px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;
export const DayWrapper = styled.div`
  padding: 4px;

  @media (max-width: 375px) {
  }
  @media (min-width: 376px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;
export const WeekdayHeader = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  border: 1px solid #84828a;
  border-radius: 8px;

  @media (max-width: 375px) {
    font-size: 14px;
    height: 50px;
    align-items: center;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 18px;
  }
`;
export const Weekday = styled.div`
  @media (max-width: 375px) {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #3e85f3;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 18px;
  }
`;
export const Workday = styled.div`
  @media (max-width: 375px) {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #343434;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 18px;
  }
`;
