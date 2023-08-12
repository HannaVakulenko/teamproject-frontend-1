import { createPortal } from 'react-dom';
import icon from 'assets/icons/symbol-defs.svg';
import {
  CancelBtn,
  InputFeedback,
  ModalDiv,
  Overlay,
  SaveBtn,
  TextReview,
} from './AddFeedbackModal.styled';
import { IconLogin } from 'components/MainPage/AuthSection/AuthSection.styled';

const modalRoot = document.querySelector('#modal-root');

// const FeedbackSchema = Yup.object().shape({
//   textFeedback: Yup.string()

//     .required(),

// });

const AddFeedbackModal = () => {
  return createPortal(
    <Overlay>
      <ModalDiv>
        <form>
        <TextReview>Rating</TextReview>
        
        <div>
          <input type="radio" id="r1" />
          <label for="r1"></label>

          <input type="radio" id="r2" />
          <label for="r2"></label>

          <input type="radio" id="r3" />
          <label for="r3"></label>

          <input type="radio" id="r4" />
          <label for="r4"></label>

          <input type="radio" id="r5" />
          <label for="r5"></label>
        </div>

        <TextReview>Review</TextReview>
        <InputFeedback type="text" placeholder="Enter text" name="name" />
        <SaveBtn type="submit">Save</SaveBtn>
        <CancelBtn type="button">Cancel</CancelBtn>
        </form>
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default AddFeedbackModal;
