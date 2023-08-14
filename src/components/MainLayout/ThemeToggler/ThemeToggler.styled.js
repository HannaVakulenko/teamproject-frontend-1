import styled from 'styled-components';
import { device } from 'constants';

export const ThemeToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.mainAccentColor};
  fill: currentColor;

  @media (min-width: ${device.tablet}px) {
    width: 32px;
    height: 32px;
  }
`;
