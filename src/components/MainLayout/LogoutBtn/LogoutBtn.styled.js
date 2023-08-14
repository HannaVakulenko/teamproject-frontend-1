import styled from 'styled-components';
import { device } from 'constants';
const { tablet } = device;

export const LogoutButton = styled.button`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  padding: 14px;
  width: 131px;
  background-color: ${p => p.theme.mainAccentColor};
  color: ${p => p.theme.buttonTextColor};
  border: none;
  border-radius: 16px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.mainAccentColorActive};
  }

  @media (min-width: ${tablet}px) {
    gap: 11px;
    padding: 16px;
    width: 141px;
    font-size: 18px;
  }
`;

export const IconLogout = styled.svg`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  stroke: currentColor;
  fill: none;

  @media (min-width: ${tablet}px) {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
  }
`;
