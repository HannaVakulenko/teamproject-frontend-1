import styled from 'styled-components';
import { Link } from 'react-router-dom';
import goose from '../../assets/images/404-mob-1x.png';
import goosetabl from '../../assets/images/404-tabl-desk-1x.png';

import { device } from 'constants';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100hv; */
  width: 100%;
  padding-right: 47px;
  padding-left: 47px;
  padding-bottom: 246px;
  padding-top: 264px;
  background-color: ${p => p.theme.colors.mainBGColor};

  @media screen and (min-width: ${device.tablet}px) {
    padding-right: 132px;
    padding-left: 132px;
    padding-bottom: 247px;
    padding-top: 270px;
  }

  @media screen and (min-width: ${device.desktop}px) {
    padding-right: 468px;
    padding-left: 469px;
    padding-bottom: 262px;
    padding-top: 184px;
  }
`;

export const NotFoundTitle = styled.p`
  font-size: 100px;
  font-weight: 700;
  line-height: 1.5;
  color: ${p => p.theme.colors.blue1Color};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  user-select: none;

  @media screen and (min-width: ${device.tablet}px) {
    font-size: 200px;
    line-height: 1.25;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  position: relative;

  @media screen and (min-width: ${device.tablet}px) {
    gap: 210px;
  }
`;

export const NotFoundText = styled.p`
  width: 281px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  text-align: center;
  color: rgba(17, 17, 17, 0.7);
  user-select: none;

  @media screen and (min-width: ${device.tablet}px) {
    margin-top: 40px;
    width: 387px;
  }
`;

export const NotFoundLink = styled(Link)`
  display: inline-block;
  min-width: 153px;
  height: 46px;
  margin-top: 24px;
  padding: 14px 32px;

  color: ${p => p.theme.colors.whiteColor};
  text-decoration: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.02em;
  cursor: pointer;

  border: none;
  border-radius: 16px;
  background-color: ${p => p.theme.colors.blue1Color};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue3Color};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: ${device.tablet}px) {
    margin-top: 32px;
    min-width: 211px;
    height: 56px;
    font-size: 18px;
    line-height: 1.33;
    padding: 16px 48px;
  }
`;

export const NotFoundImg = styled.div`
  width: 100px;
  height: 170px;
  position: absolute;
  background-position: center;
  background-image: url(${goose});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;

  @media screen and (min-width: ${device.tablet}px) {
    width: 350px;
    height: 400px;
    background-image: url(${goosetabl});
  }
`;