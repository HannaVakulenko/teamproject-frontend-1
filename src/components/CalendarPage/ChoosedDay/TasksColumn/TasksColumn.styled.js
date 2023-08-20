import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.50);
  background-color: ${p => p.theme.secondaryBgColor};

  @media screen and (max-width: ${device.tablet - 1}px) {
    min-width: 100%;
  };
  @media screen and (min-width: ${device.tablet}px) {
    min-width: 344px;
  };
  @media screen and (min-width: 1128px) {
    width: 33%;
  };
`;
