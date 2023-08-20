import { useParams } from 'react-router-dom';
import { Wrapper } from './TasksColumnsList.styled';
import TasksColumn from '../TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { selectTasksByDate } from 'redux/tasks/selectors';
import { categories } from 'constants';

const TasksColumnsList = () => {
  const { currentDay } = useParams();

  const filteredTasks = useSelector(state => selectTasksByDate(state, currentDay));

  return (
    <Wrapper>
      {categories.map((category, index) => (
        <TasksColumn key={index} title={category} tasks={filteredTasks.filter(task => task.category === category)} />
      ))}
    </Wrapper>
  )
}

export default TasksColumnsList;