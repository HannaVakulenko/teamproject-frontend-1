import styled, { createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  display: flex;
`;

export const ForDatePicker = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: ;
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 109px;
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

  @media (min-width: 376px) and (max-width: 768px) {
    padding: 8px 12px 8px 12px;
    margin-right: 8px;
    width: 121px;
    height: 34px;

    font-size: 16px;
    line-height: 1.1;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 8px 12px 8px 12px;
    margin-right: 8px;
    width: 125px;
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
  border: 1px;
  padding: 8px 12px 8px 12px;

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
  border: 1px;
  padding: 8px 12px 8px 12px;

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



.react-datepicker{ 
  position: absolute !important;

  top: 735% !important; 
  left: 150% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 2 !important; 

  @media (min-width: 376px) and (max-width: 768px) {

  top: 735% !important; 
  left: 150% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 2 !important; 
  }

}

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

  @media (min-width: 376px) and (max-width: 768px) {   
 }
  @media (min-width: 769px) and (max-width: 1440px) {
}
  background-color: #3E85F3 !important;
  border: none  !important;
  border-radius: 16px !important;
padding: 9px 19px 19px 19px;
  }

  .react-datepicker__navigation{margin-top:9px;}
  .react-datepicker__day{}

   .react-datepicker__current-month{ 
    color: white !important;
  }
`;
