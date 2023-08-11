import { RegisterForm } from 'components/RegisterPage';
import { PageContainer } from 'components/RegisterPage/RegisterPage/RegisterPage.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <PageContainer onSubmit={handleSubmit}>
      <RegisterForm />
    </PageContainer>
  );
};

export default RegisterPage;
