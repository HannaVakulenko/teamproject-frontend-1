import React, { useState } from 'react';
import { FormWrap, FieldWrap, Label, Input, BdayIcon, StyledDatePickerInputWrapper, InputWrapperL, InputWrapperR, StyledDatePickerInput, ErrorText, Form, ImageContainer, UserImage, Upload, UserInfoWrap, UserName, UserStatus, SaveChangesBtn,  DatePickerWrapperStyles} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Formik} from 'formik';
import * as yup from 'yup';
import { selectUser } from 'redux/auth/selectors';
import icon from 'assets/icons/symbol-defs.svg';
import { Icon } from './UserForm.styled';
import { useEffect } from 'react';
import { fetchUserAccount, refreshUser } from 'redux/auth/operations';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth, eachYearOfInterval } from 'date-fns';

const validationSchema = yup.object().shape({
  userName: yup.string().max(16, 'Max 16 characters').min(2, 'Min 2 characters'),
  email: yup.string().email('Invalid email'),
  birthday: yup.date(),
  phone: yup.string(), 
  skype: yup.string().max(16, 'Max 16 characters').min(5, 'Min 5 characters'),
});

const UserForm = () => {
   const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [localUserData, setLocalUserData] = useState({
    profilePicture: '',
    userName: '',
    email: '',
    birthday: new Date(),
    phone: '',
    skype: '',
  });

  useEffect(() => {
    dispatch(fetchUserAccount());
  }, [dispatch]);

  const handleSubmit = async (values) => {
  setFormSubmitted(true);
  try {
    setLocalUserData({ ...values });
    await dispatch(fetchUserAccount(localUserData));
    await dispatch(refreshUser(localUserData));
  } catch (error) {
    console.error('Submission error:', error);
  } finally {
    setFormSubmitted(false);
  }
  };
  
  const years = eachYearOfInterval({ start: new Date(1900, 0, 1), end: new Date() });
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  
   const currentDate = new Date();
  const currentDateString = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  
  return (
   <FormWrap>
       <ImageContainer>
              {localUserData.profilePicture ? (
                <UserImage
                  src={localUserData.profilePicture}
                  alt="User Profile"
                />
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
                <UserStatus>User</UserStatus>
                </UserInfoWrap>
    <Formik
      initialValues={localUserData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ dirty, isSubmitting }) => (
        <>
          <>
              <Form autoComplete="off">
                <InputWrapperL className="left-column">
              <FieldWrap>
              <Label>User Name:</Label>
                  <Input type="text" name="userName" placeholder="User Name"/>
                <ErrorText name="userName" component="div" />
                </FieldWrap>
              <FieldWrap>
                  <Label>Birthday:</Label>
                  <StyledDatePickerInputWrapper>
                 <StyledDatePickerInput
         selected={localUserData.birthday}
  onChange={date => setLocalUserData({ ...localUserData, birthday: date })}
                      dateFormat="dd/MM/yyyy"
                       placeholderText={`Select your birthday (current date: ${currentDateString})`}
  onChangeRaw={e => {
    e.preventDefault();
    setLocalUserData({
      ...localUserData,
      birthday: new Date(e.target.value),
    });
  }}
  renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
    <div
      style={{
        background: "#3E85F3",
        margin: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
              <button type="button" style={{
        background: "#3E85F3",
                border: "none", color: "white"
      }} onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <select  style={{
        background: "#3E85F3",
                border: "none", color: "white"
      }}
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={getYear(option)}>
                    {getYear(option)}
                  </option>
                ))}
              </select>
              <select style={{
        background: "#3E85F3",
                border: "none", color: "white"
      }}
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button type="button" style={{
        background: "#3E85F3",
                border: "none", color: "white"
      }} onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
      </button>
    </div>
  )}
                    />
                     <BdayIcon>
              <use href={icon + '#icon-chevron-down'}></use>
            </BdayIcon>
                    </StyledDatePickerInputWrapper>
              <ErrorText name="birthday" component="div" /></FieldWrap>
              <FieldWrap>
              <Label>Email:</Label>
              <Input type="email" name="email" placeholder="Email" />
                    <ErrorText name="email" component="div" />
                  </FieldWrap>
                </InputWrapperL>
                <InputWrapperR className="right-column">
              <FieldWrap>
              <Label>Phone:</Label>
              <Input type="text" name="phone" placeholder="38 (097) 256 34 77" />
              <ErrorText name="phone" component="div" /></FieldWrap>
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
              </Form>
               <SaveChangesBtn
              type="submit"
              disabled={!dirty || isSubmitting || formSubmitted}>
              Save changes
              </SaveChangesBtn>
              
              <DatePickerWrapperStyles />
          </>
        </>
      )}
      </Formik>
    </FormWrap>
    
  );
};

export default UserForm;
