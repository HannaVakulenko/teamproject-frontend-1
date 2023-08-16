import icon from "assets/icons/symbol-defs.svg";
import { Button, Icon } from "./AddTaskBtn.styled";

const AddTaskBtn = () => {
  return (
    <Button>
      <Icon width="24" height="24">
        <use href={icon + "#icon-plus"}></use>
      </Icon>
      <span>Add task</span>
    </Button>
  );
};
export default AddTaskBtn;
