import styled, { createGlobalStyle } from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { device } from 'constants';
const { tablet, desktop } = device;

export const FormWrap = styled.div`
  position: relative;
  padding: 40px 20px;
  border-radius: 16px;
  background-color: ${p => p.theme.secondaryBgColor};

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    display: block;
    margin-top: 38px;
    padding: 40px 175px;
  }

  @media (min-width: ${desktop}px) {
    display: block;
    margin-top: 38px;
    padding: 60px 165px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;

  @media (min-width: ${desktop}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;

export const StyledDatePickerInput = styled(DatePicker)`
  color: #111;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  width: 299px;
  height: 42px;
  padding: 8px;
  outline: none;
  background-color: ${props => (props.hasContent ? 'transparent' : 'white')};
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-weight: normal;
  }

  &:hover,
  &:focus {
    border-color: #111111;
  }
`;

export const FieldWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${desktop}px) {
    gap: 8px;
  }
`;

export const Label = styled.label`
  color: #111;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
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
  outline: none;
  background-color: ${props => (props.hasContent ? 'transparent' : 'white')};
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: #111;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  &:hover,
  &:focus {
    border-color: #111111;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -6%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${desktop}px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const UserImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;

  @media (min-width: ${tablet}px) {
    width: 124px;
    height: 124px;
  }
`;

export const Upload = styled.input`
  opacity: 0;
  position: absolute;
  bottom: -3%;
  left: 70%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  z-index: 3;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 18px;
    left: 57%;
    bottom: -3%;
    height: 18px;
  }

  @media (min-width: ${desktop}px) {
    width: 18px;
    height: 18px;
    left: 53%;
    bottom: -3%;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  bottom: -3%;
  left: 70%;
  transform: translateX(-50%);
  width: 14px;
  fill: none;
  background-color: #3e85f3;
  height: 14px;
  stroke: #3e85f3;
  border-radius: 50%;
  z-index: 2;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    width: 18px;
    left: 57%;
    bottom: -3%;
    height: 18px;
  }

  @media (min-width: ${desktop}px) {
    width: 18px;
    height: 18px;
    left: 53%;
    bottom: -3%;
  }
`;

export const BdayIcon = styled.svg`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  fill: none;
  height: 14px;
  stroke: #111111;
  border-radius: 50%;
  z-index: 2;

  @media (min-width: ${desktop}px) {
    position: relative;
    top: auto;
    transform: translateY(0);
    right: 20px;
  }
`;

export const PlaceholderContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 18px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    margin-top: 20px;
    gap: 8px;
  }

  @media (min-width: ${desktop}px) {
    grid-column: 1 / span 2;
    text-align: center;
    margin-top: 20px;
  }
`;

export const UserName = styled.span`
  color: #343434;
  font-size: 14px;
  font-weight: 700;
`;

export const UserStatus = styled.span`
  color: #343434;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 40px;
`;

export const SaveChangesBtn = styled.button`
  display: block;
  width: 195px;
  margin-top: 22px;
  padding: 14px 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 16px;
  color: ${p => p.theme.secondaryBgColor};
  background-color: ${p => p.theme.mainAccentColor};
  border: transparent;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: auto;
  margin-right: auto;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.mainAccentColorActive};
  }

  @media (min-width: ${desktop}px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledDatePickerInputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  @media (max-width: ${desktop}px) {
    gap: 18px;
  }
`;

export const DatePickerWrapperStyles = createGlobalStyle`

.react-datepicker {
  border: none !important;
   border-radius: 16px !important;
}

  .react-datepicker__header {
    border-radius: 16px !important;
    background-color: #3E85F3 !important;
    border-bottom: none !important;
  }

  .react-datepicker__day--selected {
    background-color: white !important;
    color:  #3E85F3 !important;
    border-radius: 50% !important;
  }

  .react-datepicker__day {
    color: white !important;
     border-radius: 50% !important;
  }

   .react-datepicker__day.react-datepicker__day--selected {
 color:  #3E85F3 !important;
   }

 .react-datepicker__day-name {
    color: white !important;
  }

  .react-datepicker__month-container{
     background-color: #3E85F3 !important;
    border: none  !important;
    border-radius: 16px !important;
  }


`;
