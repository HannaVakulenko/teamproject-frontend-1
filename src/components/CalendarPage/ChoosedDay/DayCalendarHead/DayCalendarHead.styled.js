import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  padding: 14px 18px;
  margin-bottom: 14px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.50);
  background-color: ${p => p.theme.secondaryBgColor};

  @media screen and (min-width: ${device.tablet}px) {
    padding: 10px 32px;
    margin-bottom: 16px;
  };

  @media screen and (min-width: ${device.desktop}px) {
    padding: 10px 46px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 19px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;