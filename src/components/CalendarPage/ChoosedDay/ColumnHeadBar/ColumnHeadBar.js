import { Button, Icon, Title, Wrapper } from './ColumnHeadBar.styled';
import icon from 'assets/icons/symbol-defs.svg';
import { useState } from 'react';
import TaskModal from '../../../Common/TaskModal/TaskModal';

const ColumnHeadBar = ({ title, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState('add');

  const openModal = () => {
    setIsModalOpen(true);
    setAction('add');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatedTitle =
    title.charAt(0).toUpperCase() + title.slice(1).replace(/-/g, ' ');
  return (
    <Wrapper>
      <Title>{formatedTitle}</Title>
      <Button aria-label="Add new task" onClick={openModal}>
        <Icon width="22" height="22">
          <use href={icon + '#icon-plus-in-a-circle'}></use>
        </Icon>
      </Button>
      {isModalOpen && (
        <TaskModal onClose={closeModal} action={action} column={title} />
      )}
    </Wrapper>
  );
};
export default ColumnHeadBar;

// props category = "to-do", "in-progress", "done"
