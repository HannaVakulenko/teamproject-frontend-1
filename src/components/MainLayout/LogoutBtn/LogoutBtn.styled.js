import styled from 'styled-components';
import { device } from 'constants';
const { tablet } = device;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: auto;
  margin-left: 24px;
  margin-bottom: 24px;
  width: 131px;
  height: 46px;
  padding: 16px 18px 16px 23px;
  background-color: ${p => p.theme.mainAccentColor};
  color: ${p => p.theme.buttonTextColor};
  border: none;
  border-radius: 16px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.mainAccentColorActive};
  };

  @media (min-width: ${tablet}px) {
    width: 141px;
    height: 56px;
    font-size: 18px;
  }

`;

export const IconLogout = styled.svg`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;

  @media (min-width: ${tablet}px) {
    width: 20px;
    height: 20px;
  }
`;
