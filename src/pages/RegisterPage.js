import { AuthNavigate } from 'components/Common';
import GoBackNavigate from 'components/Common/GoBackNavigate/GoBackNavigate';
import { RegisterForm } from 'components/RegisterPage';
import {
  PageContainer,
  BgImage,
} from 'components/RegisterPage/RegisterPage/RegisterPage.styled';
import i18n from '../i18n';
import { Trans } from 'react-i18next';

const getTranslation = translationKey => (
  <Trans>{i18n.t(translationKey)}</Trans>
);

const RegisterPage = () => (
  <PageContainer>
    <BgImage />
    <RegisterForm />
    <AuthNavigate route="/login" text={getTranslation('log_in')} />
    <GoBackNavigate route="/" text={getTranslation('go_back')} />
  </PageContainer>
);

export default RegisterPage;
