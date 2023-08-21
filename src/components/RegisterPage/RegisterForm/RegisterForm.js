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

import { register, refreshUser } from 'redux/auth/operations';
import { Trans, useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .min(2, 'Must be at least 2 characters long')
    .required(<Trans i18nKey="user_name_req">Name is required</Trans>),
  email: yup
    .string()
    .email(
      <Trans i18nKey="schema_email_yup">
        Email address must contain an "@" sign
      </Trans>
    )
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/,
      'Must be a valid email'
    )
    .required(<Trans i18nKey="schema_email_req">Email is required</Trans>),
  password: yup
    .string()
    .min(
      7,
      <Trans i18nKey="schema_pass_yup">
        Must be at least 7 characters long
      </Trans>
    )
    .required(<Trans i18nKey="schema_pass_req">Password is required</Trans>),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const { t } = useTranslation();
  const email_exist = t('email_exist');
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      await dispatch(refreshUser()).unwrap();
      resetForm();
    } catch (error) {
      if (error.response.status === 409) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: email_exist,
          confirmButtonColor: '#3E85F3',
        });
      }
    }
  };

  return (
    <FormWrapper>
      <FormTitle>{t('sign_up')}</FormTitle>
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
              <FormLabel htmlFor="name">{t('name')}</FormLabel>
              <ErrorIcon width="20" height="20" data-status="error">
                <use href={icon + '#icon-Vector'}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" data-status="success">
                <use href={icon + '#icon-Vector-1'}></use>
              </SuccessIcon>
              <FormField id="name" name="name" placeholder={t('enter_name')} />
              <ErrorText name="name" component="div" />
              {formik.touched.name && !formik.errors.name && (
                <SuccessText>{t('name_valid')}</SuccessText>
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
            <FieldWrapper
              className={`${
                formik.touched.password && formik.errors.password
                  ? 'error'
                  : formik.touched.password && !formik.errors.password
                  ? 'success'
                  : ''
              }`}
            >
              <FormLabel htmlFor="password">{t('password')}</FormLabel>
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
                placeholder={t('enter_pass')}
              />
              <ErrorText name="password" component="div" />
              {formik.touched.password && !formik.errors.password && (
                <SuccessText>{t('valid_pass')}</SuccessText>
              )}
            </FieldWrapper>
            <FormButton type="submit">
              <span>{t('sign_up')}</span>
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
