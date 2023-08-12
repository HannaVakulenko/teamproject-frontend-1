import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { device } from "constants";

export const Wrapper = styled.div`
  padding-top: 18px;
  text-align: center;

  @media screen and (min-width: ${device.tablet}px) {
    padding-top: 24px;
  };
`;

export const AuthLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  color: ${p => p.theme.colors.blue1Color};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue3Color};
  }

  @media screen and (min-width: ${device.tablet}px) {
    font-size: 18px;
    line-height: 1.33;
  };
`;