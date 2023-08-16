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
    padding-right: 4px;
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
  padding: 4px 6px;

  color: ${props => (props.$today ? '#FFFFFF' : '#343434')};
  background-color: ${props => (props.$today ? '#3E85F3' : 'transparent')};
  border-radius: ${props => (props.$today ? '6px' : '0')};

  @media (max-width: 375px) {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
    padding: 4px 6px;
    color: ${props => (props.$today ? '#FFFFFF' : '#343434')};
    background-color: ${props => (props.$today ? '#3E85F3' : 'transparent')};
    border-radius: ${props => (props.$today ? '6px' : '0')};
  }
  @media (min-width: 376px) and (max-width: 768px) {
    padding: 4px 8px;
    color: #343434;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    color: ${props => (props.$today ? '#FFFFFF' : '#343434')};
    background-color: ${props => (props.$today ? '#3E85F3' : 'transparent')};
    border-radius: ${props => (props.$today ? '8px' : '0')};
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 4px 8px;
    color: #343434;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    text-transform: uppercase;
    color: ${props => (props.$today ? '#FFFFFF' : '#343434')};
    background-color: ${props => (props.$today ? '#3E85F3' : 'transparent')};
    border-radius: ${props => (props.$today ? '8px' : '0')};
  }
`;
