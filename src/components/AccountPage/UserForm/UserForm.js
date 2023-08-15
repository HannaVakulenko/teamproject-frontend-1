import React, { useState } from 'react';
import { FormContainer, Label, Input, ErrorText, ImageContainer, UserImage, Upload, Container, UserName, UserStatus, SaveChangesBtn} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { refreshUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import icon from 'assets/icons/symbol-defs.svg';
import { Icon } from './UserForm.styled';

const validationSchema = yup.object().shape({
  userName: yup.string().max(16, 'Max 16 characters').min(2, 'Min 2 characters'),
  email: yup.string().email('Invalid email'),
  birthday: yup.date(),
  phone: yup.string().matches(/^\+380\d{9}$/, 'Invalid phone format'),
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

  const handleSubmit = async (values, { setSubmitting }) => {
    setFormSubmitted(true);
    try {
      await dispatch(refreshUser());
      const formattedDate = values.birthday.toISOString().substr(0, 10);
    setLocalUserData({ ...values, birthday: formattedDate });
      setFormSubmitted(false);
      setSubmitting(false);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={localUserData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Container>
          <FormContainer>
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
                <use href={icon + '#icon-user-check-01'}></use>
              </Icon>
            </ImageContainer>
            <UserName>Name</UserName>
            <UserStatus>User</UserStatus>
            <Form>
              <Label>User Name:</Label>
              <Input type="text" name="userName" placeholder="User Name" />
              <ErrorText name="userName" component="div" />

              <Label>Birthday:</Label>
              <Input type="date" name="birthday" />
              <ErrorText name="birthday" component="div" />

              <Label>Email:</Label>
              <Input type="email" name="email" placeholder="Email" />
              <ErrorText name="email" component="div" />

              <Label>Phone:</Label>
              <Input type="text" name="phone" placeholder="+380971234567" />
              <ErrorText name="phone" component="div" />

              <Label>Skype:</Label>
              <Input
                type="text"
                name="skype"
                placeholder="Enter your Skype ID"
              />
              <ErrorText name="skype" component="div" />
            </Form>
            <SaveChangesBtn
              type="submit"
              disabled={!dirty || !isValid || isSubmitting || formSubmitted}
            >
              Save changes
            </SaveChangesBtn>
          </FormContainer>
        </Container>
      )}
    </Formik>
  );
};

export default UserForm;
