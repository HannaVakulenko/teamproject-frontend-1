import { device } from 'constants';
import icon from 'assets/icons/symbol-defs.svg';
import {
  HeroTitle,
  ImgHero,
  IconLogin,
  LoginNavLink,
  RegisterNavLink,
  WrappAuthSection,
  WrapLink,
} from 'components/MainPage/AuthSection/AuthSection.styled';

const AuthSection = () => {
  return (
    <WrappAuthSection>
      <picture>
        {/* Webp */}
        <source
          srcSet={
            (require('../../../assets/images/mainpage-goose-tabl-desk-1x.webp'),
            require('../../../assets/images/mainpage-goose-tabl-desk@2x.webp'),
            require('../../../assets/images/mainpage-goose-tabl@3x.webp'))
          }
          type="image/webp"
          media={`(min-width: ${device.tablet}px)`}
        />
        <source
          srcSet={
            (require('../../../assets/images/mainpage-goose-mob-1x.webp'),
            require('../../../assets/images/mainpage-goose-mob@2x.webp'),
            require('../../../assets/images/mainpage-goose-mob@3x.webp'))
          }
          type="image/webp"
          media={`(min-width: 150px)`}
        />

        {/* png */}
        <source
          srcSet={
            (require('../../../assets/images/mainpage-goose-tabl-desk-1x.png'),
            require('../../../assets/images/mainpage-goose-tabl-desk@2x.png'),
            require('../../../assets/images/mainpage-goose-tabl@3x.png'))
          }
          media={`(min-width: ${device.tablet}px)`}
        />
        <source
          srcSet={
            (require('../../../assets/images/mainpage-goose-mob-1x.png'),
            require('../../../assets/images/mainpage-goose-mob@2x.png'),
            require('../../../assets/images/mainpage-goose-mob@3x.png'))
          }
          media={`(min-width: 150px)`}
        />
        <ImgHero
          src={require('../../../assets/images/mainpage-goose-mob-1x.png')}
          alt="goose"
          width="142"
        />
      </picture>
      <HeroTitle>
        G<i>oo</i>seTrack
      </HeroTitle>
      <WrapLink>
        <LoginNavLink to="/login">
          Log in
          <IconLogin>
            <use href={icon + '#icon-login'}></use>
          </IconLogin>
        </LoginNavLink>
        <RegisterNavLink to="/register">Sign up</RegisterNavLink>
      </WrapLink>
    </WrappAuthSection>
  );
};
export default AuthSection;
