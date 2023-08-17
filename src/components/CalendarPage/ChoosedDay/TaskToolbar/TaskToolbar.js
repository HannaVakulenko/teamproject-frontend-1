import icon from 'assets/icons/symbol-defs.svg';
import { Wrapper, Button, Icon } from './TaskToolbar.styled';

const TaskToolbar = () => {
  return (
    <Wrapper>
      <Button>
        <Icon width="14" height="14">
          <use href={icon + "#icon-arrow-circle-broken-right"}></use>
        </Icon>
      </Button>
      <Button>
        <Icon width="14" height="14">
          <use href={icon + "#icon-pencil-01"}></use>
        </Icon>
      </Button>
      <Button>
        <Icon width="14" height="14">
          <use href={icon + "#icon-trash-04"}></use>
        </Icon>
      </Button>
    </Wrapper>
  );
};
export default TaskToolbar;
