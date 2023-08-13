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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 289px;
  }

  @media (min-width: ${desktop}px) {
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

  @media (min-width: ${desktop}px) {
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
  @media (min-width: ${desktop}px) {
    font-size: 24px;
    width: 71px;
    height: 68px;
    margin-right: 10px;
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
  color: ${p => p.theme.secondaryTextColor};
  stroke: currentColor;
  fill: currentColor;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 34px;
    height: 34px;
  }

  @media (min-width: ${desktop}px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  // display: flex;
  display: flow;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-top: 64px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    margin-left: 32px;
    margin-top: 50px;
  }

  @media (min-width: ${desktop}px) {
    margin-left: 24px;
    margin-top: 32px;
  }
`;

export const Panel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${p => p.theme.sidebarPanelColor};

  @media (min-width: ${tablet}px) {
    font-size: 14px;
  }
`;

export const NavigationList = styled.ul`
  width: 185px;
  height: 195px;
  margin-top: 24px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    margin-top: 32px;
    width: 225px;
    height: 249px;
  }

  @media (min-width: ${tablet}px) {
     margin-top: 32px;
    width: 241px;
    height: 249px;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  color: ${p => p.theme.sidebarTextColor};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    opacity: 100%;
    color: ${p => p.theme.sidebarMainActiveColor};
  };

  @media (min-width: ${device.tablet}px) {
    text-decoration: none;
    font-size: 16px;
  }
`;

export const IconChart = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: ${p => (p.isActive === p.theme.mainAccentColor)};
  fill: ${p =>
  p.isActive ? p.theme.sidebarMainActiveColor : p.theme.sidebarTextColor};

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1),
              fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
        
  @media (min-width: ${tablet}px) {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: end;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 18px;
  background-color: ${p =>
    p.isActive ? p.theme.secondaryAccentColorActive : 'transparent'};
  border-radius: 8px;
  color: ${p => p.theme.sidebarTextColor};
  padding: 10px 0 10px 12px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
              color 250ms cubic-bezier(0.4, 0, 0.2, 1);
              
  &:hover,
  &:focus {
    background-color: ${p => p.theme.secondaryAccentColorActive};
    color: ${p => p.theme.sidebarMainActiveColor};
    cursor: pointer;

    ${NavigationLink} {
      color: ${p => p.theme.sidebarMainActiveColor};
    };

     ${IconChart} {
      fill: ${p => p.theme.sidebarMainActiveColor};
    }
  };

  @media (min-width: ${tablet}px) {
    font-size: 16px;
    margin-bottom: 16px;
    padding: 16px 0 16px 20px;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: ${p => (p.isActive ? p.theme.sidebarMainActiveColor : 'currentColor')};
  fill: none;

  @media (min-width: ${tablet}px) {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;
