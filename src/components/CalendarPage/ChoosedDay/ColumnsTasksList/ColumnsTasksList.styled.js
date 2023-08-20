import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  height: 326px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  padding-bottom: 24px;
  overflow-y: scroll;

  @media screen and (min-width: ${device.tablet}px) {
    height: 372px;
    row-gap: 18px;
    padding-bottom: 0px;
  }
`;