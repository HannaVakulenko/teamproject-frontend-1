import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalDiv, Overlay } from './AddFeedbackModal.styled';

const modalRoot = document.querySelector('#modal-root');

const AddFeedbackModal = ({ closeModal, imgUrl, tag }) => {
  useEffect(() => {
    const onKeyDown = e => {
      // перевірка клавіші Escape
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    // слухач для кнопок
    window.addEventListener('keydown', onKeyDown);

    return () => {
      // чистимо за собою після закриття модалки
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  // console.log(children);
  // закриття модалки по кліку на бекдроп
  const onBackdropeClick = e => {
    // перевірка чи клік був на бекдроп
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropeClick}>
      <ModalDiv>
        <div>AddFeedbackModal</div>
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default AddFeedbackModal;

AddFeedbackModal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
