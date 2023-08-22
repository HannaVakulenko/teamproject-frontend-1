import Rating from '@mui/material/Rating';
import * as Yup from 'yup';
import icon from 'assets/icons/symbol-defs.svg';
import {
  CancelBtn,
  DeleteBtn,
  EditBtn,
  Error,
  FormFieldReview,
  Icon,
  IconStar,
  SaveBtn,
  TextFeedback,
  TextReview,
  WrapControlBtn,
} from './FeedbackForm.styled';
import { useState } from 'react';
import { Form, Formik, useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, deleteReview, editReview } from 'redux/reviews/operations';
import { selectUserReview } from 'redux/reviews/selectors';
import { Trans, useTranslation } from 'react-i18next';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextFeedback className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
};

const FeedbackForm = ({ closeModal }) => {
  const { t } = useTranslation();
  const edit = t('edit');
  const save = t('save');

  const dispatch = useDispatch();

  const isFeedback = useSelector(selectUserReview);

  const [ratingValue, setRatingValue] = useState(
    isFeedback.length === 0 ? 5 : isFeedback[0].rating
  );

  const [isEdit, setisEdit] = useState(false);

  return (
    <Formik
      initialValues={{
        rating: isFeedback.length === 0 ? ratingValue : isFeedback[0].rating,
        feedbacText: isFeedback.length === 0 ? '' : isFeedback[0].review,
      }}
      validationSchema={Yup.object({
        rating: Yup.number().required(
          <Trans i18nKey="rating_req">Required</Trans>
        ),
        feedbacText: Yup.string()
          .max(
            300,
            <Trans i18nKey="feedback_text_lenght">
              Must be 300 characters or less
            </Trans>
          )
          .required(
            <Trans i18nKey="feedback_text_req">Field review is required</Trans>
          ),
      })}
      onSubmit={values => {
        if (!isEdit) {
          dispatch(
            addReview({
              rating: ratingValue,
              review: values.feedbacText,
            })
          );
        } else {
          dispatch(
            editReview({
              rating: ratingValue,
              review: values.feedbacText,
            })
          );
        }
        setisEdit(false);
      }}
    >
      <Form>
        <TextReview>{t('rating')}</TextReview>

        <Rating
          name="rating"
          readOnly={!(isFeedback.length === 0) && !isEdit}
          emptyIcon={
            <IconStar>
              <use href={icon + '#icon-Star-2'}></use>
            </IconStar>
          }
          icon={
            <IconStar>
              <use href={icon + '#icon-star'}></use>
            </IconStar>
          }
          value={ratingValue}
          onChange={(_, newValue) => {
            setRatingValue(newValue);
          }}
        />

        <FormFieldReview>
          <TextReview>{t('review')}</TextReview>
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
                  setisEdit(false);
                  closeModal();
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

        <TextArea
          disabled={!(isFeedback.length === 0) && !isEdit}
          name="feedbacText"
          rows="6"
          placeholder={t('description')}
        />

        {(!isFeedback.length || isEdit) && (
          <WrapControlBtn>
            <SaveBtn type="submit">{isEdit ? edit : save}</SaveBtn>
            <CancelBtn onClick={closeModal} type="button">
              {t('cancel')}
            </CancelBtn>
          </WrapControlBtn>
        )}
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
