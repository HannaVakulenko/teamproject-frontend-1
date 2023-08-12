import styled from 'styled-components';
import { device } from 'constants';

export const ContainerMainPage = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${device.mobile}px) {
    width: 375px;
  }
  @media (min-width: ${device.tablet}px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: ${device.desktop}px) {
    width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;

export const ListDescription = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const ItemDescription = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media (min-width: ${device.tablet}px) {
    gap: 48px;
  }
  @media (min-width: ${device.desktop}px) {
    width: 1107px;
    flex-direction: row;
    align-items: center;
    gap: 228px;
    &:nth-child(2) {
      flex-direction: row-reverse;
      align-items: center;
      margin-right: auto;
    }
  }
`;

export const WrappInfo = styled.div`
  @media (min-width: ${device.tablet}px) {
    width: 275px;
  }
  @media (min-width: ${device.desktop}px) {
  }
`;

export const OddNumbered = styled.div`
  @media (min-width: ${device.tablet}px) {
    margin-left: auto;
  }
`;

export const Number = styled.p`
  margin-bottom: 14px;
  color: ${p => p.theme.colors.blue1Color};
  font-size: 80px;
  font-weight: 700;
  line-height: 100%; /* 80px */
  letter-spacing: -4px;

  @media (min-width: ${device.tablet}px) {
    font-size: 104px;
  }
`;

export const TitleDescription = styled.h2`
  display: inline-block;
  margin-bottom: 8px;
  padding: 6px 18px;
  color: ${p => p.theme.colors.blue1Color};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
  border-radius: 44px;
  background: ${p => p.theme.colors.blue2Color};

  @media (min-width: ${device.tablet}px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const AfterTitleDescription = styled.p`
  color: #171820;
  text-shadow: 0px 9px 58px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;

  @media (min-width: ${device.tablet}px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const TextDescription = styled.p`
  margin-top: 14px;
  color: rgba(17, 17, 17, 0.9);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  @media (min-width: ${device.tablet}px) {
    margin-top: 24px;
  }
`;

export const ImgDescription = styled.img`
  @media (min-width: ${device.tablet}px) {
    width: 704px;
  }
  @media (min-width: ${device.desktop}px) {
    width: 604px;
  }
`;
