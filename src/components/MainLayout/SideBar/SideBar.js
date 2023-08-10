import { Link } from 'react-router-dom';
import { Sidebar, CloseButton, Backdrop } from './SideBar.styled';

const SideBar = ({ isOpen, toggleSidebar }) => {
  const closeSidebar = () => {
    toggleSidebar(false);
  };
  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={closeSidebar} />
      <Sidebar $isOpen={isOpen}>
        <CloseButton onClick={closeSidebar}>X</CloseButton>
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
    </>
  );
};
export default SideBar;
