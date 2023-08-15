// src/components/AccountPage/UserForm/UserForm.styled.js
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  width: 375px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 335px;
  height: 663px;
  padding: 30px;
  border-radius: 16px;
  margin: 95px 20px 40px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const Label = styled.label`
  color: grey;
`;

export const Input = styled(Field)`
  color: #111;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  width: 299px;
  height: 42px;
  padding: 8px;
  margin-bottom: 10px;
  background-color: ${props => (props.hasContent ? 'transparent' : 'white')};

  &::placeholder {
    font-weight: normal;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -8%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

// export const Upload = styled.input`
//   position: absolute;
//   bottom: -2%;
//   left: 70%;
//   transform: translateX(-50%);
//   /* width: 20px; */
//   /* height: 20px; */
//   /* border-radius: 50%; */
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
// `;

export const Upload = styled.input`
  opacity: 0;
  position: absolute;
  bottom: -2%;
  left: 70%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  z-index: 3;
`;

export const Icon = styled.svg`
  position: absolute;
  bottom: -2%;
  left: 70%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  fill: red;
  background-color: red;
  border-radius: 50%;
  z-index: 2;
`;

// export const Icon = styled.svg`
//   position: absolute;
//   bottom: -2%;
//   left: 70%;
//   transform: translateX(-50%);
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   stroke: ${p => (p.isActive ? p.theme.sidebarMainActiveColor : 'currentColor')};
//   fill: none;
// `;

export const PlaceholderContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.h6`
  font-size: 14px;
  font-weight: 700;
  margin-top: 30px;
`;

export const UserStatus = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const SaveChangesBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
