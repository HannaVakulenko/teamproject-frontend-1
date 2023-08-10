import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/MainLayout/MainLayout/MainLayout';

const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const NotFoundPage= lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/authorized/calendar" element={<CalendarPage />} />
        <Route path="/authorized/account" element={<AccountPage />} />
        <Route path="/authorized/statistics" element={<StatisticsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
