import { Formik } from 'formik';
import * as Yup from 'yup';
import { updateTask, addTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  ButtonAction,
  ButtonCancel,
  ButtonCloseWrap,
  ButtonWrapper,
  ErrorMessage,
  Form,
  InputTime,
  InputTitle,
  Label,
  RadioField,
  RadioLabel,
  RadioSpan,
  RadioWrapper,
  TimeWrapper,
} from './TaskForm.styled';

import icon from 'assets/icons/symbol-defs.svg';
import { Trans, useTranslation } from 'react-i18next';

const TaskForm = ({ onClose, action, column, priority, taskToEdit }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currentDay } = useParams();

  const TaskSchema = Yup.object().shape({
    title: Yup.string()
      .max(250, <Trans i18nKey="title_lenght">Title is too long</Trans>)
      .required(<Trans i18nKey="title_req">Title is required</Trans>),
    start: Yup.string().required(
      <Trans i18nKey="start_time_req">Start time is required</Trans>
    ),
    end: Yup.string()
      .required(<Trans i18nKey="end_time_req">End time is required</Trans>)
      .test(
        <Trans i18nKey="end_time_test_1">is-greater</Trans>,
        <Trans i18nKey="end_time_test_2">
          End time should be greater than start time
        </Trans>,
        function (value) {
          const { start } = this.parent;
          if (start && value) {
            const startTime = new Date(`2000-01-01T${start}`);
            const endTime = new Date(`2000-01-01T${value}`);
            return endTime > startTime;
          }
          return true;
        }
      ),
    priority: Yup.string()
      .oneOf(['low', 'medium', 'high'])
      .required(<Trans i18nKey="priority_req">Priority is required</Trans>)
      .transform((value, originalValue) => {
        if (originalValue) {
          const [year, month, day] = originalValue.split('-');
          if (year && month && day) {
            return new Date(
              `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            );
          }
        }
        return value;
      }),
    category: Yup.string()
      .oneOf(['to-do', 'in-progress', 'done'])
      .required(<Trans i18nKey="category_req">Category is required</Trans>),
  });

  const addNewTask = async values => {
    await dispatch(addTask(values));
  };

  const updateExistingTask = async values => {
    await dispatch(updateTask({ _id: taskToEdit._id, ...values }));
  };

  const handleSubmit = (values, actions) => {
    if (action === 'add') {
      addNewTask(values).then(() => {
        onClose();
        actions.resetForm();
      });
    } else if (action === 'edit') {
      updateExistingTask(values).then(() => {
        onClose();
        actions.resetForm();
      });
    }
  };

  return (
    <Formik
      initialValues={{
        title: taskToEdit?.title || '',
        start: taskToEdit?.start || '09:00',
        end: taskToEdit?.end || '10:00',
        priority: taskToEdit?.priority || "Low",
        category: column,
        date: currentDay,
      }}
      validationSchema={TaskSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          {t('title')}
          <InputTitle type="text" name="title" placeholder={t('description')} />
          <ErrorMessage name="title" component="div" />
        </Label>

        <TimeWrapper>
          <Label>
            {t('start_time')}
            <InputTime type="time" name="start" />
            <ErrorMessage name="start" component="div" />
          </Label>
          <Label>
            {t('end_time')}
            <InputTime type="time" name="end" />
            <ErrorMessage name="end" component="div" />
          </Label>
        </TimeWrapper>

        <RadioWrapper role="group" aria-labelledby="my-radio-group">
          <RadioLabel>
            <RadioField type="radio" name="priority" value="low" />
            <RadioSpan value="low" />
            {t('low')}
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="medium" />
            <RadioSpan value="medium" />
            {t('medium')}
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="high" />
            <RadioSpan value="high" />
            {t('high')}
          </RadioLabel>
        </RadioWrapper>
        <ButtonWrapper>
          {action === 'add' ? (
            <ButtonAction type="submit">
              <svg width="18" height="18">
                <use href={icon + '#icon-plus'} stroke="white"></use>
              </svg>
              {t('add')}
            </ButtonAction>
          ) : (
            <ButtonAction type="submit">
              <svg width="18" height="18">
                <use href={icon + '#icon-pencil-01'} stroke="white" fill="none"></use>
              </svg>
              {t('edit')}
            </ButtonAction>
          )}

          <ButtonCancel type="button" onClick={onClose}>
            {t('cancel')}
          </ButtonCancel>
        </ButtonWrapper>
        <ButtonCloseWrap
          type="button"
          aria-label="close button"
          onClick={onClose}
        >
          <svg width="24" height="24">
            <use href={icon + '#icon-x-close'} stroke="#111111"></use>
          </svg>
        </ButtonCloseWrap>
      </Form>
    </Formik>
  );
};
export default TaskForm;
