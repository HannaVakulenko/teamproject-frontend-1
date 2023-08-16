import { useSelector } from "react-redux";
import TaskToolbar from "../TaskToolbar/TaskToolbar";
import { TaskModal } from "components/Common";
import { selectAvatarURL } from "redux/tasks/selectors";
import { Wrapper, Title, CardFooter, AvatarWrapper, AvatarImage, Badge } from "./TaskColumnCard.styled";

const TaskColumnCard = ({ task }) => {
  const avatar = useSelector(selectAvatarURL);
  return (
    <Wrapper>
      <Title>{task.title}</Title>
      <CardFooter>
        <AvatarWrapper>
          <AvatarImage src={avatar} width="32" height="32" alt="User Avatar" />
          <Badge>{task.priority}</Badge>
        </AvatarWrapper>
        <TaskToolbar />
      </CardFooter>
      <TaskModal />
    </Wrapper>
  );
};
export default TaskColumnCard;
