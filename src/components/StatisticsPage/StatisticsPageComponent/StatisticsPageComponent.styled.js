import styled from 'styled-components';

import { device } from 'constants';

export const StatisticSection = styled.section`
  background-color: ${p => p.theme.secondaryBgColor};
  border-radius: 16px;
  padding: 28px 14px;
  height: 100%;

  @media screen and (min-width: ${device.tablet}px) {
    padding: 132px 32px;
  }
  @media screen and (min-width: ${device.desktop}px) {
    padding: 134px 113px;
  }
`;

export const Zaglushka = styled.div`
  height: 68px;
  background-color: orangered;
  margin-bottom: 40px;
`;
