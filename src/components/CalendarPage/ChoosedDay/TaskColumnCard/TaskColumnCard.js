import { useSelector } from 'react-redux';
import TaskToolbar from '../TaskToolbar/TaskToolbar';
import { TaskModal } from 'components/Common';
import { selectAvatarURL } from 'redux/tasks/selectors';
import {
  Wrapper,
  Text,
  CardFooter,
  AvatarWrapper,
  AvatarImage,
  Badge,
} from './TaskColumnCard.styled';

const TaskColumnCard = ({ task }) => {
  const avatar = useSelector(selectAvatarURL);
  return (
    <Wrapper>
      <Text>{task.title}</Text>
      <CardFooter>
        <AvatarWrapper>
          <AvatarImage src={avatar} width="32" height="32" alt="User Avatar" />
          <Badge data-priority={task.priority}>{task.priority}</Badge>
        </AvatarWrapper>
        <TaskToolbar task={task} />
      </CardFooter>
      <TaskModal />
    </Wrapper>
  );
};
export default TaskColumnCard;
