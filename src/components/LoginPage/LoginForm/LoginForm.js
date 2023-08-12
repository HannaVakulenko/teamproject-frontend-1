import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import * as yup from "yup";
import { FormWrapper, FormTitle, Form, FieldWrapper, FormLabel, FormField, FormButton, Icon, ErrorText } from "components/RegisterPage/RegisterForm/RegisterForm.styled";
import icon from "assets/icons/symbol-defs.svg";

import { login } from 'redux/auth/operations';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(login(values));
    resetForm();
  };

  return (
    <FormWrapper>
      <FormTitle>Log In</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <FieldWrapper>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormField id="email" name="email" type="email" placeholder="Enter email" />
            <ErrorText name="email" component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormField id="password" name="password" type="password" placeholder="Enter password" />
            <ErrorText name="password" component="div" />
          </FieldWrapper>
          <FormButton type="submit">
            <span>Log In</span>
            <Icon width="20" height="20">
              <use href={icon + "#icon-login"}></use>
            </Icon>
          </FormButton>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
export default LoginForm;
