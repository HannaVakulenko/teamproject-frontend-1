
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundWrapper,
  NotFoundText,
  NotFoundLink,
  NotFoundImg,
} from './NotFound.styled';

import image1x from '../../assets/images/404-mob-1x.png';
import image2x from '../../assets/images/404-mob@2x.png';

const NotFound = () => {
  return (
    <main>
      <NotFoundContainer>
        <NotFoundWrapper>
          <NotFoundTitle>4</NotFoundTitle>
          <NotFoundImg
            srcSet={`${image1x} 1x, ${image2x} 2x`}
            src={image1x}
            alt="Goose"
          />
          <NotFoundTitle>4</NotFoundTitle>
        </NotFoundWrapper>
        <NotFoundText>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </NotFoundText>
        <NotFoundLink to={'/'}>Back to home</NotFoundLink>
      </NotFoundContainer>
    </main>
  );
};

export default NotFound;
