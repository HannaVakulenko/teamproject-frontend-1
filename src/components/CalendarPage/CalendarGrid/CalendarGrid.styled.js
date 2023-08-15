import { styled } from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  background-color: white;

  @media (max-width: 375px) {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    max-width: 335px;
    height: 470px;
    border-radius: 8px;
    background-color: white;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    // grid-template-columns: repeat(7, minmax(0, 1fr));
    max-width: 704px;
    height: 720px;
    border-radius: 8px;
    background-color: white;
  }
  @media (min-width: 769px) and (max-width: 1440px) {
    max-width: 1087px;
    height: 625px;
    border-radius: 8px;
    background-color: white;
  }
`;

export const CellWrapper = styled.div`
  border: 1px solid rgba(220, 227, 229, 0.5);
  padding-top: 8px;
  padding-right: 4px;

  @media (max-width: 375px) {
    padding-top: 8px;
    padding: 4 px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    padding-top: 14px;
    padding: 14px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding-top: 14px;
    padding: 14px;
  }
`;
export const RowInCell = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-end'};
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
  text-align: center;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  text-transform: uppercase 

  @media (max-width: 375px) {
      font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  text-transform: uppercase 
    padding-bottom: 4px;
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 4px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    color: #343434;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; 
    text-transform: uppercase;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    color: #343434;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; 
    text-transform: uppercase;
  }
`;
export const WeekdayHeader = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  text-align: center;
  margin-bottom: 14px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  background-color: white;

  @media (max-width: 375px) {
    font-size: 14px;
    height: 50px;
    align-items: center;
    background-color: white;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 16px;
    height: 46px;
    align-items: center;
    border: 1px solid rgba(220, 227, 229, 0.5);
    background-color: white;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    border: 1px solid rgba(220, 227, 229, 0.5);
    height: 46px;
    align-items: center;
    color: #343434;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-transform: uppercase;
    background-color: white;
    // padding-right: 60px;
    // padding-left: 60px;
    // padding-top: 14px;
    // padding-bottom: 14px;
    // звернути на це увагу коли будуть додаватись 3 букви в назвах днів тижня.
  }
`;
export const Weektenday = styled.div`
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #3e85f3;
  text-transform: uppercase;

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
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #343434;
    text-transform: uppercase;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 18px;
  }
`;
