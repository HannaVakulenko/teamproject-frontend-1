import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: ${device.desktop}px) {
    row-gap: 18px;
    padding-top: 28px;
    padding-bottom: 32px;
  }
`;