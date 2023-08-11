import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRefreshing, selectLoggedIn } from '../redux/auth/selectors';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/authorized/calendar',
}) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
