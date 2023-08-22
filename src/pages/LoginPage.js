import { AuthNavigate } from 'components/Common';
import GoBackNavigate from 'components/Common/GoBackNavigate/GoBackNavigate';
import { LoginForm } from 'components/LoginPage';
import {
  PageContainer,
  BgImage,
} from 'components/LoginPage/LoginPage/LoginPage.styled';


const LoginPage = () => {

  return (
    <PageContainer>
      <BgImage />
      <LoginForm />
      <AuthNavigate route="/register" text="Sign Up" />
      <GoBackNavigate route="/" text="Go Back" />
    </PageContainer>
  )
};

export default LoginPage;
