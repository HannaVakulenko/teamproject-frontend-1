import { Date, ButtonIncrease, ButtonDecrease } from './PeriodPaginator.styled';

const PeriodPaginator = ({ date }) => {
  const increasePeriod = () => {};
  const decreasePeriod = () => {};

  // const formatDate = month || date;

  return (
    <>
      <Date>{date}</Date>
      <ButtonIncrease onClick={increasePeriod}>L</ButtonIncrease>
      <ButtonDecrease onClick={decreasePeriod}>R</ButtonDecrease>
    </>
  );
};
export default PeriodPaginator;
