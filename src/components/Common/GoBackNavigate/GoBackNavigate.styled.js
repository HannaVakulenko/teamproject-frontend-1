import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 10px 0 10px;
  text-align: center;
`;

export const AuthLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  color: ${p => p.theme.mainAccentColor};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.mainAccentColorActive};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.mainAccentColor};
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }

  @media screen and (min-width: ${device.tablet}px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
