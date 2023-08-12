import styled from 'styled-components';
import { device } from 'constants';

export const WrapReviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewsTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
  text-transform: uppercase;
  color: ${p => p.theme.mainAccentColor};

  @media (min-width: ${device.tablet}px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 50px;
  }
`;

export const Slider = styled.div`
  width: 100%;
  height: 252px;
  border: solid 1px ${p => p.theme.mainAccentColor};

  @media (min-width: ${device.tablet}px) {
    width: 580px;
    height: 266px;
  }
  @media (min-width: ${device.desktop}px) {
    width: 100%;
    height: 280px;
  }
`;
