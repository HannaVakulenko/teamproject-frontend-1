import { AuthNavigate } from 'components/Common';
import GoBackNavigate from 'components/Common/GoBackNavigate/GoBackNavigate';
import { LoginForm } from 'components/LoginPage';
import {
  PageContainer,
  BgImage,
} from 'components/LoginPage/LoginPage/LoginPage.styled';
import i18n from '../i18n';
import { Trans } from 'react-i18next';

const getTranslation = translationKey => (
  <Trans>{i18n.t(translationKey)}</Trans>
);

const LoginPage = () => (
  <PageContainer>
    <BgImage />
    <LoginForm />
    <AuthNavigate route="/register" text={getTranslation('sign_up')} />
    <GoBackNavigate route="/" text={getTranslation('go_back')} />
  </PageContainer>
);

export default LoginPage;
