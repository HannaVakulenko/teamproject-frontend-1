import styled, { createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { device } from 'constants';
const { tablet } = device;

export const Container = styled.div`
  display: flex;
`;

export const ForDatePicker = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const DatePickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 10px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.button`
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  min-width: 109px;
  height: 30px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
  background-color: #3e85f3;
  color: #ffffff;
  border: 0;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;

  @media (min-width: 376px) and (max-width: 768px) {
    padding: 8px 12px 8px 12px;
    margin-right: 8px;
    min-width: 121px;
    height: 34px;

    font-size: 16px;
    line-height: 1.1;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 8px 12px 8px 12px;
    margin-right: 8px;
    min-width: 125px;
    height: 34px;

    font-size: 16px;
    line-height: 1.1;
  }
`;

export const ButtonDecrease = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 30px;
  border-radius: 8px 0px 0px 8px;

  padding: 8px 12px 8px 12px;
  border: ${p => p.theme.buttonInDecBorder};
  background-color: ${p => p.theme.secondaryBgColor};

  @media (min-width: 376px) and (max-width: 768px) {
    width: 38px;
    height: 34px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 38px;
    height: 34px;
  }
`;

export const ButtonIncrease = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 30px;
  border-radius: 0px 8px 8px 0px;

  padding: 8px 12px 8px 12px;
  border: ${p => p.theme.buttonInDecBorder};
  background-color: ${p => p.theme.secondaryBgColor};

  @media (min-width: 376px) and (max-width: 768px) {
    width: 38px;
    height: 34px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 38px;
    height: 34px;
  }
`;

export const Icon = styled.svg``;

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

/* .react-datepicker-popper {
  position: absolute;
  z-index: 9999; /* При необходимости задайте другой z-index */
  top: 100%; /* Позиционирование под инпутом */
  left: 0; Выравнивание календаря с левой границей инпута */
/* } */

.react-datepicker {
  border: none !important;
   border-radius: 16px !important;

  position: absolute !important;

  top: 50% !important; 
  left: 50% !important;

  z-index: 2 !important; 

  @media (min-width: 376px) and (max-width: 768px) {

  top: 50% !important; 
  left: 50% !important;

  z-index: 2 !important; 
  }

  @media (min-width: 769px) and (max-width: 1440px) {

  top: 50% !important; 
  left: 50% !important;
  transform: translate(-50%) !important;
  z-index: 2 !important; 
  }

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
 color: ${p => p.theme.mainAccentColor} !important;
 background-color: ${p => p.theme.buttonTextColor}  !important; 

  @media (min-width: ${tablet}px) {
     width: 48px !important;
height: 48px !important;
    padding: 12px !important;
  }
   }

   .react-datepicker__day--keyboard-selected, .react-datepicker__day--today {
     color: ${p => p.theme.mainAccentColor} !important;
 background-color: ${p => p.theme.buttonTextColor}  !important; 
   }

 .react-datepicker__day--selected, .react-datepicker__day--today {opacity:1 !important;}


 .react-datepicker__day-name {
    color: ${p => p.theme.buttonTextColor} !important;
  }

  .react-datepicker__month {
 @media (min-width: ${tablet}px) {
    margin: auto !important;
    }

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
     pointer-events: none; !important;
   }

   .react-datepicker__day--weekend:not(.react-datepicker__day--outside-month):not(.react-datepicker__day--keyboard-selected) {
     color: ${p => p.theme.buttonTextColor} ;
     opacity: 0.35;
}


   .react-datepicker__day--weekend:not(.react-datepicker__day--outside-month):not(.react-datepicker__day--keyboard-selected):hover,   .react-datepicker__day--weekend:not(.react-datepicker__day--outside-month):not(.react-datepicker__day--keyboard-selected):focus {   color:  ${p =>
     p.theme.mainAccentColor} !important;
     background-color: white  !important; 
         opacity: 1 !important;
 border-radius: 50% !important;}
.react-datepicker__current-month{color:#FFFFFF;}


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
