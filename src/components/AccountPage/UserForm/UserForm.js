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
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth, eachYearOfInterval } from 'date-fns';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import { useRef } from 'react';
import { updateUserAccount } from 'redux/auth/operations';

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .max(16, 'Max 16 characters')
    .min(2, 'Min 2 characters'),
  email: yup.string().email('Invalid email'),
  birthday: yup.date(),
  phone: yup.string(),
  skype: yup.string().max(16, 'Max 16 characters').min(5, 'Min 5 characters'),
});

const UserForm = () => {
  const user = useSelector(selectUser);
  // console.log(user);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userBirthday, setUserBirthday] = useState(user.birthday || new Date());
  const [userAvatar, setUserAvatar] = useState(user.avatarURL);

  const handleSubmit = values => {
    console.log({
      name: values.userName,
      email: values.email,
      birthday: userBirthday,
      phone: values.phone,
      skype: values.skype,
      avatarURL: userAvatar,
    });
    setFormSubmitted(true);
    try {
         dispatch(updateUserAccount({
          name: values.userName,
          email: values.email,
          birthday: userBirthday,
          phone: values.phone,
          skype: values.skype,
          avatarURL: userAvatar,
      }));
    } catch (error) {
      console.error('Submission error:', error);
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
        <UserImage src={userAvatar} alt="User Profile" />
        <Upload
          type="file"
          accept="image/*"
          onChange={e => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = event => {
                setUserAvatar(event.target.result);
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
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        <Form autoComplete="off">
          <InputWrapperL className="left-column">
            <FieldWrap>
              <Label>User Name:</Label>
              <Input type="text" name="userName" placeholder="User Name" />
              <ErrorText name="userName" component="div" />
            </FieldWrap>

            <FieldWrap>
              <Label>Birthday:</Label>
              <StyledDatePickerInputWrapper>
                <DatePicker
                  name="birthday"
                  ref={datePickerRef}
                  formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                  selected={userBirthday}
                  onChange={date => setUserBirthday(date)}
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
                        onChange={({ target: { value } }) => changeYear(value)}
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

            <FieldWrap>
              <Label>Email:</Label>
              <Input type="email" name="email" placeholder="Email" />
              <ErrorText name="email" component="div" />
            </FieldWrap>
          </InputWrapperL>

          <InputWrapperR className="right-column">
            <FieldWrap>
              <Label>Phone:</Label>
              <Input
                type="text"
                name="phone"
                placeholder="38 (097) 256 34 77"
              />
              <ErrorText name="phone" component="div" />
            </FieldWrap>

            <FieldWrap>
              <Label>Skype:</Label>
              <Input
                type="text"
                name="skype"
                placeholder="Enter your Skype ID"
              />
              <ErrorText name="skype" component="div" />
            </FieldWrap>
          </InputWrapperR>

          <SaveChangesBtn type="submit" disabled={formSubmitted}>
            Save changes
          </SaveChangesBtn>

          <DatePickerWrapperStyles />
        </Form>
      </Formik>
    </FormWrap>
  );
};

export default UserForm;