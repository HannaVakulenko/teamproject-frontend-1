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

const Header = ({ toggleSidebar }) => {
  return (
    <StyledHeader>
      <StyledButton onClick={toggleSidebar}>X</StyledButton>
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
