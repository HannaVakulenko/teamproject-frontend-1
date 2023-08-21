import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { selectUndoneTasks, selectTasksByDate } from 'redux/tasks/selectors';
import { MainTitle } from 'components/Common';
import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';
import {
  BurgerButton,
  ThemeUserWrapper,
  ControllWrapper,
  StyledHeader,
  Icon,
  TitleBurgerWrapper,
  TitleWrapper,
  GooseImg,
  TitleTextWrapper,
  MotivationText,
} from './Header.styled';
import icon from 'assets/icons/symbol-defs.svg';
import { mainlayout } from 'assets/images/mainlayoutHeader';
import { device } from 'constants';

const getCurrentMainTitle = location => {
  if (location.pathname.startsWith('/account')) return 'User Profile';
  if (location.pathname.startsWith('/statistics')) return 'Statistics';
  return 'Calendar';
};

const Header = ({ toggleSidebar }) => {
  const { currentDay } = useParams();
  const location = useLocation();
  const tasksForCurrentDay = useSelector(state =>
    selectTasksByDate(state, currentDay)
  );
  const hasTasksInColumns = useSelector(selectUndoneTasks);
  const currentMainTitle = getCurrentMainTitle(location);
  const onChoosedDayPage = location.pathname.startsWith('/calendar/day');
  const shouldShowMotivationMessage =
    onChoosedDayPage && hasTasksInColumns && tasksForCurrentDay.length > 0;

  return (
    <StyledHeader>
      <TitleBurgerWrapper>
        <BurgerButton onClick={toggleSidebar}>
          <Icon>
            <use href={icon + '#icon-menu-01'}></use>
          </Icon>
        </BurgerButton>
        {shouldShowMotivationMessage ? (
          <TitleWrapper>
            <picture>
              {/* Webp */}
              <source
                srcSet={`${mainlayout.desk1xWebp} 1x, ${mainlayout.desk2xWebp} 2x, ${mainlayout.desk3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.desktop}px)`}
              />

              {/* Png */}
              <source
                srcSet={`${mainlayout.desk1xPng} 1x, ${mainlayout.desk2xPng} 2x, ${mainlayout.desk3xPng} 3x`}
                media={`(min-width: ${device.desktop}px)`}
              />

              <GooseImg src={mainlayout.desk1xPng} alt="mainlayout" />
            </picture>
            <TitleTextWrapper>
              <MainTitle title={currentMainTitle} />
              <MotivationText>
                <span>Let go</span> of the past and focus on the present!
              </MotivationText>
            </TitleTextWrapper>
          </TitleWrapper>
        ) : (
          <TitleWrapper>
            <MainTitle title={currentMainTitle} />
          </TitleWrapper>
        )}
      </TitleBurgerWrapper>
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
