import styled from 'styled-components';

import { device } from 'constants';

export const StatisticSection = styled.section`
  background-color: ${p => p.theme.secondaryBgColor};
  border-radius: 16px;
  padding: 28px 14px;
  /* height: 100%; */

  @media screen and (min-width: ${device.tablet}px) {
    padding: 132px 32px;
  }
  @media screen and (min-width: ${device.desktop}px) {
    padding: 134px 113px;
  }
`;
export const WrapperSideBar = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: ${device.tablet}px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
`;


export const Zaglushka = styled.div`
  height: 34px;
  background-color: orangered;
  

  @media screen and (min-width: ${device.tablet}px) {
    width: 218px;
  }
`;

