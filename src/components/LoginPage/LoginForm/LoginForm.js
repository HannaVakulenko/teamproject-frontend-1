import { Formik } from "formik";
import * as yup from "yup";
import { FormWrapper, FormTitle, Form, FieldWrapper, FormLabel, Field, FormButton } from "components/RegisterPage/RegisterForm/RegisterForm.styled";
// import LoginIcon from "assets/icons/symbol-defs.svg#icon-login";

const schema = yup.object().shape({
  email: yup.string().email("This is an ERROR email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
            <Field id="email" name="email" type="email" placeholder="Enter email" />
          </FieldWrapper>
          <FieldWrapper>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Field id="password" name="password" type="password" placeholder="Enter password" />
          </FieldWrapper>
          <FormButton type="submit">
            Log In
            {/* <svg width="20" height="20">
              <use href={LoginIcon}></use>
            </svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5M8.33333 5.83333L12.5 10M12.5 10L8.33333 14.1667M12.5 10L2.5 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}
          </FormButton>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
export default LoginForm;
