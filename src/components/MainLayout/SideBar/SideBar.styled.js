import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'constants';
const { tablet, desktop } = device;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: ${props => (props.$isOpen ? '1' : '0')};
  transition: opacity 0.3s ease-out;
  pointer-events: ${props => (props.$isOpen ? 'auto' : 'none')};

  @media (min-width: ${device.desktop}px) {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Sidebar = styled.div`
  width: 225px;
  height: 100vh;
  background-color: ${props => props.theme.colors.whiteColor};
  transform: ${props =>
    props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 289px;
  }

  @media (min-width: ${device.desktop}px) {
    width: 289px;
    position: static;
    transform: translateX(0);
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoAndTitle = styled.nav`
  display: flex;
  align-items: center;
  margin: 24px 20px 0;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    margin: 24px 32px 0;
  }

  @media (min-width: ${device.desktop}px) {
    margin: 32px 43px 0 24px;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  font-style: normal;
  font-weight: 700;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  width: 36px;
  height: 35px;
  margin-right: 6px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 60px;
    height: 58px;
    margin-right: 6px;
  }
  @media (min-width: ${device.desktop}px) {
    font-size: 24px;
    width: 71px;
    height: 68px;
    margin-right: 10px;
  }
`;

export const LogoTitle = styled.span`
  color: ${props => props.theme.colors.blue1Color};
  font-weight: 700;
  font-size: 16px;

  @media (min-width: ${device.desktop}px) {
    font-size: 24px;
  }
`;

export const LogoSpan = styled.span`
  font-size: 16px;
  font-style: italic;
  font-weight: 700;

  @media (min-width: ${device.desktop}px) {
    font-size: 24px;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 0;
  margin-left: auto;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;
  stroke: currentColor;
  fill: none;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 34px;
    height: 34px;
  }

  @media (min-width: ${device.desktop}px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 64px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    margin-left: 32px;
    margin-top: 50px;
  }

  @media (min-width: ${device.desktop}px) {
    margin-left: 24px;
    margin-top: 32px;
  }
`;

export const NavigationList = styled.ul`
  width: 185px;
  height: 195px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 225px;
    height: 249px;
  }

  @media (min-width: ${device.tablet}px) {
    width: 241px;
    height: 249px;
  }
`;

export const Panel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.greyColor};
  margin-bottom: 24px;

  @media (min-width: ${device.tablet}px) {
    margin-bottom: 32px;
    font-size: 14px;
  }
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: end;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 18px;
  background-color: ${props =>
    props.isActive ? props.theme.colors.blue4Color : 'transparent'};
  border-radius: 8px;
  color: ${props => props.theme.colors.greyColor};
  padding: 10px 0 10px 12px;

  @media (min-width: ${device.tablet}px) {
    font-size: 16px;
    margin-bottom: 16px;
    padding: 16px 0 16px 20px;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: ${props =>
    props.isActive ? props.theme.colors.blue1Color : 'currentColor'};
  fill: none;

  @media (min-width: ${device.tablet}px) {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  color: ${props => props.theme.colors.greyColor};

  &.active {
    opacity: 100%;
    color: ${props => props.theme.colors.blue1Color};
  }

  @media (min-width: ${device.tablet}px) {
    text-decoration: none;
    font-size: 16px;
  }
`;

export const IconChart = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: ${props =>
    props.isActive ? props.theme.colors.blue1Color : 'inherit'};
  fill: ${props =>
    props.isActive
      ? props.theme.colors.blue1Color
      : props.theme.colors.greyColor};

  @media (min-width: ${device.tablet}px) {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  margin-top: auto;
  margin-left: 24px;
  margin-bottom: 24px;
  width: 141px;
  height: 56px;
  padding: 16px 23px 16px 23px;
  background-color: ${props => props.theme.colors.blue1Color};
  color: ${props => props.theme.colors.whiteColor};
  border: none;
  border-radius: 16px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.blue3Color};
  }
`;

export const IconLogout = styled.svg`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;

  @media (min-width: ${device.tablet}px) {
    width: 20px;
    height: 20px;
  }
`;
