import {
  Backdrop,
  Sidebar,
  TopSection,
  LogoAndTitle,
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

import { device } from 'constants';
import { logo } from 'assets/images/logo';

import icon from 'assets/icons/symbol-defs.svg';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { disableScrolling } from 'helpers/disableScrolling';
import { useTranslation } from 'react-i18next';

const SideBar = ({ isOpen, toggleSidebar, mainLayoutRef }) => {
  const { t } = useTranslation();
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
            <picture>
              {/* Webp */}
              <source
                srcSet={`${logo.desk1xWebp} 1x, ${logo.desk2xWebp} 2x, ${logo.desk3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.desktop}px)`}
              />
              <source
                srcSet={`${logo.tabl1xWebp} 1x, ${logo.tabl2xWebp} 2x, ${logo.tabl3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.tablet}px)`}
              />
              <source
                srcSet={`${logo.mob1xWebp} 1x, ${logo.mob2xWebp} 2x, ${logo.mob3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: 150px)`}
              />

              {/* Png */}
              <source
                srcSet={`${logo.desk1xPng} 1x, ${logo.desk2xPng} 2x, ${logo.desk3xPng} 3x`}
                media={`(min-width: ${device.desktop}px)`}
              />
              <source
                srcSet={`${logo.tabl1xPng} 1x, ${logo.tabl2xPng} 2x, ${logo.tabl3xPng} 3x`}
                media={`(min-width: ${device.tablet}px)`}
              />
              <source
                srcSet={`${logo.mob1xPng} 1x, ${logo.mob2xPng} 2x, ${logo.mob3xPng} 3x`}
                media={`(min-width: 150px)`}
              />

              <Logo src={logo.desk1xPng} alt="Logo" />
            </picture>
            <LogoTitle>
              G<LogoSpan>oo</LogoSpan>seTrack
            </LogoTitle>
            <CloseButton onClick={closeSidebar}>
              <CloseIcon width="34" height="34">
                <use href={icon + '#icon-x-close'}></use>
              </CloseIcon>
            </CloseButton>
          </LogoAndTitle>

          <Navigation>
            <Panel>{t('user_panel')}</Panel>
            <NavigationList>
              <li>
                <NavigationItem
                  to="/account"
                  onClick={handleLinkClick}
                  $isActive={location.pathname.startsWith('/account')}
                >
                  <Icon>
                    <use href={icon + '#icon-user-check-01'}></use>
                  </Icon>
                  <NavItemName>{t('my_account')}</NavItemName>
                </NavigationItem>
              </li>

              <li>
                <NavigationItem
                  to="/calendar"
                  onClick={handleLinkClick}
                  $isActive={location.pathname.startsWith('/calendar')}
                >
                  <Icon>
                    <use href={icon + '#icon-calendar-check-02'}></use>
                  </Icon>
                  <NavItemName>{t('calendar')}</NavItemName>
                </NavigationItem>
              </li>

              <li>
                <NavigationItem
                  to="/statistics"
                  onClick={handleLinkClick}
                  $isActive={location.pathname.startsWith('/statistics')}
                >
                  <Icon>
                    <use href={icon + '#icon-shape'}></use>
                  </Icon>
                  <NavItemName to="/statistics">{t('statistics')}</NavItemName>
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
