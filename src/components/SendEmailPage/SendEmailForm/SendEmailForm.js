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
} from './SendEmailForm.styled';
import icon from 'assets/icons/symbol-defs.svg';

import { verificationEmail } from 'redux/auth/operations';
import { Trans, useTranslation } from 'react-i18next';
import { emailRegExp } from 'constants';

const schema = yup.object().shape({
  email: yup
    .string()
    .email(
      <Trans i18nKey="schema_email_yup">
        Email address must contain an "@" sign
      </Trans>
    )
    .matches(emailRegExp, 'Must be a valid email')
    .required(<Trans i18nKey="schema_email_req">Email is required</Trans>),
});

const initialValues = {
  email: '',
};

const SendEmailForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(verificationEmail(values)).unwrap();
      resetForm();
      Swal.fire({
        icon: 'success',
        title: 'Info',
        text: 'Email has been sent',
        confirmButtonColor: '#3E85F3',
      });
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verification has already been passed',
          confirmButtonColor: '#3E85F3',
        });
      }
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Send Email</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form autoComplete="off">
            <FieldWrapper
              className={`${
                formik.touched.email && formik.errors.email
                  ? 'error'
                  : formik.touched.email && !formik.errors.email
                  ? 'success'
                  : ''
              }`}
            >
              <FormLabel htmlFor="email">{t('email')}</FormLabel>
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
                placeholder={t('enter_email')}
              />
              <ErrorText name="email" component="div" />
              {formik.touched.email && !formik.errors.email && (
                <SuccessText>{t('valid_email')}</SuccessText>
              )}
            </FieldWrapper>
            <FormButton type="submit">
              <span>Send Email</span>
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
export default SendEmailForm;
