import styled from 'styled-components';
import { device } from 'constants';

export const MainLayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const MainStyled = styled.div`
  height: 100%;
`;

export const MainAndHeaderWrapper = styled.div`
  padding: 24px 20px 40px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
    align-items: center; 
  gap: 64px;

  @media (min-width: ${device.tablet}px) {
    padding: 24px 32px 18px;
  }

  @media (min-width: ${device.tablet}px) {
    padding: 40px 32px 32px;
    gap: 32px;
  }
`;