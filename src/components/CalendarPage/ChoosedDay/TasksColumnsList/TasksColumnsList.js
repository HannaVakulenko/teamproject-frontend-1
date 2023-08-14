import React from 'react'
import { Wrapper } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = ({ tasks }) => {
  return (
    <Wrapper>
      <TasksColumn tasks={tasks} />
    </Wrapper>
  )
}

export default TasksColumnsList;