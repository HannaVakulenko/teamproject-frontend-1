import { useDispatch } from 'react-redux';
import { useState } from "react";
import { Formik} from "formik";
import * as yup from "yup";
import { FormWrapper, FormTitle, Form, FieldWrapper, FormLabel, FormField, FormButton, ErrorText, SuccessText } from "./RegisterForm.styled";
import icon from "assets/icons/symbol-defs.svg";

import { register } from 'redux/auth/operations';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('This is an ERROR email')
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
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleFocus = fieldName => {
    setFocused(prevState => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(register(values));
    resetForm();
    setFocused({
      name: false,
      email: false,
      password: false,
    });
  };

  return (
    <FormWrapper>
      <FormTitle>Sign Up</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <FieldWrapper>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormField id="name" name="name" placeholder="Enter your name" required onBlur={() => handleFocus("name")} focused={focused.name.toString()} />
              <ErrorText>Name is required</ErrorText>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="email">Email</FormLabel>
              <svg width="20" height="20">
                <use href={icon + "#icon-Vector"}></use>
              </svg>
              <FormField id="email" name="email" type="email" placeholder="Enter email" required onBlur={() => handleFocus("email")} focused={focused.email.toString()} />
              <ErrorText>This is an ERROR email</ErrorText>
              <SuccessText>This is an CORRECT email</SuccessText>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormField id="password" name="password" type="password" required minLength="7" onBlur={() => handleFocus("password")} focused={focused.password.toString()} placeholder="Enter password" />
              <ErrorText>Must be at least 7 characters long</ErrorText>
            </FieldWrapper>
            <FormButton type="submit">
              <span>Sign Up</span>
              <svg width="20" height="20">
                <use href={icon + "#icon-login"}></use>
              </svg>
            </FormButton>
          </Form>
        )}
        
      </Formik>
    </FormWrapper>
  );
};
export default RegisterForm;
