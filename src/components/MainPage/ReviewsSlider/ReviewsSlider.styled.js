import styled from 'styled-components';
import { device } from 'constants';

export const ReviewSliderCard = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid #e7e5e5;
  padding: 24px;
  overflow-y: auto;

  @media (min-width: ${device.tablet}px) {
    padding: 32px 32px 50px 32px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    transition: 250ms ease-in-out;
    background-color: #cac8c89a;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #adadad;
  }

  @media (min-width: ${device.tablet}px) {
    gap: 18px;
    max-height: 372px;

    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid transparent;
  margin-right: 18px;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: ${p => p.theme.calendarTextColor};
`;

export const Rate = styled.div`
  width: 110px;
  height: 14px;
  margin-top: 11px;
`;

export const ReviewText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.7);
  @media (min-width: ${device.tablet}px) {
    margin-left: 68px;
  }
`;

export const ReviewContentBox = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  background-color: ${p => p.theme.buttonTextColor};
`;

export const SwiperNavBox = styled.div`
  width: 125px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${device.tablet}px) {
    width: 147px;
    height: 61px;
  }
`;

export const SwiperNavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    filter: drop-shadow(0px 5px 2px rgb(0 0 0 / 0.4));
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: ${device.tablet}px) {
    width: 61px;
    height: 61px;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const Section = styled.section`
  background-color: ${p => p.theme.buttonTextColor};
`;

export const SliderWrapper = styled.div`
  margin-bottom: 8px;
   @media (min-width: ${device.tablet}px) {
    margin-bottom: 18px;
  }
   @media (min-width: ${device.desktop}px) {
   margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  color: ${p => p.theme.mainAccentColor};
  text-align: center;
  margin: 0 auto 40px auto;
  @media (min-width: ${device.tablet}px) {
    font-size: 40px;
    line-height: 1.1;
    margin: 0 auto 50px auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${device.mobile}px) {
    width: 375px;
    padding-bottom:64px;
  }
  @media (min-width: ${device.tablet}px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
     padding-bottom:100px;
  }
  @media (min-width: ${device.desktop}px) {
    width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
     padding-bottom:118x;
  }
`;
