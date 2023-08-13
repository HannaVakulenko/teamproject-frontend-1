
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { fetchReviews } from 'redux/reviews/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviews } from 'redux/reviews/selectors';
import {
  ReviewContentBox,
  AvatarWrapper,
  AvatarImg,
  Rate,
  Name,
  ReviewSliderCard,
  ReviewText,
  SwiperNavBox,
  SwiperNavBtn,
  BackgroundName,
  UserNameIcon,
  Section,
  Container,
  SliderWrapper,
  Title,
} from './ReviewsSlider.styled';

import icon from 'assets/icons/symbol-defs.svg';

const rateIcon = (
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
);
const rateStyled = {
  itemShapes: rateIcon,
  activeFillColor: 'rgba(255, 172, 51, 1)',
  inactiveFillColor: 'rgba(206, 201, 193, 1)',
};

const ReviewsSlider = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  console.log('reviews:', reviews);
  const swiperRef = useRef(null);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    dispatch(fetchReviews({page:1, limit:8}));
  }, [dispatch]);

  function getInitials(name) {
    if (name) {
      const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return name;
    }
  }

  const slides = Array.isArray(reviews.reviews) ? reviews.reviews : [];
console.log('slides:', slides);
  return (
    <Section>
      <Container>
        <Title>REVIEWS</Title>
        <SliderWrapper>
          <Swiper
            initialSlide={1}
            slidesPerView={1}
            ref={swiperRef}
            autoplay={{ delay: 5000 }}
            navigation={{
              prevEl: '#my-prev-button',
              nextEl: '#my-next-button',
            }}
            modules={[Navigation]}
            direction={'horizontal'}
            autoHeight={true}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              1440: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
          >
           {slides.map((slide, index) => (
  <SwiperSlide key={index} virtualIndex={index}>
    <ReviewSliderCard>
      <ReviewContentBox>
        <AvatarWrapper>
          {slide.owner.avatarURL ? (
            <AvatarImg src={slide.owner.avatarURL} alt="UserPicture" />
          ) : (
            <BackgroundName className="initials">
              <UserNameIcon>{getInitials(slide.owner.name)}</UserNameIcon>
            </BackgroundName>
          )}
        </AvatarWrapper>
        <div>
          <Name>{slide.owner.name}</Name>
          <Rate>
            <Rating
              value={slide.rating}
              itemStyles={rateStyled}
              style={{ maxWidth: 110, gap: 4 }}
              readOnly
            />
          </Rate>
        </div>
      </ReviewContentBox>
      <ReviewText>{slide.review}</ReviewText>
    </ReviewSliderCard>
  </SwiperSlide>
           ))}
          </Swiper>
        </SliderWrapper>
        <SwiperNavBox>
          <SwiperNavBtn id="my-prev-button">
            <svg>
              <use href={icon + '#icon-Vector-2'}></use>
            </svg>
          </SwiperNavBtn>
          <SwiperNavBtn id="my-next-button">
             <svg>
              <use href={icon + '#icon-Vector-3'}></use>
            </svg>
          </SwiperNavBtn>
        </SwiperNavBox>
      </Container>
    </Section>
  );
};

export default ReviewsSlider;
