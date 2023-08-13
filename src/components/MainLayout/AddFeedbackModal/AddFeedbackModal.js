import { createPortal } from 'react-dom';
import Rating from '@mui/material/Rating';
import icon from 'assets/icons/symbol-defs.svg';
import {
  CancelBtn,
  CloseBtn,
  DeleteBtn,
  EditBtn,
  Icon,
  InputFeedback,
  ModalDiv,
  Overlay,
  SaveBtn,
  TextReview,
  WrapControlBtn,
  WrapRating,
  WrapReview,
} from './AddFeedbackModal.styled';
import { useState } from 'react';

const modalRoot = document.querySelector('#modal-root');

const AddFeedbackModal = () => {
  const [value, setValue] = useState(1);
  const [isEdit, setisEdit] = useState(false);
  const [isReview, setIsReview] = useState(true);

  return createPortal(
    <Overlay>
      <ModalDiv>
        <CloseBtn type="button">
          <Icon width={24} height={24}>
            <use href={icon + '#icon-x-close'}></use>
          </Icon>
        </CloseBtn>

        <form>
          <WrapRating>
            <TextReview>Rating</TextReview>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </WrapRating>

          <WrapReview>
            <TextReview>Review</TextReview>
            {isReview && (
              <>
                <EditBtn onClick={() => setisEdit(true)} type="button">
                  <Icon width={16} height={16}>
                    <use href={icon + '#icon-pencil-01'}></use>
                  </Icon>
                </EditBtn>
                <DeleteBtn type="submit">
                  <Icon width={16} height={16}>
                    <use href={icon + '#icon-trash-2'}></use>
                  </Icon>
                </DeleteBtn>
              </>
            )}
          </WrapReview>

          <InputFeedback name="feedback" type="text" placeholder="Enter text" />

          <WrapControlBtn>
            <SaveBtn type="submit">{isEdit ? 'Edit' : 'Save'}</SaveBtn>
            <CancelBtn type="button">Cancel</CancelBtn>
          </WrapControlBtn>
        </form>
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default AddFeedbackModal;
