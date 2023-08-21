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
  BoxWrap,
} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { selectUser } from 'redux/auth/selectors';
import icon from 'assets/icons/symbol-defs.svg';
import { Icon } from './UserForm.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth, eachYearOfInterval } from 'date-fns';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import { useRef } from 'react';
import { updateUserAccount } from 'redux/auth/operations';
import Swal from 'sweetalert2';
import { phoneRegExp } from 'constants/phoneValidation';

const UserForm = () => {
  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .max(16, 'Max 16 characters')
      .min(2, 'Min 2 characters')
      .required('Name is required'),
    email: yup.string()
      .email('Email address must contain an "@" sign')
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/,
        'Must be a valid email'
      )
      .required('Email is required'),
    birthday: yup.date(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    skype: yup.string().max(16, 'Max 16 characters').min(5, 'Min 5 characters'),
    password: yup
      .string()
      .min(7, 'Must be at least 7 characters long'),
  });

  const user = useSelector(selectUser);
  let dataNorm;
  if (!user.birthday) {
    dataNorm = new Date();
  } else {
    dataNorm = new Date(user.birthday);
  }
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [userBirthday, setUserBirthday] = useState(dataNorm);

  const [userAvatar, setUserAvatar] = useState(user.avatarURL);
  const [userAvatarLocal, setUserAvatarLocal] = useState(user.avatarURL);

  const handleSubmit = async values => {

    const formData = new FormData();
    if (typeof userAvatar !== 'string') {
      formData.append('avatar', userAvatar);
    }
    if (values.email) {
      formData.append('email', values.email);
    }

    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.userName) {
      formData.append('name', values.userName);
    }
    if (values.password) {
      formData.append('password', values.password);
    }
    if (values.skype) {
      formData.append('skype', values.skype);
    }
    if (userBirthday) {
      formData.append('birthday', userBirthday);
    }

    setFormSubmitted(true);

    try {
      dispatch(updateUserAccount(formData));
      Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Your information has been successfully updated!',
      confirmButtonColor: '#3E85F3',
    });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User with this email address already exists!',
          confirmButtonColor: '#3E85F3',
        });
      }
    } finally {
      setFormSubmitted(false);
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
        <UserImage src={userAvatarLocal} alt="User Profile" />
        <Upload
          type="file"
          accept="image/*"
          onChange={e => {
            setUserAvatar(e.target.files[0]);
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = event => {
                setUserAvatarLocal(event.target.result);
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
        <UserStatus>User</UserStatus>
      </UserInfoWrap>

      <Formik
        initialValues={{
          userName: user.name,
          email: user.email,
          phone: user.phone || '',
          skype: user.skype || '',
          password: user.password || '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {formik => (
          <Form autoComplete="off">
            <BoxWrap>
              <InputWrapperL className="left-column">
                <FieldWrap className={`${formik.touched.userName && formik.errors.userName
                  ? 'error'
                  : ''
                  }`}>
                  <Label>User Name:</Label>
                  <Input id="userName" name="userName" placeholder="User Name" />
                  <ErrorText name="userName" component="div" />
                </FieldWrap>

                <FieldWrap>
                  <Label>Birthday:</Label>
                  <StyledDatePickerInputWrapper>
                    <DatePicker className={`${formik.touched.birthday && formik.errors.birthday
                      ? 'error'
                      : formik.touched.birthday && !formik.errors.birthday
                        ? 'success'
                        : ''
                      }`}

                      id="birthday"
                      name="birthday"
                      type="birthday"
                      ref={datePickerRef}
                      formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                      selected={userBirthday}
                      onChange={date => {
                        setUserBirthday(date);
                      }}
                      locale="en-GB"
                      dateFormat="dd/MM/yyyy"
                      calendarStartDay={1}
                      placeholderText={`Select your birthday (current date: ${currentDateString})`}
                      onChangeRaw={e => {
                        e.preventDefault();

                        setUserBirthday(new Date(e.target.value));
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

                <FieldWrap className={`${formik.touched.email && formik.errors.email
                  ? 'error'
                  : ''
                  }`}>
                  <Label>Email:</Label>
                  <Input type="text" name="email" placeholder="Email" />
                  <ErrorText name="email" component="div" />
                </FieldWrap>
              </InputWrapperL>

              <InputWrapperR className="right-column">
                <FieldWrap className={`${formik.touched.phone && formik.errors.phone
                  ? 'error'
                  : ''
                  }`}>
                  <Label>Phone:</Label>
                  <Input
                    type="phone"
                    name="phone"
                    placeholder="38 (097) 256 34 77"
                  />
                  <ErrorText name="phone" component="div" />
                </FieldWrap>

                <FieldWrap className={`${formik.touched.skype && formik.errors.skype
                  ? 'error'
                  : ''
                  }`}>
                  <Label>Skype:</Label>
                  <Input
                    name="skype"
                    type="text"
                    placeholder="Enter your Skype ID"
                  />
                  <ErrorText name="skype" component="div" />
                </FieldWrap>

                <FieldWrap className={`${formik.touched.password && formik.errors.password
                  ? 'error'
                  : ''
                  }`}>
                  <Label htmlFor="password">Password:</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Change your password"
                  />
                  <ErrorText name="password" component="div" />
                </FieldWrap>
              </InputWrapperR>
            </BoxWrap>

            <SaveChangesBtn type="submit" disabled={formSubmitted}>
              Save changes
            </SaveChangesBtn>

            <DatePickerWrapperStyles />
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
};

export default UserForm;