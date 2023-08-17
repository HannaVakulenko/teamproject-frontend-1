import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  @media (min-width: 376px) and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`;

export const ContainerSecond = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  @media (min-width: 376px) and (max-width: 768px) {
  }
`;
