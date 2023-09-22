import ScrollToTop from 'react-scroll-to-top';
import {
  AuthSection,
  Description,
  ReviewsSlider,
} from '../components/MainPage/index';
import { useParams } from 'react-router-dom';
import { verify, refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const MainPage = () => {
  const dispatch = useDispatch();
  const { verificationToken } = useParams();

  if (verificationToken) {
    const login = async verificationToken => {
       try {
        await dispatch(verify(verificationToken)).unwrap();
        await dispatch(refreshUser()).unwrap();
      } catch (error) {
        if (error.response.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Account not defined',
            confirmButtonColor: '#3E85F3',
          });
        }
      }
    };
    login(verificationToken);
  }

  return (
    <main>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <ScrollToTop color="#3E85F3" smooth="true" />
    </main>
  );
};

export default MainPage;
