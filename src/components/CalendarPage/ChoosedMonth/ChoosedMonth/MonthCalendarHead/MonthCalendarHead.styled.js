import styled from 'styled-components';

export const LargeWeekday = styled.div`
  color: ${props => (props.$weekend ? '#3E85F3' : '#343434')};
  font-size: 16px;
  font-weight: 600;
  line-height: 112.5%;
  text-transform: uppercase;

  @media (min-width: 769px) {
    font-size: 18px;
  }
`;

export const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  background-color: white;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 14px;

  @media (max-width: 375px) {
    max-width: 335px;
    padding: 16px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    max-width: 704px;
    padding-left: 40px;
    padding-right: 40px;
    margin-bottom: 18px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    max-width: 1087px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (min-width: 1441px) {
    margin-bottom: 15px;
  }
`;
