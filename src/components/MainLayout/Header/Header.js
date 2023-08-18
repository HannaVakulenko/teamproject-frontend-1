import { MainTitle } from 'components/Common';
import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';
import {
  StyledButton,
  ThemeUserWrapper,
  ControllWrapper,
  StyledHeader,
  Icon
} from './Header.styled';
import icon from 'assets/icons/symbol-defs.svg';
import { TaskToolbar } from 'components/CalendarPage';

const Header = ({ toggleSidebar }) => {
  return (
    <StyledHeader>
      <StyledButton onClick={toggleSidebar}>
        <Icon>
          <use href={icon + '#icon-menu-01'}></use>
        </Icon>
      </StyledButton>
      <MainTitle title="Calendar" />
      <ControllWrapper>
        <AddFeedbackBtn />
        <TaskToolbar/>
        <ThemeUserWrapper>
          <ThemeToggler />
          <UserInfo />
        </ThemeUserWrapper>
      </ControllWrapper>
    </StyledHeader>
  );
};
export default Header;
