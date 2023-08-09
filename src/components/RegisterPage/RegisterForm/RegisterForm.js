import { Formik } from "formik";
import * as yup from "yup";
import { FormWrapper, FormTitle, Form, FieldWrapper, FormLabel, Field, FormButton } from "./RegisterForm.styled";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("This is an ERROR email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <FormWrapper>
      <FormTitle>Sign Up</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <FieldWrapper>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Field id="name" name="name" placeholder="Enter your name" />
          </FieldWrapper>
          <FieldWrapper>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Field id="email" name="email" type="email" placeholder="Enter email" />
          </FieldWrapper>
          <FieldWrapper>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Field id="password" name="password" type="password" placeholder="Enter password" />
          </FieldWrapper>
          <FormButton type="submit">Sign Up</FormButton>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
export default RegisterForm;
