import Rating from '@mui/material/Rating';
import * as Yup from 'yup';
import icon from 'assets/icons/symbol-defs.svg';
import {
  CancelBtn,
  DeleteBtn,
  EditBtn,
  Icon,
  SaveBtn,
  TextFeedback,
  TextReview,
  WrapControlBtn,
  WrapRating,
  WrapReview,
} from './FeedbackForm.styled';
import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  addReview,
  deleteReview,
  fetchReviewOwn,
} from 'redux/reviews/operations';
import { selectUserReview } from 'redux/reviews/selectors';

// petrenko@kart.edu.ua

const FeedbackSchema = Yup.object().shape({
  raiting: Yup.string().required(),
  feedbackText: Yup.string().max(300).required(),
});

const FeedbackForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  // open modal => fetchReviewOwn
  useEffect(() => {
    dispatch(fetchReviewOwn());
  }, [dispatch]);

  // const isFeedback = [1];
  // const isFeedback = [{review: 'The Best Review', rating: 5}]; // [] or [{rating: '',  review: ''}]
  const isFeedback = useSelector(selectUserReview);

  console.log('selectUserReview', isFeedback);

  const [raitingValue, setRaitingValue] = useState(0);

  const [isEdit, setisEdit] = useState(false);
  // const [isFeedback, setIsFeedback] = useState(false);

  return (
    <Formik
      initialValues={{ raiting: raitingValue, feedbackText: '' }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      <Form>
        <WrapRating>
          <TextReview>Rating</TextReview>
          {!isFeedback.length || isEdit ? (
            <Rating
              name="raiting"
              value={raitingValue}
              onChange={(event, newValue) => {
                setRaitingValue(newValue);
                console.log(newValue);
              }}
            />
          ) : (
            <Rating name="raiting" value={raitingValue} readOnly />
          )}
        </WrapRating>

        <WrapReview>
          <TextReview>Review</TextReview>
          {(isFeedback.length || isEdit) && (
            <>
              <EditBtn
                onClick={() => {
                  setisEdit(true);
                }}
                type="button"
              >
                <Icon width={16} height={16}>
                  <use href={icon + '#icon-pencil-01'}></use>
                </Icon>
              </EditBtn>
              <DeleteBtn
                onClick={() => {
                  dispatch(deleteReview());
                  console.log('delete feedback');
                }}
                type="button"
              >
                <Icon width={16} height={16}>
                  <use href={icon + '#icon-trash-2'}></use>
                </Icon>
              </DeleteBtn>
            </>
          )}
        </WrapReview>

        <TextFeedback
          as="textarea"
          disabled={!isEdit || !(isFeedback.length === 0)}
          name="feedbackText"
          type="text"
          placeholder="Enter text"
        />

        {(!isFeedback.length || isEdit) && (
          <WrapControlBtn>
            <SaveBtn
              onClick={e => {
                console.log('Save');
                dispatch(
                  addReview({
                    rating: 5,
                    review: 'The Best Review',
                  })
                );
              }}
              type="submit"
            >
              {isEdit ? 'Edit' : 'Save'}
            </SaveBtn>
            <CancelBtn onClick={closeModal} type="button">
              Cancel
            </CancelBtn>
          </WrapControlBtn>
        )}
      </Form>
    </Formik>
  );
};
export default FeedbackForm;
