import ScrollToTop from 'react-scroll-to-top';
import {
  AuthSection,
  Description,
  ReviewsSlider,
} from '../components/MainPage/index';
const MainPage = () => (
  <main>
    <AuthSection />
    <Description />
    <ReviewsSlider />
    <ScrollToTop color="#3E85F3" smooth="true" />
  </main>
);

export default MainPage;
