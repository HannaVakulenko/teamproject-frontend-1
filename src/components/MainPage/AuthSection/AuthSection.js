import { useMediaQuery } from 'react-responsive';
import {
  HeroTitle,
  Img,
  LoginNavLink,
  RegisterNavLink,
  WrappAuthSection,
} from 'components/MainPage/AuthSection/AuthSection.styled';

const AuthSection = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    
      <WrappAuthSection>
        {isMobile && (
          <Img
            src={
              isRetina
                ? require('../../../assets/images/logo-mob@2x.png')
                : require('../../../assets/images/logo-mob-1x.png')
            }
            alt="goose"
            width="142"
          />
        )}
        {isTablet && (
          <img
            src={
              isRetina
                ? require('../../../assets/images/logo-tabl@2x.png')
                : require('../../../assets/images/logo-tabl-1x.png')
            }
            alt="goose"
            width="150"
          />
        )}
        {isDesktop && (
          <img
            src={
              isRetina
                ? require('../../../assets/images/logo-desk@2x.png')
                : require('../../../assets/images/logo-desk-1x.png')
            }
            alt="goose"
            width="150"
          />
        )}
        <HeroTitle>
          Go<i>o</i>seTrack
        </HeroTitle>
        <LoginNavLink to="/login">Log in<p>A</p></LoginNavLink>
        <RegisterNavLink to="/register">Sign up</RegisterNavLink>
      </WrappAuthSection>
   
  );
};
export default AuthSection;
