import { styled } from 'styled-components';
import { device } from 'constants';

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  color: ${p => p.theme.mainTextColor};
  background-color: ${p => p.theme.secondaryAccentColorActive};
  border-radius: 16px;
  border-radius: 8px;
  border: 1px dashed ${p => p.theme.sidebarMainActiveColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: ${device.tablet}px) {
    margin-top: 32px;
  }

  &:hover {
    background-color: #cae8ff;
  }
`;

export const Icon = styled.svg`
  stroke: currentColor;
`;
