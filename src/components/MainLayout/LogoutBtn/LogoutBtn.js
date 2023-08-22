import { LogoutButton, IconLogout } from './LogoutBtn.styled';
import { logout } from 'redux/auth/operations';
import icon from 'assets/icons/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <LogoutButton
      onClick={async () => {
        await dispatch(logout());
        navigate('/');
      }}
    >
      Log out
      <IconLogout width="20" height="20">
        <use href={icon + '#icon-logout'}></use>
      </IconLogout>
    </LogoutButton>
  );
};
export default LogoutBtn;
