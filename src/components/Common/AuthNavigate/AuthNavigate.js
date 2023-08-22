import { Wrapper, AuthLink } from './AuthNavigate.styled';

const AuthNavigate = ({ route, text }) => {
  return (
    <Wrapper>
      <AuthLink to={route}>{text}</AuthLink>
    </Wrapper>
  );
};
export default AuthNavigate;
