import { AddFeedbackModal } from 'components/MainLayout';
import { ContainerMainPage } from '../Description/Description.styled';

const { ReviewsTitle, WrapReviews, Slider } = require('./ReviewsSlider.styled');

const ReviewsSlider = () => {
  return (
    <ContainerMainPage>
      <WrapReviews>
        <ReviewsTitle>Reviews</ReviewsTitle>
        <Slider>
          <AddFeedbackModal>
            
          </AddFeedbackModal>
        </Slider>
      </WrapReviews>
    </ContainerMainPage>
  );
};
export default ReviewsSlider;
