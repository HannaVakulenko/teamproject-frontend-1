import { styled } from "styled-components";
import { Form as FormikForm, Field } from "formik";
import { device } from "constants";

export const FormWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.whiteColor};

  @media screen and (min-width: ${device.mobile}px) and (max-width: ${device.tablet - 1}px) {
    width: 335px;
  };
  @media screen and (min-width: ${device.tablet}px) {
    width: 480px;
    padding-left: 40px;
    padding-right: 40px;
  };
`;

export const FormTitle = styled.h1`
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  color: ${p => p.theme.colors.blue1Color};

  @media screen and (min-width: ${device.tablet}px) {
    margin-bottom: 40px;
    font-size: 24px;
  };
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${device.tablet}px) {
    gap: 18px;
  };
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  svg {
    position: absolute;
    right: 18px;
    top: 42px;
    fill: #E74A3B;
  };
`;

export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 600;

  @media screen and (min-width: ${device.tablet}px) {
    font-size: 14px;
  };
`;

export const FormField = styled(Field)`
  padding: 14px;
  font-size: 14px;
  line-height: 1.28;
  color: #111111;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.60);
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #111111;
  };

  &:valid {
    border-color: #3CBC81;
  };

  &:valid ~ span {
    display: block;
  };

  &:valid svg {
    display: none;
  };

  &:invalid[focused="true"] {
    border-color: #E74A3B;
  };

  &:invalid[focused="true"] ~ p {
    display: block;
  };

  &:invalid[focused="true"] svg {
    display: block;
  }
  
  &::placeholder {
    font-size: 14px;
    color: #DCE3E5;
  };

  @media screen and (min-width: ${device.tablet}px) {
    &::placeholder {
      font-size: 16px;
    };
  };
`;

export const ErrorText = styled.p`
  display: none;
  margin-top: 8px;
  margin-left: 18px;
  font-size: 12px;
  color: #E74A3B;
  line-height: 1.16;
`;

export const SuccessText = styled.span`
  display: none;
  margin-top: 8px;
  margin-left: 18px;
  font-size: 12px;
  color: #3CBC81;
  line-height: 1.16;
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 14px 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 16px;
  color: ${p => p.theme.colors.whiteColor};
  background-color: ${p => p.theme.colors.blue1Color};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  border: transparent;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    margin-left: 11px;
    stroke: currentColor;
    fill: none;
  };

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue3Color};
  };

  @media screen and (min-width: ${device.tablet}px) {
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;