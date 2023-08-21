import { device } from 'constants';
import {
  AfterTitleDescription,
  ContainerMainPage,
  DescriptionSection,
  ImgDescription,
  ItemDescription,
  ListDescription,
  Number,
  OddNumbered,
  TextDescription,
  TitleDescription,
  WrappInfo,
} from './Description.styled';

import { mainpageCalendar } from 'assets/images/mainpageCalendar';
import { mainpageSidebar } from 'assets/images/mainpageSidebar';
import { mainpageOne } from 'assets/images/mainpageOne';

const Description = () => {
  return (
    <DescriptionSection>
      <ContainerMainPage>
        <ListDescription>
          <ItemDescription>
            <WrappInfo>
              <Number>1.</Number>
              <TitleDescription>Calendar</TitleDescription>
              <AfterTitleDescription>view</AfterTitleDescription>
              <TextDescription>
                GooseTrack's Calendar view provides a comprehensive overview of
                your schedule, displaying all your tasks, events, and
                appointments in a visually appealing and intuitive layout.
              </TextDescription>
            </WrappInfo>
            <picture>
              {/* Webp */}
              <source
                srcSet={`${mainpageCalendar.desk1xWebp}, ${mainpageCalendar.desk2xWebp} 2x, ${mainpageCalendar.desk3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.desktop}px)`}
              />
              <source
                srcSet={`${mainpageCalendar.tabl1xWebp}, ${mainpageCalendar.tabl2xWebp} 2x, ${mainpageCalendar.tabl3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.tablet}px)`}
              />
              <source
                srcSet={`${mainpageCalendar.mob1xWebp}, ${mainpageCalendar.mob2xWebp} 2x, ${mainpageCalendar.mob3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: 150px)`}
              />

              {/* png */}
              <source
                srcSet={`${mainpageCalendar.desk1xPng}, ${mainpageCalendar.desk2xPng} 2x, ${mainpageCalendar.desk3xPng} 3x`}
                media={`(min-width: ${device.desktop}px)`}
              />
              <source
                srcSet={`${mainpageCalendar.tabl1xPng}, ${mainpageCalendar.tabl2xPng} 2x, ${mainpageCalendar.tabl3xPng} 3x`}
                media={`(min-width: ${device.tablet}px)`}
              />
              <source
                srcSet={`${mainpageCalendar.mob1xPng}, ${mainpageCalendar.mob2xPng} 2x, ${mainpageCalendar.mob3xPng} 3x`}
                media={`(min-width: 150px)`}
              />
              <ImgDescription
                src={mainpageCalendar.desk1xPng}
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
                srcSet={`${mainpageSidebar.desk1xWebp}, ${mainpageSidebar.desk2xWebp} 2x, ${mainpageSidebar.desk3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.desktop}px)`}
              />
              <source
                srcSet={`${mainpageSidebar.tabl1xWebp}, ${mainpageSidebar.tabl2xWebp} 2x, ${mainpageSidebar.tabl3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.tablet}px)`}
              />
              <source
                srcSet={`${mainpageSidebar.mob1xWebp}, ${mainpageSidebar.mob2xWebp} 2x, ${mainpageSidebar.mob3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: 150px)`}
              />

              {/* png */}
              <source
                srcSet={`${mainpageSidebar.desk1xPng}, ${mainpageSidebar.desk2xPng} 2x, ${mainpageSidebar.desk3xPng} 3x`}
                media={`(min-width: ${device.desktop}px)`}
              />
              <source
                srcSet={`${mainpageSidebar.tabl1xPng}, ${mainpageSidebar.tabl2xPng} 2x, ${mainpageSidebar.tabl3xPng} 3x`}
                media={`(min-width: ${device.tablet}px)`}
              />
              <source
                srcSet={`${mainpageSidebar.mob1xPng}, ${mainpageSidebar.mob2xPng} 2x, ${mainpageSidebar.mob3xPng} 3x`}
                media={`(min-width: 150px)`}
              />
              <ImgDescription
                src={mainpageSidebar.desk1xPng}
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
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </TextDescription>
            </WrappInfo>
            <picture>
              {/* Webp */}
              <source
                srcSet={`${mainpageOne.desk1xWebp}, ${mainpageOne.desk2xWebp} 2x, ${mainpageOne.desk3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.desktop}px)`}
              />
              <source
                srcSet={`${mainpageOne.tabl1xWebp}, ${mainpageOne.tabl2xWebp} 2x, ${mainpageOne.tabl3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: ${device.tablet}px)`}
              />
              <source
                srcSet={`${mainpageOne.mob1xWebp}, ${mainpageOne.mob2xWebp} 2x, ${mainpageOne.mob3xWebp} 3x`}
                type="image/webp"
                media={`(min-width: 150px)`}
              />

              {/* png */}
              <source
                srcSet={`${mainpageOne.mob1xPng}, ${mainpageOne.mob2xPng} 2x, ${mainpageOne.mob3xPng} 3x`}
                media={`(min-width: 150px)`}
              />
              <source
                srcSet={`${mainpageOne.tabl1xPng}, ${mainpageOne.tabl2xPng} 2x, ${mainpageOne.tabl3xPng} 3x`}
                media={`(min-width: ${device.tablet}px)`}
              />
              <source
                srcSet={`${mainpageOne.desk1xPng}, ${mainpageOne.desk2xPng} 2x, ${mainpageOne.desk3xPng} 3x`}
                media={`(min-width: ${device.desktop}px)`}
              />
              <ImgDescription
                src={mainpageOne.desk1xPng}
                alt="tasks"
                width="335"
              />
            </picture>
          </ItemDescription>
        </ListDescription>
      </ContainerMainPage>
    </DescriptionSection>
  );
};
export default Description;
