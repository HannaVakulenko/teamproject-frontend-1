import { AuthNavigate } from "components/Common";
import { LoginForm } from "components/LoginPage";
import { PageContainer, BgImage } from "components/LoginPage/LoginPage/LoginPage.styled";

const LoginPage = () => (
  <PageContainer>
    <BgImage />
    <LoginForm />
    <AuthNavigate route="/register" text="Sign Up" />
  </PageContainer>
);

export default LoginPage;
