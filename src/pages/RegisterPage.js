import { AuthNavigate } from 'components/Common';
import GoBackNavigate from 'components/Common/GoBackNavigate/GoBackNavigate';
import { RegisterForm } from 'components/RegisterPage';
import {
  PageContainer,
  BgImage,
} from 'components/RegisterPage/RegisterPage/RegisterPage.styled';

const RegisterPage = () => (
  <PageContainer>
    <BgImage />
    <RegisterForm />
    <AuthNavigate route="/login" text="Log In" />
    <GoBackNavigate route="/" text="Go Back" />
  </PageContainer>
);

export default RegisterPage;
