import { LogoutButton, IconLogout } from './LogoutBtn.styled';
import { logout } from 'redux/auth/operations';
import icon from 'assets/icons/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const LogoutBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <LogoutButton
      onClick={async () => {
        await dispatch(logout());
        navigate('/');
      }}
    >
      {t('log_out')}
      <IconLogout width="20" height="20">
        <use href={icon + '#icon-logout'}></use>
      </IconLogout>
    </LogoutButton>
  );
};
export default LogoutBtn;
