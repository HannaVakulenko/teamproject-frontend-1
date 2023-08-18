import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 18px;
  padding-left: 14px;
  border-radius: 8px;
  background-color: ${p => p.theme.mainBGColor};
  @media screen and (max-width: ${device.tablet - 1}px) {
    height: 108px;
  };
  @media screen and (min-width: ${device.tablet}px) {
    height: 112px;
  };
`;

// Стыли для текста в карточке задачи, максимальное к-во символов 250. Нужно обрезать текст и добавить многоточие
export const Text = styled.p`
  width: 272px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;

  @media screen and (min-width: ${device.tablet}px) {
    margin-top: 32px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const AvatarImage = styled.img`
  border-radius: 32px;
  border: 1.8px solid ${p => p.theme.mainAccentColor};
`;

export const Badge = styled.span`
  padding: 4px 12px;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;
  color:  ${p => p.theme.mainBGColor};
  border-radius: 4px;

  &[data-priority="low"] {
    background-color: #72C2F8;
  };
  &[data-priority="medium"] {
    background-color: #F3B249;
  };
  &[data-priority="high"] {
    background-color: #EA3D65;
  };
`;