import React, { useState, useCallback } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  MainLayoutStyled,
  MainStyled,
  MainAndHeaderWrapper,
} from './MainLayout.styled';
import { Container, Spinner } from 'components/Common';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(open => {
    setSidebarOpen(open);
  }, []);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape' && isSidebarOpen) {
        toggleSidebar(false);
      }
    },
    [isSidebarOpen, toggleSidebar]
  );

  return (
    <MainLayoutStyled onKeyDown={handleKeyDown} tabIndex="0">
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MainAndHeaderWrapper>
        <Header toggleSidebar={toggleSidebar} />
        <MainStyled>
          <Container>
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </Container>
        </MainStyled>
      </MainAndHeaderWrapper>
    </MainLayoutStyled>
  );
};
export default MainLayout;
