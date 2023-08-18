import TaskForm from "../TaskForm/TaskForm";
import Modal from "../Modal/Modal";


const TaskModal = ({onClose, action}) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm>
        onClose={onClose}
        action={action} 
      </TaskForm>
    </Modal>
  );
};
export default TaskModal;
