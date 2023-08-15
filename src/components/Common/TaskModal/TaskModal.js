import TaskForm from "../TaskForm/TaskForm";
import Modal from "../Modal/Modal";


const TaskModal = ({onClose}) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm></TaskForm>
    </Modal>
  );
};
export default TaskModal;
