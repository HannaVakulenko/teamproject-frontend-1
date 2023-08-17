import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
`;

export const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;

  &:hover svg {
    stroke: ${p => p.theme.mainAccentColorActive};
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: currentColor;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
