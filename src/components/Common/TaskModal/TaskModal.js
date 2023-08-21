import React from 'react';
import TaskForm from '../TaskForm/TaskForm';
import Modal from '../Modal/Modal';

const TaskModal = ({ onClose, action, column, taskToEdit }) => {
  const shouldDisplayModal = action === 'add' || action === 'edit';
  return (
    <Modal onClose={onClose} shouldDisplay={shouldDisplayModal}>
      <TaskForm
        onClose={onClose}
        action={action}
        column={column}
        taskToEdit={taskToEdit}
      />
    </Modal>
  );
};

export default TaskModal;
