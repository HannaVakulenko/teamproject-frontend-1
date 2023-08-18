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

export const WrapperMenu = styled.div`
  width: 147px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 8px;
  background: ${p => p.theme.secondaryBgColor};
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  background-color: transparent;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${p => p.theme.mainAccentColorActive};
  }

  &:hover svg {
    stroke: ${p => p.theme.mainAccentColorActive};
  }
`;
