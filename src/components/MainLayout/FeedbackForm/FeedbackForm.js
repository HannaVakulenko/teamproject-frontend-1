import Rating from '@mui/material/Rating';
import icon from 'assets/icons/symbol-defs.svg';
import {
  CancelBtn,
  DeleteBtn,
  EditBtn,
  Icon,
  InputFeedback,
  SaveBtn,
  TextReview,
  WrapControlBtn,
  WrapRating,
  WrapReview,
} from './FeedbackForm.styled';
import { useState } from 'react';

const FeedbackForm = ({closeModal}) => {
  const [value, setValue] = useState(0);
  const [isEdit, setisEdit] = useState(false);
  const [isFeedback, setIsFeedback] = useState(true);
  return (
    <>
      <form>
          <WrapRating>
            <TextReview>Rating</TextReview>
            {!isFeedback ? (
              <Rating
                name="read-only"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            ) : (
              <Rating name="read-only" value={3} readOnly />
            )}
          </WrapRating>

          <WrapReview>
            <TextReview>Review</TextReview>
            {(isFeedback || isEdit) && (
              <>
                <EditBtn
                  onClick={() => {
                    setisEdit(true);
                    setIsFeedback(false);
                  }}
                  type="button"
                >
                  <Icon width={16} height={16}>
                    <use href={icon + '#icon-pencil-01'}></use>
                  </Icon>
                </EditBtn>
                <DeleteBtn onClick={() => setValue(0)} type="submit">
                  <Icon width={16} height={16}>
                    <use href={icon + '#icon-trash-2'}></use>
                  </Icon>
                </DeleteBtn>
              </>
            )}
          </WrapReview>

          <InputFeedback name="feedback" type="text" placeholder="Enter text" />

          {(!isFeedback || isEdit) && (
            <WrapControlBtn>
              <SaveBtn type="submit">{isEdit ? 'Edit' : 'Save'}</SaveBtn>
              <CancelBtn onClick={closeModal} type="button">Cancel</CancelBtn>
            </WrapControlBtn>
          )}
        </form>
    </>
  );
};
export default FeedbackForm;
