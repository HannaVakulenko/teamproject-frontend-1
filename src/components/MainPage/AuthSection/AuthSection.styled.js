import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'constants';

export const WrappAuthSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 20px;
  background-color: ${p => p.theme.mainAccentColor};
`;

export const ImgHero = styled.img`
  @media (min-width: ${device.tablet}px) {
    width: 150px;
  }
`;

export const HeroTitle = styled.h1`
  margin-top: 2px;
  color: #fff;
  text-shadow: 0px 9px 58px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 44px;
  font-weight: 700;
  line-height: 1.09;

  @media (min-width: ${device.tablet}px) {
    font-size: 100px;
    line-height: 1.3;
  }
  @media (min-width: ${device.desktop}px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const WrapLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${device.tablet}px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: baseline;
    gap: 24px;
  }
`;

export const LoginNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 131px;
  height: 46px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 32px;

  border-radius: 16px;
  background: ${p => p.theme.secondaryBgColor};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: ${p => p.theme.mainAccentColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.28px;

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #cae8ff;
    box-shadow: -2px -2px 5px rgba(136, 165, 191, 0.48),
      2px 2px 5px rgba(136, 165, 191, 0.48);
  }
`;

export const RegisterNavLink = styled(NavLink)`
  display: block;
  margin-top: 16px;
  color: ${p => p.theme.secondaryBgColor};
  text-shadow: 0px 9px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    text-shadow: 2px 2px 4px ${p => p.theme.secondaryBgColor};
  }
`;

export const IconLogin = styled.svg`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;
`;
