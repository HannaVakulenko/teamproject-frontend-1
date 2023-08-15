import {
  Date,
  ButtonIncrease,
  ButtonDecrease,
  Icon,
} from './PeriodPaginator.styled';
import icon from 'assets/icons/symbol-defs.svg';

const PeriodPaginator = ({ date, getTasks }) => {
  // const formatDate = month || date;

  return (
    <>
      <Date>{(date[0], date[1], date[2])}</Date>
      <ButtonIncrease onClick={getTasks}>
        <Icon width="18" height="18">
          <use href={icon + '#icon-chevron-left'}></use>
        </Icon>
      </ButtonIncrease>
      <ButtonDecrease onClick={getTasks}>
        <svg width="18" height="18">
          <use href={icon + '#icon-chevron-right'}></use>
        </svg>
      </ButtonDecrease>
    </>
  );
};
export default PeriodPaginator;
