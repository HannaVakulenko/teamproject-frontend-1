import { createPortal } from 'react-dom';
import icon from 'assets/icons/symbol-defs.svg';
import { CloseBtn, Icon, ModalDiv, Overlay } from './AddFeedbackModal.styled';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const AddFeedbackModal = ({ closeModal }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onBackdropeClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return createPortal(
    <Overlay onClick={onBackdropeClick}>
      <ModalDiv>
        <CloseBtn onClick={closeModal} type="button">
          <Icon width={24} height={24}>
            <use href={icon + '#icon-x-close'}></use>
          </Icon>
        </CloseBtn>
        <FeedbackForm closeModal={closeModal} />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default AddFeedbackModal;
