import styled from 'styled-components';
import { device } from 'constants';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #559955;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;

  @media (min-width: ${device.desktop}px) {
    display: none;
  }
`;

export const ThemeUserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ControllWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
