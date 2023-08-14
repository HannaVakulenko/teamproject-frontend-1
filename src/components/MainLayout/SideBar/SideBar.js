import {
  Backdrop,
  Sidebar,
  TopSection,
  LogoAndTitle,
  LogoLink,
  Logo,
  LogoTitle,
  LogoSpan,
  CloseButton,
  CloseIcon,
  Navigation,
  NavigationList,
  Panel,
  NavigationItem,
  Icon,
  NavItemName,
} from './SideBar.styled';
import logoMob1x from 'assets/images/logo-mob-1x.png';
import logoMob1xw from 'assets/images/404-mob-1x.webp';
import logoMob2x from 'assets/images/logo-mob@2x.png';
import logoMob2xw from 'assets/images/404-mob@2x.webp';
import logoMob3x from 'assets/images/logo-mob@3x.png';
import logoMob3xw from 'assets/images/404-mob@3x.webp';
import logoTabl1x from 'assets/images/logo-tabl-1x.png';
import logoTabl1xw from 'assets/images/logo-tabl-1x.webp';
import logoTabl2x from 'assets/images/logo-tabl@2x.png';
import logoTabl2xw from 'assets/images/logo-tabl@2x.webp';
import logoTabl3x from 'assets/images/logo-tabl@3x.png';
import logoTabl3xw from 'assets/images/logo-tabl@3x.webp';
import logoDesk1x from 'assets/images/logo-desk-1x.png';
import logoDesk1xw from 'assets/images/logo-desk-1x.webp';
import logoDesk2x from 'assets/images/logo-desk@2x.png';
import logoDesk2xw from 'assets/images/logo-desk@2x.webp';
import logoDesk3x from 'assets/images/logo-desk@3x.png';
import logoDesk3xw from 'assets/images/logo-desk@3x.webp';
import icon from 'assets/icons/symbol-defs.svg';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';
import LogoutBtn from '../LogoutBtn/LogoutBtn';

const SideBar = ({ isOpen, toggleSidebar }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
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
                src={logoDesk1x}
                type="image/png"
                alt="Logo"
              />
              <LogoTitle>
                G<LogoSpan>oo</LogoSpan>seTrack
              </LogoTitle>
            </LogoLink>
            <CloseButton onClick={closeSidebar}>
              <CloseIcon width="34" height="34">
                <use href={icon + '#icon-x-close'}></use>
              </CloseIcon>
            </CloseButton>
          </LogoAndTitle>
          <Navigation>
            <Panel>User Panel</Panel>
            <NavigationList>
              <li>
                <NavigationItem
                  to="/account"
                  $isActive={location.pathname === '/account'}
                >
                  <Icon>
                    <use href={icon + '#icon-user-check-01'}></use>
                  </Icon>
                  <NavItemName>My account</NavItemName>
                </NavigationItem>
              </li>

              <li>
                <NavigationItem
                  to="/calendar"
                  $isActive={location.pathname === '/calendar'}
                >
                  <Icon>
                    <use href={icon + '#icon-calendar-check-02'}></use>
                  </Icon>
                  <NavItemName>Calendar</NavItemName>
                </NavigationItem>
              </li>

              <li>
                <NavigationItem
                  to="/statistics"
                  $isActive={location.pathname === '/statistics'}
                >
                  <Icon $isActive={location.pathname === '/statistics'}>
                    <use href={icon + '#icon-shape'}></use>
                  </Icon>
                  <NavItemName to="/statistics">Statistics</NavItemName>
                </NavigationItem>
              </li>
            </NavigationList>
          </Navigation>
        </TopSection>
        {isLoggedIn && <LogoutBtn />}
      </Sidebar>
    </>
  );
};

export default SideBar;
