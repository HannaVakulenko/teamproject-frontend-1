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

const TaskForm = ({ onClose, action, column, priority, taskToEdit }) => {
  const dispatch = useDispatch();
  const { currentDay } = useParams();

  const TaskSchema = Yup.object().shape({
    title: Yup.string()
      .max(250, 'Title is too long')
      .required('Title is required'),
    start: Yup.string().required('Start time is required'),
    end: Yup.string()
      .required('End time is required')
      .test(
        'is-greater',
        'End time should be greater than start time',
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
      .required('Priority is required')
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
      .required('Category is required'),
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
        title: '',
        start: '09:00',
        end: '10:00',
        priority: action === 'edit' ? priority : 'low',
        category: column,
        date: currentDay,
      }}
      validationSchema={TaskSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Title
          <InputTitle type="text" name="title" placeholder="Enter text" />
          <ErrorMessage name="title" component="div" />
        </Label>

        <TimeWrapper>
          <Label>
            Start
            <InputTime type="time" name="start" />
            <ErrorMessage name="start" component="div" />
          </Label>
          <Label>
            End
            <InputTime type="time" name="end" />
            <ErrorMessage name="end" component="div" />
          </Label>
        </TimeWrapper>

        <RadioWrapper role="group" aria-labelledby="my-radio-group">
          <RadioLabel>
            <RadioField type="radio" name="priority" value="low" />
            <RadioSpan value="low" />
            Low
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="medium" />
            <RadioSpan value="medium" />
            Medium
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="high" />
            <RadioSpan value="high" />
            High
          </RadioLabel>
        </RadioWrapper>
        <ButtonWrapper>
          {action === 'add' ? (
            <ButtonAction type="submit">
              <svg width="18" height="18">
                <use href={icon + '#icon-plus'} stroke="white"></use>
              </svg>
              Add
            </ButtonAction>
          ) : (
            <ButtonAction type="submit">
              <svg width="18" height="18">
                <use href={icon + '#icon-pencil-01'} stroke="white"></use>
              </svg>
              Edit
            </ButtonAction>
          )}

          <ButtonCancel type="button" onClick={onClose}>
            Cancel
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
