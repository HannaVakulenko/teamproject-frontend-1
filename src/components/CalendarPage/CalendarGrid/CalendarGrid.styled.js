import { styled } from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid #84828a;
  border-radius: 8px;
  width: 475px;
  margin: 0 auto;

  @media (max-width: 375px) {
    width: 100%;
    height: 475px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    width: 704px;
    height: 720px;
  }
`;

export const CellWrapper = styled.div`
  position: relative;
  border: 1px solid #ddd;

  @media (max-width: 375px) {
  }
  @media (min-width: 376px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1440px) {
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
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 375px) {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 6px;
    margin-left: 6px;
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
  margin-bottom: 14px;
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
export const Weektenday = styled.div`
  @media (max-width: 375px) {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #3e85f3;
    margin-left: 18px;
    margin-right: 18px;
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
    text-transform: uppercase;
    margin-left: 18px;
    margin-right: 18px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 18px;
  }
`;
