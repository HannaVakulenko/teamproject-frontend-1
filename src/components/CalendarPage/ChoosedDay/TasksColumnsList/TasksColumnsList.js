import React from 'react'
import { Wrapper } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { selectTasksByCategory } from 'redux/tasks/selectors';
import { category } from 'constants';

const TasksColumnsList = () => {
  const tasksToDo = useSelector(state =>
    selectTasksByCategory(state, category.toDo)
  );

  const tasksInProgress = useSelector(state =>
    selectTasksByCategory(state, category.inProgress)
  );

  const tasksDone = useSelector(state =>
    selectTasksByCategory(state, category.done)
  );

  return (
    <Wrapper>
      <TasksColumn title="To do" tasks={tasksToDo} />
      <TasksColumn title="In progress" tasks={tasksInProgress} />
      <TasksColumn title="Done" tasks={tasksDone} />
    </Wrapper>
  )
}

export default TasksColumnsList;