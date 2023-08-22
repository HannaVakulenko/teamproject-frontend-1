import { useEffect, useState } from 'react';
import { StyledFeedbackBtn, FeedBackBtnText } from './AddFeedbackBtn.styled';
import AddFeedbackModal from '../AddFeedbackModal/AddFeedbackModal';
import { useDispatch } from 'react-redux';
import { fetchReviewOwn } from 'redux/reviews/operations';
import { useTranslation } from 'react-i18next';

const AddFeedbackBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviewOwn());
  }, [dispatch]);

  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <StyledFeedbackBtn onClick={openModal} type="button">
        <FeedBackBtnText>{t('feedback')}</FeedBackBtnText>
      </StyledFeedbackBtn>
      {isShowModal && <AddFeedbackModal closeModal={closeModal} />}
    </>
  );
};
export default AddFeedbackBtn;
