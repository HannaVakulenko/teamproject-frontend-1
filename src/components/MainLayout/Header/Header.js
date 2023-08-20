import { MainTitle } from 'components/Common';
import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';
import {
  StyledButton,
  ThemeUserWrapper,
  ControllWrapper,
  StyledHeader,
  Icon,
} from './Header.styled';
import icon from 'assets/icons/symbol-defs.svg';
// import { useTranslation } from 'react-i18next';
import LanguageFlags from './LanguageFlags';

const Header = ({ toggleSidebar }) => {
  // const { i18n } = useTranslation();

  // const changeLanguage = lng => {
  //   i18n.changeLanguage(lng);
  // };

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
        <LanguageFlags />
        <ThemeUserWrapper>
          <ThemeToggler />
          <UserInfo />
        </ThemeUserWrapper>
      </ControllWrapper>
    </StyledHeader>
  );
};
export default Header;
