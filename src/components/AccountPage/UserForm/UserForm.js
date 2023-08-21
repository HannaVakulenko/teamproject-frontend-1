import React, { useState } from 'react';
import {
  FormWrap,
  FieldWrap,
  Label,
  Input,
  BdayIcon,
  StyledDatePickerInputWrapper,
  InputWrapperL,
  InputWrapperR,
  ErrorText,
  Form,
  ImageContainer,
  UserImage,
  Upload,
  UserInfoWrap,
  UserName,
  UserStatus,
  SaveChangesBtn,
  DatePickerWrapperStyles,
} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { selectUser } from 'redux/auth/selectors';
import icon from 'assets/icons/symbol-defs.svg';
import { Icon } from './UserForm.styled';
import { useEffect } from 'react';
import { fetchUserAccount, refreshUser } from 'redux/auth/operations';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth, eachYearOfInterval } from 'date-fns';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { phoneRegExp } from 'constants/phoneValidation';
import { Trans, useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )

    .min(
      2,
      <Trans i18nKey="user_name_length">
        Must be at least 2 characters long
      </Trans>
    )
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
  birthday: yup.date(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  skype: yup
    .string()
    .max(16, <Trans i18nKey="skype_max">Max 16 characters</Trans>)
    .min(5, <Trans i18nKey="skype_min">Min 5 characters</Trans>),
  password: yup
    .string()
    .min(
      7,
      <Trans i18nKey="schema_pass_yup">
        Must be at least 7 characters long
      </Trans>
    ),
});

const UserForm = () => {
  const { t } = useTranslation();

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [formSubmitted] = useState(false);
  const [localUserData, setLocalUserData] = useState({
    profilePicture: '',
    name: '',
    email: '',
    birthday: new Date(),
    phone: '',
    skype: '',
    password: '',
  });

  useEffect(() => {
    dispatch(fetchUserAccount());
  }, [dispatch]);

  const handleSubmit = async values => {
    try {
      setLocalUserData({ ...values });
      await dispatch(fetchUserAccount(localUserData));
      await dispatch(refreshUser(localUserData));
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: t('email_exist'),
          confirmButtonColor: '#3E85F3',
        });
      }
    }
  };
  const years = eachYearOfInterval({
    start: new Date(1900, 0, 1),
    end: new Date(),
  });
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  registerLocale('en-GB', enGB);
  setDefaultLocale('en-GB');

  const currentDate = new Date();
  const currentDateString = currentDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const datePickerRef = useRef(null);

  return (
    <FormWrap>
      <ImageContainer>
        {localUserData.profilePicture ? (
          <UserImage src={localUserData.profilePicture} alt="User Profile" />
        ) : (
          <UserImage src={user.avatarURL}></UserImage>
        )}
        <Upload
          type="file"
          accept="image/*"
          onChange={e => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = event => {
                setLocalUserData({
                  ...localUserData,
                  profilePicture: event.target.result,
                });
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <Icon>
          <use href={icon + '#icon-plus'}></use>
        </Icon>
      </ImageContainer>
      <UserInfoWrap>
        <UserName>{user.name}</UserName>
        <UserStatus>{t('user')}</UserStatus>
      </UserInfoWrap>
      <Formik
        initialValues={localUserData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <>
            <Form autoComplete="off">
              <InputWrapperL className="left-column">
                <FieldWrap
                  className={`${
                    formik.touched.name && formik.errors.name ? 'error' : ''
                  }`}
                >
                  <Label>{t('user_name')}:</Label>
                  <Input id="name" name="name" placeholder={t('user_name')} />
                  <ErrorText name="name" component="div" />
                </FieldWrap>
                <FieldWrap>
                  <Label>{t('birthday')}:</Label>
                  <StyledDatePickerInputWrapper>
                    <DatePicker
                      className={`${
                        formik.touched.birthday && formik.errors.birthday
                          ? 'error'
                          : formik.touched.birthday && !formik.errors.birthday
                          ? 'success'
                          : ''
                      }`}
                      ref={datePickerRef}
                      formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                      selected={localUserData.birthday}
                      onChange={date =>
                        setLocalUserData({ ...localUserData, birthday: date })
                      }
                      locale="en-GB"
                      dateFormat="dd/MM/yyyy"
                      calendarStartDay={1}
                      id="birthday"
                      name="birthday"
                      type="birthday"
                      placeholderText={`Select your birthday (current date: ${currentDateString})`}
                      onChangeRaw={e => {
                        e.preventDefault();
                        setLocalUserData({
                          ...localUserData,
                          birthday: new Date(e.target.value),
                        });
                      }}
                      renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                      }) => (
                        <div className="datepicker_nav">
                          <button
                            className="datepicker_btn"
                            type="button"
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                          >
                            {'<'}
                          </button>
                          <select
                            className="datepicker_select"
                            value={getYear(date)}
                            onChange={({ target: { value } }) =>
                              changeYear(value)
                            }
                          >
                            {years.map(option => (
                              <option key={option} value={getYear(option)}>
                                {getYear(option)}
                              </option>
                            ))}
                          </select>
                          <select
                            className="datepicker_select"
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                              changeMonth(months.indexOf(value))
                            }
                          >
                            {months.map(option => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <button
                            className="datepicker_btn"
                            type="button"
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                          >
                            {'>'}
                          </button>
                        </div>
                      )}
                    />
                    <button
                      className="datepicker_icon_button"
                      type="button"
                      onClick={() => {
                        if (datePickerRef.current) {
                          datePickerRef.current.setOpen(true);
                        }
                      }}
                    ></button>
                    <BdayIcon>
                      <use href={icon + '#icon-chevron-down'}></use>
                    </BdayIcon>
                  </StyledDatePickerInputWrapper>
                  <ErrorText name="birthday" component="div" />
                </FieldWrap>
                <FieldWrap
                  className={`${
                    formik.touched.email && formik.errors.email ? 'error' : ''
                  }`}
                >
                  <Label>{t('email')}:</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <ErrorText name="email" component="div" />
                </FieldWrap>
              </InputWrapperL>
              <InputWrapperR className="right-column">
                <FieldWrap>
                  <Label>{t('phone')}:</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="38 (097) 256 34 77"
                  />
                  <ErrorText name="phone" component="div" />
                </FieldWrap>
                <FieldWrap>
                  <Label>{t('skype')}:</Label>
                  <Input
                    id="skype"
                    name="skype"
                    type="skype"
                    placeholder={t('enter_skype')}
                  />
                  <ErrorText name="skype" component="div" />
                </FieldWrap>
                <FieldWrap>
                  <Label htmlFor="password">{t('password')}:</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={t('change_pass')}
                  />
                  <ErrorText name="password" component="div" />
                </FieldWrap>
              </InputWrapperR>
            </Form>
            <SaveChangesBtn type="submit" disabled={formSubmitted}>
              {t('save_changes')}
            </SaveChangesBtn>

            <DatePickerWrapperStyles />
          </>
        )}
      </Formik>
    </FormWrap>
  );
};

export default UserForm;
