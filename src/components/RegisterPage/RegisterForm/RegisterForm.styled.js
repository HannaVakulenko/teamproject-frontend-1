import { styled } from 'styled-components';
import { Form as FormikForm, Field as FormField } from 'formik';

export const FormWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 8px;
  background-color: ${p => p.theme.secondaryBgColor};

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  color: ${p => p.theme.mainAccentColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Field = styled(FormField)`
  padding: 14px;
  font-size: 14px;
  line-height: 1.28;
  color: #111111;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  outline: none;

  &::placeholder {
    font-size: 14px;
    color: #dce3e5;
  }

  @media screen and (min-width: 768px) {
    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const FormButton = styled.button`
  margin-top: 8px;
  padding: 14px 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 16px;
  color: ${p => p.theme.secondaryBgColor};
  background-color: ${p => p.theme.mainAccentColor};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  border: transparent;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.mainAccentColorActive};
  }

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
