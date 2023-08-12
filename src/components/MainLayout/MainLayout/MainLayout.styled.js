import styled from 'styled-components';

export const MainLayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.mainBGColor};
`;

export const MainStyled = styled.div`
  height: 100%;
`;

export const MainAndHeaderWrapper = styled.div`
  /* padding: 24px 20px 40px; */
  padding: 64px 20px 40px;
  width: 100%;
  height: 100vh;
`;
