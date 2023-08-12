import styled from 'styled-components';
import { device } from 'constants';

export const UserInfoStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const UserPhoto = styled.div`
  width: 32px;
  height: 32px;
  background-color: #555599;
  border-radius: 44px;
  border: 1.8px solid #3e85f3;

  @media (min-width: ${device.tablet}px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserNameStyled = styled.span`
  color: #343434;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 128.571%;

  @media (min-width: ${device.tablet}px) {
    line-height: 100%;
  }
`;
