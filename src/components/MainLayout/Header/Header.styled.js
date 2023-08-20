import styled from 'styled-components';
import { device } from 'constants';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  outline: auto;
  align-items: flex-start;
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

export const BurgerButton = styled.button`
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

export const TitleBurgerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: none;

  @media (min-width: ${device.desktop}px) {
    height: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const GooseImg = styled.img`
  width: 64px;
  height: 60px;
  flex-shrink: 0;
`;

export const MotivationText = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  span {
    color: ${p => p.theme.mainAccentColor};
  }
`;

export const TitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
