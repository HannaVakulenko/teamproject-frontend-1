import React from 'react';
import TaskForm from '../TaskForm/TaskForm';
import Modal from '../Modal/Modal';

const TaskModal = ({ onClose, action, column }) => {
  const shouldDisplayModal = action === 'add' || action === 'edit';
  return (
    <Modal onClose={onClose} shouldDisplay={shouldDisplayModal}>
      <TaskForm onClose={onClose} action={action} column={column} />
    </Modal>
  );
};

export default TaskModal;
