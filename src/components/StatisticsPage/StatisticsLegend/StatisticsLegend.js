import {
  CircleDay,
  CircleMonth,
  WrapperLegend,
  WrapperInner,
  TextLegend,
} from './StatisticsLegend.styled';

const Statisticslegend = () => {
  return (
    <>
      <WrapperLegend>
        <WrapperInner>
          <CircleDay />
          <TextLegend>By Day</TextLegend>
        </WrapperInner>
        <WrapperInner>
          <CircleMonth />
          <TextLegend>By Month</TextLegend>
        </WrapperInner>
      </WrapperLegend>
    </>
  );
};
export default Statisticslegend;
