import { useMediaQuery } from 'react-responsive';
import { device } from 'constants';
import {
  HeroTitle,
  Img,
  LoginNavLink,
  RegisterNavLink,
  WrappAuthSection,
} from 'components/MainPage/AuthSection/AuthSection.styled';

const AuthSection = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${device.desktop}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${device.tablet}px) and (max-width: ${
      device.desktop - 1
    }px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${device.tablet - 1}px)`,
  });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <WrappAuthSection>
      {isMobile && (
        <Img
          src={
            isRetina
              ? require('../../../assets/images/mainpage-goose-mob@2x.png')
              : require('../../../assets/images/mainpage-goose-mob-1x.png')
          }
          alt="goose"
          width="142"
        />
      )}
      {(isTablet || isDesktop) && (
        <Img
          src={
            isRetina
              ? require('../../../assets/images/mainpage-goose-tabl-desk@2x.png')
              : require('../../../assets/images/mainpage-goose-tabl-desk-1x.png')
          }
          alt="goose"
          width="150"
        />
      )}
      <HeroTitle>
        Go<i>o</i>seTrack
      </HeroTitle>
      <LoginNavLink to="/login">
        Log in
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M11.75 2.25006H12.65C13.9101 2.25006 14.5402 2.25006 15.0215 2.4953C15.4448 2.71101 15.789 3.05522 16.0048 3.47858C16.25 3.95988 16.25 4.58995 16.25 5.85006V12.1501C16.25 13.4102 16.25 14.0402 16.0048 14.5215C15.789 14.9449 15.4448 15.2891 15.0215 15.5048C14.5402 15.7501 13.9101 15.7501 12.65 15.7501H11.75M8 5.25006L11.75 9.00006M11.75 9.00006L8 12.7501M11.75 9.00006L2.75 9.00006"
            stroke="#3E85F3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </LoginNavLink>
      <RegisterNavLink to="/register">Sign up</RegisterNavLink>
    </WrappAuthSection>
  );
};
export default AuthSection;
