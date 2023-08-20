import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;

  @media screen and (min-width: ${device.desktop}px) {
    gap: 27px;
    overflow-y: initial;
  }
`;