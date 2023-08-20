import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import { Wrapper } from './TasksColumn.styled';

const TasksColumn = ({ title, tasks }) => {
  return (
    <Wrapper>
      <ColumnHeadBar title={title} />
      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn column={title} />
    </Wrapper>
  );
};
export default TasksColumn;
