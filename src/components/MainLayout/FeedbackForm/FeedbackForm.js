import Rating from '@mui/material/Rating';
import * as Yup from 'yup';
import icon from 'assets/icons/symbol-defs.svg';
import {
  CancelBtn,
  DeleteBtn,
  EditBtn,
  FormFieldReview,
  Icon,
  SaveBtn,
  TextFeedback,
  TextReview,
  WrapControlBtn,
} from './FeedbackForm.styled';
import { useState } from 'react';
import { Form, Formik, useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, deleteReview } from 'redux/reviews/operations';
import { selectUserReview } from 'redux/reviews/selectors';

// petrenko@kart.edu.ua

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextFeedback className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FeedbackForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const isFeedback = useSelector(selectUserReview);
  console.log('selectUserReview', isFeedback[0]);

  const [ratingValue, setRatingValue] = useState(5);

  const [isEdit, setisEdit] = useState(false);

  // console.log('isEdit', isEdit);
  console.log('isFeedback', !isFeedback.length === 0);

  return (
    <Formik
      initialValues={{
        rating: ratingValue,
        feedbacText: isFeedback.length === 0 ? '' : isFeedback[0].review,
      }}
      validationSchema={Yup.object({
        rating: Yup.number().required('required'),
        feedbacText: Yup.string()
          .max(300, 'Must be 300 characters or less')
          .required('required'),
      })}
      onSubmit={(values, e) => {
        console.log(values);
        // e.preventDefault();
        console.log('Save');
        dispatch(
          addReview({
            rating: ratingValue,
            review: values.feedbacText,
          })
        );
        // closeModal();
      }}
    >
      <Form>
        <TextReview>Rating</TextReview>
        {!isFeedback.length || isEdit ? (
          <label>
            <Rating
              name="rating"
              value={ratingValue}
              onChange={(event, newValue) => {
                console.log(newValue);
                setRatingValue(newValue);
                console.log(ratingValue);
              }}
            />
          </label>
        ) : (
          <Rating name="rating" value={isFeedback[0].rating} readOnly />
        )}
        <FormFieldReview>
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
                  closeModal();
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
        </FormFieldReview>

        <MyTextArea
          disabled={false}
          name="feedbacText"
          rows="6"
          placeholder="Enter text"
        />

        {(!isFeedback.length || isEdit) && (
          <WrapControlBtn>
            <SaveBtn type="submit">{isEdit ? 'Edit' : 'Save'}</SaveBtn>
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

// <Formik
//   initialValues={{ rating: ratingValue, feedbackText: '' }}
//   validationSchema={FeedbackSchema}
//   onSubmit={(values, actions) => {
//     console.log(values);
//     // saveFeedback();
//   }}
// >
//   <Form>
//     <label>
//       <TextReview>Rating</TextReview>
//       {!isFeedback.length || isEdit ? (
//         <Rating
//           name="rating"
//           value={
//             isFeedback.length === 0 ? ratingValue : isFeedback[0].rating
//           }
//           onChange={(event, newValue) => {
//             setRatingValue(newValue);
//           }}
//         />
//       ) : (
//         <Rating name="rating" value={isFeedback[0].rating} readOnly />
//       )}
//     </label>

//     <label>
//       <TextReview>Review</TextReview>
//       {(isFeedback.length || isEdit) && (
//         <>
//           <EditBtn
//             onClick={() => {
//               setisEdit(true);
//             }}
//             type="button"
//           >
//             <Icon width={16} height={16}>
//               <use href={icon + '#icon-pencil-01'}></use>
//             </Icon>
//           </EditBtn>
//           <DeleteBtn
//             onClick={() => {
//               dispatch(deleteReview());
//               closeModal();
//               console.log('delete feedback');
//             }}
//             type="button"
//           >
//             <Icon width={16} height={16}>
//               <use href={icon + '#icon-trash-2'}></use>
//             </Icon>
//           </DeleteBtn>
//         </>
//       )}
//       <TextFeedback
//       as="textarea"
//       disabled={isEdit}
//       name="feedbackText"
//       type="text"
//       placeholder="Enter text"
//       defaultValue={isFeedback.length === 0 ? '' : isFeedback[0].review}
//       // onChange={setFeedbackText()}

//     />
//     </label>

//     {(!isFeedback.length || isEdit) && (
//       <WrapControlBtn>
//         <SaveBtn onClick={saveFeedback} type="submit">{isEdit ? 'Edit' : 'Save'}</SaveBtn>
//         <CancelBtn onClick={closeModal} type="button">
//           Cancel
//         </CancelBtn>
//       </WrapControlBtn>
//     )}
//   </Form>
// </Formik>
