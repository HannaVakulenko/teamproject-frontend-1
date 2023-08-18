import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
`;

export const ButtonMonth = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 34px;
  border: none;
  border-right: ${p => p.theme.monthBorder};
  border-radius: 8px 0px 0px 8px;
  padding: 8px 16px 8px 16px;
  display: inline-flex;
  background-color: ${props =>
    props.$isActive
      ? p => p.theme.activeButtonDayMonth
      : p => p.theme.inactiveButtonDayMonth};

  color: ${props =>
    props.$isActive ? '#3E85F3' : p => p.theme.sidebarMainActiveColor};

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media (min-width: 376px) and (max-width: 768px) {
    width: 82px;
    height: 34px;

    font-size: 16px;
    line-height: 1.1;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 82px;
    height: 34px;

    font-size: 16px;
    line-height: 1.1;
  }
`;
export const ButtonDay = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 34px;
  border-radius: 0px 8px 8px 0px;
  padding: 8px 16px 8px 16px;
  display: inline-flex;
  border: none;
  background-color: ${props =>
    props.$isActive
      ? p => p.theme.activeButtonDayMonth
      : p => p.theme.inactiveButtonDayMonth};
  color: ${props =>
    props.$isActive ? '#3E85F3' : p => p.theme.sidebarMainActiveColor};

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media (min-width: 376px) and (max-width: 768px) {
    width: 82px;
    height: 34px;

    font-size: 16px;
    line-height: 1.1;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 82px;
    height: 34px;

    font-size: 16px;
    line-height: 1.1;
  }
`;
