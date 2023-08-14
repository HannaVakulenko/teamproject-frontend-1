import React from 'react'
import { Wrapper } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = () => {
  return (
    <Wrapper>
      <TasksColumn />
    </Wrapper>
  )
}

export default TasksColumnsList;