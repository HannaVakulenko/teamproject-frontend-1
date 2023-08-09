// src/components/MainLayout/SideBar/SideBar.js
import { Link } from 'react-router-dom';
import { Sidebar } from './SideBar.styled';

const SideBar = () => {
  return (
    <Sidebar>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/authorized/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/authorized/account">Account</Link>
          </li>
          <li>
            <Link to="/authorized/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
};
export default SideBar;
