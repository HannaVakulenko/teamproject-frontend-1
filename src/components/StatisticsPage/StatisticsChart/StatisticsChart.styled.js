import styled from 'styled-components';

import { device } from 'constants';

export const ChartContainer = styled.div`
  width: 307px;
  height: 413px;
  border-radius: 20px;
  border: 0.8px solid #e3f3ff;
  padding: 40px 14px 40px 14px;
  color: #343434;

  @media screen and (min-width: ${device.tablet}px) {
    width: 640px;
    height: 424px;
    border-radius: 29px;
    padding: 32px;
  }

  @media screen and (min-width: ${device.desktop}px) {
    width: 860px;
    height: 440px;
    padding: 40px;
  }
`;
