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

import { mainpageGoose } from 'assets/images/mainpageGoose';

const AuthSection = () => {
  return (
    <WrappAuthSection>
      <picture>
        {/* Webp */}
        <source
          srcSet={`${mainpageGoose.tablDesk1xWebp}, ${mainpageGoose.tablDesk2xWebp} 2x, ${mainpageGoose.tablDesk3xWebp} 3x`}
          type="image/webp"
          media={`(min-width: ${device.tablet}px)`}
        />
        <source
          srcSet={`${mainpageGoose.mob1xWebp}, ${mainpageGoose.mob2xWebp} 2x, ${mainpageGoose.mob3xWebp} 3x`}
          type="image/webp"
          media={`(min-width: 150px)`}
        />

        {/* png */}
        <source
          srcSet={`${mainpageGoose.tablDesk1xPng}, ${mainpageGoose.tablDesk2xPng} 2x, ${mainpageGoose.tablDesk3xPng} 3x`}
          media={`(min-width: ${device.tablet}px)`}
        />
        <source
          srcSet={`${mainpageGoose.mob1xPng}, ${mainpageGoose.mob2xPng} 2x, ${mainpageGoose.mob3xPng} 3x`}
          media={`(min-width: 150px)`}
        />
        <ImgHero src={mainpageGoose.mob1xPng} alt="goose" width="142" />
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
