import { AuthNavigate } from "components/Common";
import { RegisterForm } from "components/RegisterPage";
import { PageContainer, BgImage } from "components/RegisterPage/RegisterPage/RegisterPage.styled";

const RegisterPage = () => (
  <PageContainer>
    <BgImage />
    <RegisterForm />
    <AuthNavigate route="/login" text="Log In" />
  </PageContainer>
);

export default RegisterPage;
