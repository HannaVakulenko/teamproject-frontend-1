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
  opacity: ${p => (p.$isOpen ? '1' : '0')};
  transition: opacity 0.3s ease-out;
  pointer-events: ${p => (p.$isOpen ? 'auto' : 'none')};

  @media (min-width: ${desktop}px) {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Sidebar = styled.div`
  width: 225px;
  height: 100vh;
  background-color: ${p => p.theme.sidebarBGColor};
  transform: ${p => (p.$isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 289px;
    padding: 24px 32px;
  }

  @media (min-width: ${desktop}px) {
    width: 289px;
    padding: 32px 24px 24px;
    position: static;
    transform: translateX(0);
  }
`;

export const TopSection = styled.div`
  display: flex;
  gap: 64px;
  flex-direction: column;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    gap: 50px;
  }

  @media (min-width: ${desktop}px) {
    gap: 32px;
  }
`;

export const LogoAndTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (min-width: ${desktop}px) {
    gap: 10px;
  }
`;

export const Logo = styled.img`
  font-style: normal;
  font-weight: 700;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  width: 36px;
  height: 35px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 60px;
    height: 58px;
  }
  @media (min-width: ${desktop}px) {
    font-size: 24px;
    width: 71px;
    height: 68px;
  }
`;

export const LogoTitle = styled.span`
  color: ${p => p.theme.sidebarLogoTextColor};
  font-weight: 700;
  font-size: 16px;

  @media (min-width: ${desktop}px) {
    font-size: 24px;
  }
`;

export const LogoSpan = styled.span`
  font-size: 16px;
  font-style: italic;
  font-weight: 700;

  @media (min-width: ${desktop}px) {
    font-size: 24px;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.secondaryTextColor};
  stroke: currentColor;
  height: 100%;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
  }

  @media (min-width: ${desktop}px) {
    display: none;
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 34px;
    height: 34px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    gap: 32px;
  }
`;

export const Panel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: red;
  color: ${p => p.theme.sidebarPanelColor};

  @media (min-width: ${tablet}px) {
    font-size: 14px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 185px;

  /* тут вказуємо, що по замовчуванню іконка фарбується через stroke, і лише третя - через fill */
  li svg {
    fill: none;
    stroke: currentColor;
  }

  li:nth-child(3) svg {
    fill: currentColor;
    stroke: none;
  }

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    gap: 16px;
    width: 225px;
  }

  @media (min-width: ${tablet}px) {
    width: 241px;
  }
`;

export const NavItemName = styled.span`
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;

  @media (min-width: ${tablet}px) {
    text-decoration: none;
    font-size: 16px;
  }
`;

export const NavigationItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;

  background-color: ${p =>
    p.isActive ? p.theme.secondaryAccentColorActive : 'transparent'};
  color: ${p =>
    p.isActive ? p.theme.sidebarMainActiveColor : p.theme.sidebarTextColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.secondaryAccentColorActive};
    color: ${p => p.theme.sidebarMainActiveColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  @media (min-width: ${tablet}px) {
    padding: 16px 0 16px 20px;
    gap: 10px;
    font-size: 16px;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;

  @media (min-width: ${tablet}px) {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }
`;
