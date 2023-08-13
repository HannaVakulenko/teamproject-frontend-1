import styled from 'styled-components';


export const BackgroundName = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(228, 216, 30, 0.7147233893557423) 9%,
    rgba(241, 255, 13, 0.8155637254901961) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserNameIcon = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  color: black;
`;
export const ReviewSliderCard = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid #e7e5e5;
  padding: 24px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
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
  border: 1px solid #616161;
  margin-right: 18px;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Name = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #13151a;
`;

export const Rate = styled.div`
  width: 110px;
  height: 14px;
  margin-top: 11px;
`;

export const ReviewText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(17, 17, 17, 0.7);
  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
`;

export const ReviewContentBox = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  background-color: #FFFFFF;
`;

export const SwiperNavBox = styled.div`
  width: 125px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
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
  height: 46px;
  cursor: pointer;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    filter: drop-shadow(0px 5px 2px rgb(0 0 0 / 0.4));
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    width: 61px;
    height: 48px;
  }
`;
export const Section = styled.div`
  background-color: #FFFFFF;
`;

export const Container = styled.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    width: 704px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 1157px;
    margin-bottom: 118px;
  }
`;

export const SliderWrapper = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Title = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  color: #3E85F3;
  text-align: center;
  margin: 0 auto 40px auto;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin: 0 auto 50px auto;
  }
`;