import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${device.tablet}px) {
    margin-bottom: 28px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;

  @media screen and (min-width: ${device.tablet}px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  background-color: transparent;
  border: none;

  &:hover svg {
    stroke: ${p => p.theme.mainAccentColorActive};
  };
`;

export const Icon = styled.svg`
  fill: none;
  color: ${p => p.theme.mainTextColor};
  stroke: currentColor;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;