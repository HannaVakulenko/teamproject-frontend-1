import { Backdrop, Sidebar, TopSection, LogoAndTitle, LogoLink,  Logo,  LogoTitle,  LogoSpan, CloseButton, Navigation, NavigationList, Panel, NavigationItem, Icon, NavigationLink, IconChart,  LogoutButton, IconLogout } from './SideBar.styled';
import logoMob1x from '../../../assets/images/logo-mob-1x.png';
import logoMob1xw from '../../../assets/images/404-mob-1x.webp';
import logoMob2x from '../../../assets/images/logo-mob@2x.png';
import logoMob2xw from '../../../assets/images/404-mob@2x.webp';
import logoMob3x from '../../../assets/images/logo-mob@3x.png';
import logoMob3xw from '../../../assets/images/404-mob@3x.webp';
import logoTabl1x from '../../../assets/images/logo-tabl-1x.png';
import logoTabl1xw from '../../../assets/images/logo-tabl-1x.webp';
import logoTabl2x from '../../../assets/images/logo-tabl@2x.png';
import logoTabl2xw from '../../../assets/images/logo-tabl@2x.webp';
import logoTabl3x from '../../../assets/images/logo-tabl@3x.png';
import logoTabl3xw from '../../../assets/images/logo-tabl@3x.webp';
import logoDesk1x from '../../../assets/images/logo-desk-1x.png';
import logoDesk1xw from '../../../assets/images/logo-desk-1x.webp';
import logoDesk2x from '../../../assets/images/logo-desk@2x.png';
import logoDesk2xw from '../../../assets/images/logo-desk@2x.webp';
import logoDesk3x from '../../../assets/images/logo-desk@3x.png';
import logoDesk3xw from '../../../assets/images/logo-desk@3x.webp';
import icon from 'assets/icons/symbol-defs.svg';
import {  useLocation } from 'react-router-dom';

const SideBar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const closeSidebar = () => {
    toggleSidebar(false);
  };

  return (
  <>
      <Backdrop $isOpen={isOpen} onClick={closeSidebar} />
      <Sidebar $isOpen={isOpen}>
        <TopSection>
        <LogoAndTitle>
            <LogoLink to="/">
              <Logo
                srcSet={`${logoMob1xw} 1w, ${logoMob1x} 1x,
                        ${logoMob2xw} 2w, ${logoMob2x} 2x,
                        ${logoMob3xw} 3w, ${logoMob3x} 3x,
                        ${logoTabl1xw} 1w, ${logoTabl1x} 1x,
                        ${logoTabl2xw} 2w, ${logoTabl2x} 2x,
                        ${logoTabl3xw} 3w, ${logoTabl3x} 3x,
                        ${logoDesk1xw} 1w, ${logoDesk1x} 1x,
                        ${logoDesk2xw} 2w, ${logoDesk2x} 2x,
                        ${logoDesk3xw} 3w, ${logoDesk3x} 3x`}
                src={logoMob1x}
                type="image/png"
                alt="Logo"
              />
              <LogoTitle>G<LogoSpan>oo</LogoSpan>seTrack</LogoTitle>
              </LogoLink>
            <CloseButton onClick={closeSidebar}>
              <svg >
                <use href={icon + "#icon-x-close"}></use>
              </svg>
            </CloseButton>
        </LogoAndTitle>
        <Navigation>
          <NavigationList>
            <Panel>User Panel</Panel>
             <NavigationItem $isActive={location.pathname === '/authorized/account'}>
                <Icon $isActive={location.pathname === '/authorized/account'}>
                  <use href={icon + '#icon-user-check-01'}></use>
                </Icon>
                  <NavigationLink to="/authorized/account">
                    My account</NavigationLink>
            </NavigationItem>
              <NavigationItem $isActive={location.pathname === '/authorized/calendar'}>
                <Icon $isActive={location.pathname === '/authorized/calendar'}>
                  <use href={icon + '#icon-calendar-check-02'}></use>
                </Icon>
                <NavigationLink to="/authorized/calendar">Calendar</NavigationLink>
              </NavigationItem>
              <NavigationItem $isActive={location.pathname === '/authorized/statistics'}>
                <IconChart $isActive={location.pathname === '/authorized/statistics'}>
                  <use href={icon + '#icon-shape'}></use>
                </IconChart>
                <NavigationLink to="/authorized/statistics">Statistics</NavigationLink>
              </NavigationItem>
          </NavigationList>
        </Navigation>
      </TopSection>
        <LogoutButton >Log out
          <IconLogout>
                  <use href={icon + '#icon-logout'}></use>
                </IconLogout>
    </LogoutButton>
  </Sidebar>
    </>
  );
};

export default SideBar;