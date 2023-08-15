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
import logoMob1xw from 'assets/images/logo-mob-1x.webp';
import logoMob2x from 'assets/images/logo-mob@2x.png';
import logoMob2xw from 'assets/images/logo-mob@2x.webp';
import logoMob3x from 'assets/images/logo-mob@3x.png';
import logoMob3xw from 'assets/images/logo-mob@3x.webp';
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
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { disableScrolling } from 'helpers/disableScrolling';

const SideBar = ({ isOpen, toggleSidebar, mainLayoutRef }) => {
  const sidebarRef = useRef(null);
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const closeSidebar = () => toggleSidebar(false);
  const handleLinkClick = () => closeSidebar();

  useEffect(() => {
    const mainLayoutElement = mainLayoutRef.current;

    let touchStartX = 0;

    const handleTouchStart = e => (touchStartX = e.touches[0].clientX);

    const handleTouchMove = e => {
      const touchX = e.touches[0].clientX;
      const touchOffset = touchX - touchStartX;
      if (touchOffset > 100 && !isOpen) toggleSidebar(true);
    };

    if (mainLayoutElement) {
      mainLayoutElement.addEventListener('touchstart', handleTouchStart);
      mainLayoutElement.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (mainLayoutElement) {
        mainLayoutElement.removeEventListener('touchstart', handleTouchStart);
        mainLayoutElement.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [isOpen, toggleSidebar, mainLayoutRef]);

  useEffect(() => {
    const currentSidebarRef = sidebarRef.current;

    const handleTouchStart = e => {
      currentSidebarRef.touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = e => {
      const touchX = e.touches[0].clientX;
      const touchOffset = currentSidebarRef.touchStartX - touchX;

      if (touchOffset > 100) {
        toggleSidebar(false);
      }
    };

    if (isOpen && currentSidebarRef) {
      currentSidebarRef.addEventListener('touchstart', handleTouchStart);
      currentSidebarRef.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (currentSidebarRef) {
        currentSidebarRef.removeEventListener('touchstart', handleTouchStart);
        currentSidebarRef.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [isOpen, toggleSidebar]);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    disableScrolling(isOpen);
    return () => {
      disableScrolling(false);
    };
  }, [isOpen]);

  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={closeSidebar} />
      <Sidebar $isOpen={isOpen} $windowHeight={windowHeight} ref={sidebarRef}>
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
                  onClick={handleLinkClick}
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
                  onClick={handleLinkClick}
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
                  onClick={handleLinkClick}
                  $isActive={location.pathname === '/statistics'}
                >
                  <Icon>
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
