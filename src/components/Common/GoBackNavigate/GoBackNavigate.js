import { Wrapper, AuthLink } from './GoBackNavigate.styled';

const GoBackNavigate = ({ route, text }) => {
  return (
    <Wrapper>
      <AuthLink to={route}>{text}</AuthLink>
    </Wrapper>
  );
};
export default GoBackNavigate;
