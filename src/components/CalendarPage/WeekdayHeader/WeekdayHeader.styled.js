import styled from 'styled-components';
export const LargeWeekday = styled.div`
  color: ${props => (props.$weekend ? '#3E85F3' : '#343434')};

  @media (max-width: 375px) {
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    text-transform: uppercase;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    text-transform: uppercase;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    text-transform: uppercase;
  }
`;

export const SmallWeekday = styled.div`
  color: ${props => (props.$weekend ? '#3E85F3' : '#343434')};
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
    text-transform: uppercase;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    text-transform: uppercase;
  }
`;

export const WeekWrapper = styled.div`
  @media (max-width: 375px) {
    display: flex;
    justify-content: space-around;
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-radius: 8px;
    background-color: white;
    max-width: 335px;
    padding: 16px;
    margin-bottom: 14px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-radius: 8px;
    background-color: white;
    max-width: 704px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 40px;
    padding-right: 40px;
    margin-bottom: 18px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-radius: 8px;
    background-color: white;
    max-width: 1087px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 60px;
    padding-right: 60px;
    margin-bottom: 15px;
  }
`;
