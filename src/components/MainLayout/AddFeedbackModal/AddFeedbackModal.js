import { createPortal } from 'react-dom';

import icon from 'assets/icons/symbol-defs.svg';
import { CloseBtn, Icon, ModalDiv, Overlay } from './AddFeedbackModal.styled';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const modalRoot = document.querySelector('#modal-root');

const AddFeedbackModal = ({ closeModal }) => {
  return createPortal(
    <Overlay>
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
