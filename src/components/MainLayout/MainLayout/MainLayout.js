// src/components/MainLayout/MainLayout/MainLayout.js
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { LayoutWrapper } from './MainLayout.styled';
import { Spinner } from 'components/Common';
import SideBar from '../SideBar/SideBar';

const MainLayout = () => {
  return (
    <LayoutWrapper>
      <SideBar />
      <div>
        <Header />
        <main>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </LayoutWrapper>
  );
};
export default MainLayout;
