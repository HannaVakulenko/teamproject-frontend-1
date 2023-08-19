import styled from 'styled-components';

import { device } from 'constants';

export const WrapperLegend = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  /* margin-bottom: 40px; */

  gap: 14px;
  width: 199px;
  height: 18px;

  @media screen and (min-width: ${device.tablet}px) {
    gap: 20px;
    margin-bottom:0;
    
  }
`;
export const WrapperInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;



export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
export const CircleDay = styled(Circle)`
  background-color: #ffd2dd;
`;
export const CircleMonth = styled(Circle)`
  background-color: #3e85f3;
`;

export const TextLegend = styled.p`
  color: ${p => p.theme.secondaryTextColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: ${device.tablet}px) {
   
       font-size: 16px;
       line-height: 1.12;
  }
`;
