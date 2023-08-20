import styled from 'styled-components';
import { device } from 'constants';

export const StyledMainTitle = styled.h1`
  @media (min-width: ${device.desktop}px) {
    /* width: 143px; */
    height: 32px;
    text-shadow: 0px 9.4px 57.69px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
`;
