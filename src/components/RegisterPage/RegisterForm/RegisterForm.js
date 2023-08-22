import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import {
  FormWrapper,
  FormTitle,
  Form,
  FieldWrapper,
  FormLabel,
  FormField,
  FormButton,
  ErrorText,
  SuccessText,
  Icon,
  ErrorIcon,
  SuccessIcon,
} from './RegisterForm.styled';
import icon from 'assets/icons/symbol-defs.svg';

import { register } from 'redux/auth/operations';
import { nameRegExp, emailRegExp } from 'constants';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .min(2, 'Must be at least 2 characters long')
    .required('Name is required'),
  email: yup
    .string()
    .email('Email address must contain an "@" sign')
    .matches(
      emailRegExp,
      'Must be a valid email'
    )
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Must be at least 7 characters long')
    .required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      // await dispatch(refreshUser()).unwrap();
      resetForm();
    } catch (error) {
      if (error.response.status === 409) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User with this email address already exists!',
          confirmButtonColor: '#3E85F3',
        });
      }
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Sign Up</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form autoComplete="off">
            <FieldWrapper
              className={`${
                formik.touched.name && formik.errors.name
                  ? 'error'
                  : formik.touched.name && !formik.errors.name
                  ? 'success'
                  : ''
              }`}
            >
              <FormLabel htmlFor="name">Name</FormLabel>
              <ErrorIcon width="20" height="20" data-status="error">
                <use href={icon + '#icon-Vector'}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" data-status="success">
                <use href={icon + '#icon-Vector-1'}></use>
              </SuccessIcon>
              <FormField id="name" name="name" placeholder="Enter your name" />
              <ErrorText name="name" component="div" />
              {formik.touched.name && !formik.errors.name && (
                <SuccessText>This is a valid name</SuccessText>
              )}
            </FieldWrapper>
            <FieldWrapper
              className={`${
                formik.touched.email && formik.errors.email
                  ? 'error'
                  : formik.touched.email && !formik.errors.email
                  ? 'success'
                  : ''
              }`}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <ErrorIcon width="20" height="20" data-status="error">
                <use href={icon + '#icon-Vector'}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" data-status="success">
                <use href={icon + '#icon-Vector-1'}></use>
              </SuccessIcon>
              <FormField
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <ErrorText name="email" component="div" />
              {formik.touched.email && !formik.errors.email && (
                <SuccessText>This is a valid email</SuccessText>
              )}
            </FieldWrapper>
            <FieldWrapper
              className={`${
                formik.touched.password && formik.errors.password
                  ? 'error'
                  : formik.touched.password && !formik.errors.password
                  ? 'success'
                  : ''
              }`}
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <ErrorIcon width="20" height="20" data-status="error">
                <use href={icon + '#icon-Vector'}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" data-status="success">
                <use href={icon + '#icon-Vector-1'}></use>
              </SuccessIcon>
              <FormField
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
              />
              <ErrorText name="password" component="div" />
              {formik.touched.password && !formik.errors.password && (
                <SuccessText>This is a valid password</SuccessText>
              )}
            </FieldWrapper>
            <FormButton type="submit">
              <span>Sign Up</span>
              <Icon width="20" height="20">
                <use href={icon + '#icon-login'}></use>
              </Icon>
            </FormButton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
export default RegisterForm;
