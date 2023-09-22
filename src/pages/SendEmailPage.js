import { AuthNavigate } from 'components/Common';
import GoBackNavigate from 'components/Common/GoBackNavigate/GoBackNavigate';
import { SendEmailForm } from 'components/SendEmailPage';
import {
  PageContainer,
  BgImage,
} from 'components/SendEmailPage/SendEmailPage/SendEmailPage.styled';
import i18n from '../i18n';
import { Trans } from 'react-i18next';

const getTranslation = translationKey => (
  <Trans>{i18n.t(translationKey)}</Trans>
);

const SendEmailPage = () => (
  <PageContainer>
    <BgImage />
    <SendEmailForm />
    <div style={{ display: 'flex', gap: '30px' }}>
      <AuthNavigate route="/register" text={getTranslation('sign_up')} />
      <AuthNavigate route="/login" text={getTranslation('log_in')} />
    </div>
    <GoBackNavigate route="/" text={getTranslation('go_back')} />
  </PageContainer>
);

export default SendEmailPage;
