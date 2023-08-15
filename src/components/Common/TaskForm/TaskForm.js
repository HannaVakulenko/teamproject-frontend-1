import { Formik } from 'formik';
import * as Yup from 'yup';



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
        return new Date(
          `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        );
      }
      return value;
    }),
  category: Yup.string()
    .oneOf(['to-do', 'in-progress', 'done'])
    .required('Category is required'),
});


const TaskForm = () => {


  return (
    <Formik
    validationSchema={TaskSchema}>
      
  </Formik>
  );
};
export default TaskForm;
