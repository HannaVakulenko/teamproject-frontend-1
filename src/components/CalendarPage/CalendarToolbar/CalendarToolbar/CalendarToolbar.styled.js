import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  @media (min-width: 453px) and (max-width: 768px) {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 769px) {
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
