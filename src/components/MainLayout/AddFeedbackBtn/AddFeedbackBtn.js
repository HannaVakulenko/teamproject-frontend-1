import { useState } from 'react';
import { StyledFeedbackBtn, FeedBackBtnText } from './AddFeedbackBtn.styled';
import AddFeedbackModal from '../AddFeedbackModal/AddFeedbackModal';

const AddFeedbackBtn = () => {
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
        <FeedBackBtnText>Feedback</FeedBackBtnText>
      </StyledFeedbackBtn>
      {isShowModal && <AddFeedbackModal closeModal={closeModal} />}
    </>
  );
};
export default AddFeedbackBtn;
