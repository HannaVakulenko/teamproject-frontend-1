import TaskColumnCard from "../TaskColumnCard/TaskColumnCard";
import { Wrapper } from "./ColumnsTasksList.styled";

const ColumnsTasksList = ({ tasks }) => {
  return (
    <Wrapper>
      {tasks.map(task => (
        <TaskColumnCard key={task._id} task={task} />
      ))}
    </Wrapper>
  );
};
export default ColumnsTasksList;
