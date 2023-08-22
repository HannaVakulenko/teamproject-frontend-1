import ScrollToTop from 'react-scroll-to-top';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyEmail, refreshUser } from 'redux/auth/operations';
import {
  AuthSection,
  Description,
  ReviewsSlider,
} from '../components/MainPage/index';
const MainPage = () => {

  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let verificationToken = searchParams.get('varification');

  useEffect(() => {
    const verifyUserEmail = async verificationToken => {
      try {
        await dispatch(verifyEmail(verificationToken)).unwrap();
        await dispatch(refreshUser()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    if (verificationToken) {
      verifyUserEmail(verificationToken);
    }
  }, [dispatch, verificationToken]);

  return (
    <main>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <ScrollToTop color="#3E85F3" smooth="true" />
    </main>
  )
};

export default MainPage;
