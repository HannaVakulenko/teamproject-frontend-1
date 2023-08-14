import styled from 'styled-components';
import { device } from 'constants';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ControllWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (min-width: ${device.tablet}px) {
    gap: 24px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  color: inherit;
  fill: currentColor;

  @media (min-width: ${device.tablet}px) {
    width: 34px;
    height: 34px;
  }

  @media (min-width: ${device.desktop}px) {
    display: none;
  }
`;

export const ThemeUserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: ${device.tablet}px) {
    gap: 14px;
  }
`;

export const Icon = styled.svg`
width: 24px;
height: 24px;
stroke: currentColor;
fill: currentColor;

@media (min-width: ${device.tablet}px) {
  width: 34px;
  height: 34px;
  }
`;
