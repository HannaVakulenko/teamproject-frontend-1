import { device } from 'constants';
import {
  AfterTitleDescription,
  ContainerMainPage,
  ImgDescription,
  ItemDescription,
  ListDescription,
  Number,
  OddNumbered,
  TextDescription,
  TitleDescription,
  WrappInfo,
} from './Description.styled';

const Description = () => {
  return (
    <ContainerMainPage>
      {' '}
      <ListDescription>
        <ItemDescription>
          <WrappInfo>
            <Number>1.</Number>
            <TitleDescription>Calendar</TitleDescription>
            <AfterTitleDescription>view</AfterTitleDescription>
            <TextDescription>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </TextDescription>
          </WrappInfo>
          <picture>
            {/* Webp */}
            <source
              srcset={
                (require('../../../assets/images/mainpage-calendar-desk-1x.webp'),
                require('../../../assets/images/mainpage-calendar-desk@2x.webp'),
                require('../../../assets/images/mainpage-calendar-desk@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: ${device.desktop}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-calendar-tabl-1x.webp'),
                require('../../../assets/images/mainpage-calendar-tabl@2x.webp'),
                require('../../../assets/images/mainpage-calendar-tabl@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: ${device.tablet}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-calendar-mob-1x.webp'),
                require('../../../assets/images/mainpage-calendar-mob@2x.webp'),
                require('../../../assets/images/mainpage-calendar-mob@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: 150px)`}
            />

            {/* png */}
            <source
              srcset={
                (require('../../../assets/images/mainpage-calendar-desk-1x.png'),
                require('../../../assets/images/mainpage-calendar-desk@2x.png'),
                require('../../../assets/images/mainpage-calendar-desk@3x.png'))
              }
              media={`(min-width: ${device.desktop}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-calendar-tabl-1x.png'),
                require('../../../assets/images/mainpage-calendar-tabl@2x.png'),
                require('../../../assets/images/mainpage-calendar-tabl@3x.png'))
              }
              media={`(min-width: ${device.tablet}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-calendar-mob-1x.png'),
                require('../../../assets/images/mainpage-calendar-mob@2x.png'),
                require('../../../assets/images/mainpage-calendar-mob@3x.png'))
              }
              media={`(min-width: 150px)`}
            />
            <ImgDescription
              src={require('../../../assets/images/mainpage-calendar-mob-1x.png')}
              alt="calendar"
              width="335"
            />
          </picture>
        </ItemDescription>
        <ItemDescription>
          <OddNumbered>
            <WrappInfo>
              <Number>2.</Number>
              <AfterTitleDescription>sidebar</AfterTitleDescription>
              <TextDescription>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </TextDescription>
            </WrappInfo>
          </OddNumbered>
          <picture>
            {/* Webp */}
            <source
              srcset={
                (require('../../../assets/images/mainpage-sidebar-desk-1x.webp'),
                require('../../../assets/images/mainpage-sidebar-desk@2x.webp'),
                require('../../../assets/images/mainpage-sidebar-desk@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: ${device.desktop}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-sidebar-tabl-1x.webp'),
                require('../../../assets/images/mainpage-sidebar-tabl@2x.webp'),
                require('../../../assets/images/mainpage-sidebar-tabl@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: ${device.tablet}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-sidebar-mob-1x.webp'),
                require('../../../assets/images/mainpage-sidebar-mob@2x.webp'),
                require('../../../assets/images/mainpage-sidebar-mob@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: 150px)`}
            />

            {/* png */}
            <source
              srcset={
                (require('../../../assets/images/mainpage-sidebar-desk-1x.png'),
                require('../../../assets/images/mainpage-sidebar-desk@2x.png'),
                require('../../../assets/images/mainpage-sidebar-desk@3x.png'))
              }
              media={`(min-width: ${device.desktop}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-sidebar-tabl-1x.png'),
                require('../../../assets/images/mainpage-sidebar-tabl@2x.png'),
                require('../../../assets/images/mainpage-sidebar-tabl@3x.png'))
              }
              media={`(min-width: ${device.tablet}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-sidebar-mob-1x.png'),
                require('../../../assets/images/mainpage-sidebar-mob@2x.png'),
                require('../../../assets/images/mainpage-sidebar-mob@3x.png'))
              }
              media={`(min-width: 150px)`}
            />
            <ImgDescription
              src={require('../../../assets/images/mainpage-sidebar-mob-1x.png')}
              alt="sidebar"
              width="335"
            />
          </picture>
        </ItemDescription>
        <ItemDescription>
          <WrappInfo>
            <Number>3.</Number>
            <TitleDescription>all in</TitleDescription>
            <AfterTitleDescription>one</AfterTitleDescription>
            <TextDescription>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </TextDescription>
          </WrappInfo>
          <picture>
            {/* Webp */}
            <source
              srcset={
                (require('../../../assets/images/mainpage-one-desk-1x.webp'),
                require('../../../assets/images/mainpage-one-desk@2x.webp'),
                require('../../../assets/images/mainpage-one-desk@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: ${device.desktop}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-one-tabl-1x.webp'),
                require('../../../assets/images/mainpage-one-tabl@2x.webp'),
                require('../../../assets/images/mainpage-one-tabl@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: ${device.tablet}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-one-mob-1x.webp'),
                require('../../../assets/images/mainpage-one-mob@2x.webp'),
                require('../../../assets/images/mainpage-one-mob@3x.webp'))
              }
              type="image/webp"
              media={`(min-width: 150px)`}
            />

            {/* png */}
            <source
              srcset={
                (require('../../../assets/images/mainpage-one-desk-1x.png'),
                require('../../../assets/images/mainpage-one-desk@2x.png'),
                require('../../../assets/images/mainpage-one-desk@3x.png'))
              }
              media={`(min-width: ${device.desktop}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-one-tabl-1x.png'),
                require('../../../assets/images/mainpage-one-tabl@2x.png'),
                require('../../../assets/images/mainpage-one-tabl@3x.png'))
              }
              media={`(min-width: ${device.tablet}px)`}
            />
            <source
              srcset={
                (require('../../../assets/images/mainpage-one-mob-1x.png'),
                require('../../../assets/images/mainpage-one-mob@2x.png'),
                require('../../../assets/images/mainpage-one-mob@3x.png'))
              }
              media={`(min-width: 150px)`}
            />
            <ImgDescription
              src={require('../../../assets/images/mainpage-one-mob-1x.png')}
              alt="tasks"
              width="335"
            />
          </picture>
        </ItemDescription>
      </ListDescription>
    </ContainerMainPage>
  );
};
export default Description;
