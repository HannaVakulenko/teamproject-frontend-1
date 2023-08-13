import { MainTitle } from 'components/Common';
import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';
import {
  StyledButton,
  ThemeUserWrapper,
  ControllWrapper,
  StyledHeader,
} from './Header.styled';
import icon from 'assets/icons/symbol-defs.svg';

const Header = ({ toggleSidebar }) => {
  return (
    <StyledHeader>
      <StyledButton onClick={toggleSidebar}>
        <svg width="32" height="32">
          <use href={icon + '#icon-Vector'}></use>
        </svg>
      </StyledButton>
      <MainTitle title="Calendar" />
      <ControllWrapper>
        <AddFeedbackBtn />
        <ThemeUserWrapper>
          <ThemeToggler />
          <UserInfo />
        </ThemeUserWrapper>
      </ControllWrapper>
    </StyledHeader>
  );
};
export default Header;
