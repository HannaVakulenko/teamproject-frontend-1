import styled from 'styled-components';
import { device } from 'constants';

export const UserInfoStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (min-width: ${device.tablet}px) {
    gap: 14px;
  }
`;

export const UserPhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid;
  border-color: ${p => p.theme.mainAccentColor};
  @media (min-width: ${device.tablet}px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;

export const UserNameStyled = styled.span`
  color: ${p => p.theme.secondaryTextColor};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  
  @media (min-width: ${device.tablet}px) {
    font-size: 18px;
    line-height: 100%;
  }
`;
