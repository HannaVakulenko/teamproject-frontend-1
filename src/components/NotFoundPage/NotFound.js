import { useTranslation } from 'react-i18next';
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundWrapper,
  NotFoundText,
  NotFoundLink,
  NotFoundImg,
} from './NotFound.styled';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <NotFoundTitle>4</NotFoundTitle>
        <NotFoundImg></NotFoundImg>
        <NotFoundTitle>4</NotFoundTitle>
      </NotFoundWrapper>
      <NotFoundText>{t('page_404')}</NotFoundText>
      <NotFoundLink to={'/'}>{t('back')}</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFound;
