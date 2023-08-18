import React from 'react';
import TaskForm from '../TaskForm/TaskForm';
import Modal from '../Modal/Modal';

const TaskModal = ({ onClose, action,column }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm onClose={onClose} action={action} column={column } />
    </Modal>
  );
};

export default TaskModal;
