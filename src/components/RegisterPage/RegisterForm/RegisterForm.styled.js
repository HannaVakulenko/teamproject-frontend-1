import { styled } from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage } from 'formik';
import { device } from 'constants';
const { mobile, tablet } = device;

export const FormWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 8px;
  background-color: ${p => p.theme.secondaryBgColor};

  @media screen and (min-width: ${mobile}px) and (max-width: ${tablet - 1}px) {
    width: 335px;
  }
  @media screen and (min-width: ${device.tablet}px) {
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

  @media screen and (min-width: ${device.tablet}px) {
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${device.tablet}px) {
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

  @media screen and (min-width: ${device.tablet}px) {
    font-size: 14px;
  }
`;

export const FormField = styled(Field)`
  padding: 14px;
  font-size: 14px;
  line-height: 1.28;
  color: ${p => p.theme.colors.black2Color};
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${p => p.theme.colors.grey3Color};
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${p => p.theme.colors.black2Color};
  }

  &:focus {
    border-color: ${({ theme, errors, touched }) =>
      touched && !errors ? theme.greenColor : theme.redColor};
  }

  &::placeholder {
    font-size: 14px;
    color: ${p => p.theme.colors.grey2Color};
  }

  @media screen and (min-width: ${device.tablet}px) {
    &::placeholder {
      font-size: 16px;
    }
  }
`;

// export const ErrorText = styled(ErrorMessage)`
//   margin-top: 8px;
//   margin-left: 18px;
//   font-size: 12px;
//   color: ${p => p.theme.colors.redColor};
//   line-height: 1.16;
// `;

// export const SuccessText = styled.div`
//   margin-top: 8px;
//   margin-left: 18px;
//   font-size: 12px;
//   color: ${p => p.theme.colors.greenColor};
//   line-height: 1.16;
// `;

export const ErrorText = styled(ErrorMessage)`
  margin-top: 8px;
  margin-left: 18px;
  font-size: 12px;
  color: ${p => p.theme.colors.redColor};
  line-height: 1.16;
`;

export const SuccessText = styled.div`
  margin-top: 8px;
  margin-left: 18px;
  font-size: 12px;
  color: ${p => p.theme.colors.greenColor};
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

  @media screen and (min-width: ${device.tablet}px) {
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Icon = styled.svg`
  margin-left: 11px;
  stroke: currentColor;
  fill: none;
`;
