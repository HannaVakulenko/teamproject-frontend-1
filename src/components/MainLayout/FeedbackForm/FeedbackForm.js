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
  fetchReviewById,
 
} from 'redux/reviews/operations';
import { selectReviews, selectUserReview } from 'redux/reviews/selectors';
import { json } from 'body-parser';

const FeedbackSchema = Yup.object().shape({
  raiting: Yup.string().required(),
  feedbackText: Yup.string().max(300).required(),
});

const FeedbackForm = ({ closeModal }) => {
  const data = useSelector(selectReviews); // []
  console.log('selectReviews', data);

  const data1 = useSelector(selectUserReview); // {rating: '',  review: ''}
  console.log('selectUserReview', data1);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchReviews());
  // }, [dispatch]);

  // dispatch(fetchReviewById());

  const [raitingValue, setRaitingValue] = useState('0');

  const [isEdit, setisEdit] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);

  return (
    <Formik
      // дивись документацію
      initialValues={{ raiting: raitingValue, feedbackText: '' }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      <Form>
        <WrapRating>
          <TextReview>Rating</TextReview>
          {!isFeedback ? (
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
              <DeleteBtn
                onClick={() => {
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
          disabled={isFeedback}
          name="feedbackText"
          type="text"
          placeholder="Enter text"
        />

        {(!isFeedback || isEdit) && (
          <WrapControlBtn>
            <SaveBtn
              onClick={e => {
                console.log('Save');
                // dispatch(
                //   addReview(
                //     json.stringify({
                //       rating: 1,
                //       review: 'test',
                //     })
                //   )
                // );
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
