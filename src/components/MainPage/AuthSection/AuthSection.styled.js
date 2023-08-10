import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrappAuthSection = styled.div`
  height: 100vh;
  background-color: #3e85f3;
  text-align: center;
`;

export const Img = styled.img`
  margin-top: 256px;
`;

export const HeroTitle = styled.h1`
  margin-top: 2px;

  color: #fff;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter, sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.09;
`;

export const LoginNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 131px;
  height: 46px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 32px;

  border-radius: 16px;
  background: #fff;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #3e85f3;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.28px;

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #cae8ff;
    box-shadow: -2px -2px 5px rgba(136, 165, 191, 0.48),
      2px 2px 5px rgba(136, 165, 191, 0.48);
  }
`;

export const RegisterNavLink = styled(NavLink)`
  display: block;
  margin-top: 16px;
  color: #fff;
  text-shadow: 0px 9px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fff;
    text-shadow: 2px 2px 5px rgba(136, 165, 191, 0.48),
      2px 2px 5px rgba(136, 165, 191, 0.48);
  }
`;
