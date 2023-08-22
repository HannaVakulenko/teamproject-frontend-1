import styled, { createGlobalStyle } from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { device } from 'constants';
const { tablet, desktop } = device;

export const FormWrap = styled.div`
  @media (max-width: ${tablet - 1}px) {
    display: grid;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    padding: 40px 0;
    border-radius: 16px;
    background-color: ${p => p.theme.secondaryBgColor};
  }

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    position: static;
    border-radius: 16px;
    padding: 40px 0;
    background-color: ${p => p.theme.secondaryBgColor};
  }

  @media (min-width: ${desktop}px) {
    background-color: ${p => p.theme.secondaryBgColor};
    position: static;
    padding: 60px 0;
    border-radius: 16px;
    gap: 24px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const BoxWrap = styled.div`
  @media (max-width: ${desktop - 1}px) {
    display: flex;
    gap: 18px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: ${desktop}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;

export const FieldWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &.empty input {
    border-color: 1px solid #11111126;
  }

  &.error label {
    color: ${p => p.theme.authFieldOnErrorColor};
  }

  &.error input {
    border-color: ${p => p.theme.authFieldOnErrorColor};
  }

  &.success label {
    color: ${p => p.theme.authFieldOnSuccessColor};
  }

  &.success input {
    border-color: ${p => p.theme.authFieldOnSuccessColor};
  }

  @media (min-width: ${desktop}px) {
    gap: 8px;
  }
`;

export const Label = styled.label`
  color: ${p => p.theme.userFormLabelColor};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

export const Input = styled(Field)`
  color: ${p => p.theme.mainTextColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.userFormInputBorderColor};
  width: 299px;
  height: 42px;
  padding: 8px;
  outline: none;
  background-color: ${props =>
    props.hasContent ? 'transparent' : p => p.theme.secondaryBgColor};
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: ${p => p.theme.mainTextColor};
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  &:hover,
  &:focus {
    border-color: ${p => p.theme.mainTextColor};
  }

  @media (min-width: ${tablet}px) {
    width: 354px;
    height: 46px;
    font-size: 16px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const SuccessText = styled.div`
  margin-top: 8px;
  margin-left: 18px;
  font-size: 12px;
  color: ${p => p.theme.authFieldOnSuccessColor};
  line-height: 1.16;
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

  @media (min-width: ${tablet}px) {
    width: 124px;
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
  border: 2px solid #3e85f3;

  @media (min-width: ${tablet}px) {
    width: 124px;
    height: 124px;
  }
`;

export const Upload = styled.input`
  opacity: 0;
  position: absolute;
  bottom: -5%;
  left: 70%;
  transform: translateX(-50%);
  width: 34px;
  height: 34px;
  cursor: pointer;
  border-radius: 10%;
  background-color: transparent;
  z-index: 4;

  @media (min-width: ${tablet}px) {
    width: 60px;
    height: 60px;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  bottom: -3%;
  left: 70%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  fill: none;
  background-color: #3e85f3;
  stroke: white;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;

  @media (min-width: ${tablet}px) {
    width: 24px;
    height: 24px;
    bottom: -3%;
    left: 70%;
  }
`;

export const BdayIcon = styled.svg`
  position: absolute;
  right: 15px;
  width: 14px;
  height: 14px;
  fill: none;
  height: 14px;
  stroke: ${p => p.theme.mainTextColor};
  border-radius: 50%;
  z-index: 2;

  @media (min-width: ${tablet}px) {
    width: 18px;
    height: 18px;
    position: absolute;
    top: auto;
    transform: translateY(0);
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
  margin-bottom: 40px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    margin-top: 20px;
    gap: 8px;
  }

  @media (min-width: ${desktop}px) {
    display: grid;
    grid-column: 1 / span 2;
    text-align: center;
    margin-top: 20px;
  }
`;

export const UserName = styled.span`
  color: ${p => p.theme.secondaryTextColor};
  font-size: 14px;
  font-weight: 700;

  @media (min-width: ${tablet}px) {
    font-size: 18px;
  }
`;

export const UserStatus = styled.span`
  color: ${p => p.theme.userFormStatusColor};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: ${tablet}px) {
    font-size: 14px;
  }
`;

export const SaveChangesBtn = styled.button`
  display: block;
  width: 195px;
  margin-top: 40px;
  padding: 14px 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 16px;
  color: ${p => p.theme.buttonTextColor};
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
    margin-top: 88px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledDatePickerInputWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const InputWrapperL = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    gap: 24px;
  }

  @media (min-width: ${desktop}px) {
    gap: 24px;
    display: grid;
    justify-content: end;
  }
`;

export const InputWrapperR = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
    gap: 24px;
  }

  @media (min-width: ${desktop}px) {
    gap: 24px;
    display: grid;
    align-content: flex-start;
    align-items: flex-start;
  }
`;

export const DatePickerWrapperStyles = createGlobalStyle`

.datepicker_icon_button {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0; 
  z-index: 4;
}

.datepicker_nav {
   background-color:${p => p.theme.mainAccentColor};
        margin: 10px;
        display: flex;
        justify-content: center;

         @media (min-width: ${tablet}px) {
          gap: 16px;
         }
        }

.datepicker_select {
  font-size: 16px !important;
background-color: ${p => p.theme.mainAccentColor} !important;
  border: none !important;
  color:${p => p.theme.buttonTextColor} !important; 
  outline: none !important;

 @media (min-width: ${tablet}px) {
font-size: 24px !important;
line-height: 24px!important;
 }

}

.datepicker_btn {
background-color:${p => p.theme.mainAccentColor};
  border: none; 
  color:${p => p.theme.buttonTextColor};
   outline: none;

   @media (min-width: ${tablet}px) {
width: 50px !important;
 }
}

.react-datepicker {
  border: none !important;
   border-radius: 16px !important;
}

.react-datepicker__header {
    border-top-left-radius: 16px !important;
    border-top-right-radius: 16px !important;
    border-bottom-left-radius: 0; 
    border-bottom-right-radius: 0; 
    border-color: #FFFFFF33 !important;
    background-color: ${p => p.theme.mainAccentColor} !important;
   
}

.react-datepicker__day-name {
  font-size: 14px !important;
line-height: 18px !important;

     @media (min-width: ${tablet}px) {
      width: 48px !important;
      margin: auto !important;
      font-size: 18px !important;
line-height: 24px !important;
padding: 12px !important;
     }
}

.react-datepicker__day--selected {
    background-color: ${p => p.theme.buttonTextColor}  !important; 
    color: ${p => p.theme.mainAccentColor} !important;
    border-radius: 50% !important;

    @media (min-width: ${tablet}px) {
      width: 48px !important;
      height: 48px !important;
      padding: 12px!important;
    }
}

  .react-datepicker__day {
    color: ${p => p.theme.buttonTextColor}  !important;
     border-radius: 50% !important;

      @media (min-width: ${tablet}px) {
        padding: 12px!important;
         width: 48px !important;
       height: 48px !important;
    font-size: 18px !important;
     line-height: 24px !important;
     margin: auto !important;
      }
    
  }

   .react-datepicker__day:hover {
     color:  ${p => p.theme.mainAccentColor} !important;
     background-color: ${p => p.theme.buttonTextColor}  !important; 
 border-radius: 50% !important;
     @media (min-width: ${tablet}px) {
       width: 48px !important;
       height: 48px !important;
    padding: 12px !important;
     }

   }

   .react-datepicker__day.react-datepicker__day--selected {
    opacity: 1 !important;
 color: ${p => p.theme.mainAccentColor} !important;
 background-color: ${p => p.theme.buttonTextColor}  !important; 

  @media (min-width: ${tablet}px) {
     width: 48px !important;
height: 48px !important;
    padding: 12px !important;
  }
   }

   .react-datepicker__day--keyboard-selected {
     color: ${p => p.theme.mainAccentColor} !important;
 background-color: ${p => p.theme.buttonTextColor}  !important; 
   }


 .react-datepicker__day-name {
    color: ${p => p.theme.buttonTextColor} !important;
  }

  .react-datepicker__month {
 @media (min-width: ${tablet}px) {
    margin: auto !important;
    }

  }

  .react-datepicker__day--weekend {
     opacity: 0.35 !important;
  }

.react-datepicker__day--weekend:hover {
  opacity: 1 !important;
}

.react-datepicker__day--weekend.react-datepicker__day--today {
  opacity: 1 !important;
}

  .react-datepicker__month-container{
     background-color: ${p => p.theme.mainAccentColor} !important;
    border: none  !important;
    border-radius: 16px !important;

    @media (min-width: ${tablet}px) {
      padding: 9px 18px;
      width: 372px !important;
    }
  }

   .react-datepicker__day--outside-month {
     color: ${p => p.theme.buttonTextColor} !important;
     opacity: 0% !important;
     pointer-events: none !important;
   }

   .react-datepicker__day-name:nth-child(6),
.react-datepicker__day-name:nth-child(7) {
     color: ${p => p.theme.buttonTextColor} !important;
     opacity: 0.35 !important;
}

input {
 color: ${p => p.theme.mainTextColor};
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.userFormInputBorderColor}; 
  width: 299px;
  height: 42px;
  padding: 8px;
  outline: none;
  background-color: ${props =>
    props.hasContent ? 'transparent' : p => p.theme.secondaryBgColor};
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-weight: normal;
  }

  &:hover,
  &:focus {
    border-color: ${p => p.theme.mainTextColor};
  }

   @media (min-width: ${tablet}px) {
    width: 354px;
  height: 46px;
   font-size: 16px;
   }
  }
`;
