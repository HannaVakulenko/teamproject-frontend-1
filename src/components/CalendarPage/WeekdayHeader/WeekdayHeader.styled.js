import styled from 'styled-components';

export const LargeWeekday = styled.div`
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

  @media (min-width: 769px) {
    font-size: 18px;
  }
`;

export const SmallWeekday = styled(LargeWeekday)`
  @media (max-width: 768px) {
    display: none;
  }
`;
