import AddTaskBtn from "../AddTaskBtn/AddTaskBtn";
import ColumnHeadBar from "../ColumnHeadBar/ColumnHeadBar";
import { Wrapper } from "./TasksColumn.styled";

const TasksColumn = () => {
  return (
    <>
      <Wrapper>
        <ColumnHeadBar title="To do" />
        <AddTaskBtn />
      </Wrapper>
      <Wrapper>
        <ColumnHeadBar title="In progress" />
        <AddTaskBtn />
      </Wrapper>
      <Wrapper>
        <ColumnHeadBar title="Done" />
        <AddTaskBtn />
      </Wrapper>
    </>
  );
};
export default TasksColumn;
