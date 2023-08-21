import styled from 'styled-components';

import { device } from 'constants';


export const ContainerSecondWrapper = styled.div`
  width: 100%;
  height: 413px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.8px solid ${p => p.theme.chartBorderColor};
  color: ${p => p.theme.secondaryTextColor};
  border-radius: 20px;

  @media screen and (min-width: ${device.tablet}px) {
    height: 424px;
    border-radius: 29px;
  }
  @media screen and (min-width: ${device.desktop}px) {
    height: 440px;
  }
`;

export const ContainerFirstWrapper = styled.div`
  width: calc(100% - 28px);
  height: calc(100% - 80px);
 

  @media screen and (min-width: ${device.tablet}px) {
    width: calc(100% - 64px);
    height: calc(100% - 64px);

    @media screen and (min-width: ${device.desktop}px) {
      width: calc(100% - 80px);
      height: calc(100% - 80px);
    }
  }
`;
