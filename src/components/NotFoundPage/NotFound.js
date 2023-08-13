import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundWrapper,
  NotFoundText,
  NotFoundLink,
  NotFoundImg,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <NotFoundTitle>4</NotFoundTitle>
        <NotFoundImg></NotFoundImg>
        <NotFoundTitle>4</NotFoundTitle>
      </NotFoundWrapper>
      <NotFoundText>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </NotFoundText>
      <NotFoundLink to={'/'}>Back to home</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFound;
