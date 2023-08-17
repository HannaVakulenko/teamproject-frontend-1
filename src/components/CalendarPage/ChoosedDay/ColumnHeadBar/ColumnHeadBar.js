import { Button, Icon, Title, Wrapper } from "./ColumnHeadBar.styled";
import icon from "assets/icons/symbol-defs.svg";

const ColumnHeadBar = ({ title, category }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button aria-label="Add new task">
        <Icon width="22" height="22">
          <use href={icon + "#icon-plus-in-a-circle"}></use>
        </Icon>
      </Button>
    </Wrapper>
  );
};
export default ColumnHeadBar;

// props category = "to-do", "in-progress", "done"