import styled from 'styled-components';

export const LargeWeekday = styled.div`
  color: ${props => (props.isWeekend ? '#3E85F3' : '#343434')};
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  // color: #3e85f3;
  font-size: 18px;
  text-transform: uppercase;
  @media (max-width: 375px) {
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    // color: #3e85f3;
    font-size: 18px;
    text-transform: uppercase;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    // color: #3e85f3;
    font-size: 18px;
    text-transform: uppercase;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
  }
`;

export const SmallWeekday = styled.div`
  color: ${props => (props.isWeekend ? '#343434' : '#343434')};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 375px) {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    // color: #343434;
    text-transform: uppercase;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    color: ${props => (props.isWeekend ? '#343434' : '#343434')};
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    // color: #343434;
    text-transform: uppercase;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 18px;
  }
`;

// WeekWrapper;
export const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  background-color: white;
  @media (max-width: 375px) {
    display: flex;
    justify-content: space-around;
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-radius: 8px;
    background-color: white;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-radius: 8px;
    background-color: white;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-radius: 8px;
    background-color: white;
  }
`;
