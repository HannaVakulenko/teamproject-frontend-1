import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import * as yup from "yup";
import {
  FormWrapper,
  FormTitle,
  Form,
  FieldWrapper,
  FormLabel,
  FormField,
  FormButton,
  Icon,
  ErrorText,
  SuccessText,
  ErrorIcon,
  SuccessIcon 
} from "components/RegisterPage/RegisterForm/RegisterForm.styled";
import icon from "assets/icons/symbol-defs.svg";

import { login } from 'redux/auth/operations';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('This is an ERROR email')
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
        {formik => (
          <Form autoComplete="off">
            <FieldWrapper
              className={`${formik.touched.email && formik.errors.email
                ? 'error'
                : formik.touched.email && !formik.errors.email
                  ? 'success'
                  : ''}`}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <ErrorIcon width="20" height="20" status="error">
                <use href={icon + "#icon-Vector"}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" status="success">
                <use href={icon + "#icon-Vector-1"}></use>
              </SuccessIcon>
              <FormField id="email" name="email" type="email" placeholder="Enter email" />
              <ErrorText name="email" component="div" />
              {formik.touched.email && !formik.errors.email && (
                <SuccessText>This is a CORRECT email</SuccessText>
              )}
            </FieldWrapper>
            <FieldWrapper
              className={`${formik.touched.password && formik.errors.password
                ? 'error'
                : formik.touched.password && !formik.errors.password
                  ? 'success'
                  : ''}`}
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <ErrorIcon width="20" height="20" status="error">
                <use href={icon + "#icon-Vector"}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" status="success">
                <use href={icon + "#icon-Vector-1"}></use>
              </SuccessIcon>
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
        )}
      </Formik>
    </FormWrapper>
  );
};
export default LoginForm;
