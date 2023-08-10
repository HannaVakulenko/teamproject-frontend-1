import { useMediaQuery } from 'react-responsive';
import { device } from 'constants';
import {
  AfterTitleDescription,
  ImgDescription,
  ItemDescription,
  ListDescription,
  Number,
  TextDescription,
  TitleDescription,
  WrappInfo,
} from './Description.styled';

const Description = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${device.desktop}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${device.tablet}px) and (max-width: ${
      device.desktop - 1
    }px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${device.tablet - 1}px)`,
  });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <ListDescription>
      <ItemDescription>
        <WrappInfo>
          <Number>1.</Number>
          <TitleDescription>Calendar</TitleDescription>
          <AfterTitleDescription>view</AfterTitleDescription>
          <TextDescription>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </TextDescription>
        </WrappInfo>
        {isMobile && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-calendar-mob@2x.png')
                : require('../../../assets/images/mainpage-calendar-mob-1x.png')
            }
            alt="calendar"
            width="335"
          />
        )}
        {isTablet && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-calendar-tabl@2x.png')
                : require('../../../assets/images/mainpage-calendar-tabl-1x.png')
            }
            alt="calendar"
            width="704"
          />
        )}
        {isDesktop && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-calendar-desk@2x.png')
                : require('../../../assets/images/mainpage-calendar-desk-1x.png')
            }
            alt="calendar"
            width="604"
          />
        )}
      </ItemDescription>
      <ItemDescription>
        <WrappInfo>
          <Number>2.</Number>
          <AfterTitleDescription>SIDEBAR</AfterTitleDescription>
          <TextDescription>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </TextDescription>
        </WrappInfo>
        {isMobile && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-sidebar-mob@2x.png')
                : require('../../../assets/images/mainpage-sidebar-mob-1x.png')
            }
            alt="calendar"
            width="335"
          />
        )}
        {isTablet && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-sidebar-tabl@2x.png')
                : require('../../../assets/images/mainpage-sidebar-tabl-1x.png')
            }
            alt="calendar"
            width="704"
          />
        )}
        {isDesktop && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-sidebar-desk@2x.png')
                : require('../../../assets/images/mainpage-sidebar-desk-1x.png')
            }
            alt="calendar"
            width="604"
          />
        )}
      </ItemDescription>
      <ItemDescription>
        <WrappInfo>
          <Number>3.</Number>
          <TitleDescription>all in</TitleDescription>
          <AfterTitleDescription>one</AfterTitleDescription>
          <TextDescription>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </TextDescription>
        </WrappInfo>
        {isMobile && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-one-mob@2x.png')
                : require('../../../assets/images/mainpage-one-mob-1x.png')
            }
            alt="calendar"
            width="335"
          />
        )}
        {isTablet && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-one-tabl@2x.png')
                : require('../../../assets/images/logo-tabl-1x.png')
            }
            alt="calendar"
            width="704"
          />
        )}
        {isDesktop && (
          <ImgDescription
            src={
              isRetina
                ? require('../../../assets/images/mainpage-one-desk@2x.png')
                : require('../../../assets/images/mainpage-one-desk-1x.png')
            }
            alt="calendar"
            width="604"
          />
        )}
      </ItemDescription>
    </ListDescription>
  );
};
export default Description;
