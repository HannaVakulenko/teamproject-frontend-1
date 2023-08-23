import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LabelList,
  Label,
  ResponsiveContainer,
} from 'recharts';

import { device } from 'constants';

import { selectDate } from '../../../redux/date/selectors';

import { selectTasksByCategory } from 'redux/tasks/selectors';
import { category } from '../../../constants/taskStatus';

import {
  ContainerSecondWrapper,
  ContainerFirstWrapper,
} from './StatisticsChart.styled';
import { useTranslation } from 'react-i18next';

const StatisticsChart = () => {
  const { t } = useTranslation();

  // Date
  let dateStatistics = useSelector(selectDate);
  const { currentDate } = useParams();

  if (currentDate) {
    dateStatistics = currentDate;
  }
  // Tasks by category for the month
  const todoByMonth = useSelector(state =>
    selectTasksByCategory(state, category.toDo)
  );
  const inprogressByMonth = useSelector(state =>
    selectTasksByCategory(state, category.inProgress)
  );
  const doneByMonth = useSelector(state =>
    selectTasksByCategory(state, category.done)
  );

  // Tasks by category for the day

  const todoByDay = todoByMonth.filter(item =>
    item.date.includes(dateStatistics)
  );
  const inprogressByDay = inprogressByMonth.filter(item =>
    item.date.includes(dateStatistics)
  );
  const doneByDay = doneByMonth.filter(item =>
    item.date.includes(dateStatistics)
  );

  // The number of tasks per month of each category
  const todoByMonthCount = todoByMonth.length || 0;
  const inprogressByMonthCount = inprogressByMonth.length || 0;
  const doneByMonthCount = doneByMonth.length || 0;

  // The number of tasks per day of each category
  const todoByDayCount = todoByDay.length || 0;
  const inprogressByDayCount = inprogressByDay.length || 0;
  const doneByDayCount = doneByDay.length || 0;

  // Total number of tasks per month
  const totalTasksByMonth =
    todoByMonthCount + inprogressByMonthCount + doneByMonthCount;

  // Total number of tasks per day
  const totalTasksByDay =
    todoByDayCount + inprogressByDayCount + doneByDayCount;

  // Percentage ratio of tasks per month
  const todoByMonthPercentage =
    totalTasksByMonth === 0
      ? 0
      : Number((todoByMonthCount / totalTasksByMonth) * 100).toFixed();

  const inprogressByMonthPercentage =
    totalTasksByMonth === 0
      ? 0
      : Number((inprogressByMonthCount / totalTasksByMonth) * 100).toFixed();

  const doneByMonthPercentage =
    totalTasksByMonth === 0
      ? 0
      : Number((doneByMonthCount / totalTasksByMonth) * 100).toFixed();

  // Percentage ratio of tasks per day

  const todoByDayPercentage =
    totalTasksByDay === 0
      ? 0
      : Number((todoByDayCount / totalTasksByDay) * 100).toFixed();

  const inprogressByDayPercentage =
    totalTasksByDay === 0
      ? 0
      : Number((inprogressByDayCount / totalTasksByDay) * 100).toFixed();

  const doneByDayPercentage =
    totalTasksByDay === 0
      ? 0
      : Number((doneByDayCount / totalTasksByDay) * 100).toFixed();

  const data = useMemo(
    () => [
      {
        name: 'To do',
        uv: todoByDayPercentage,
        pv: todoByMonthPercentage,
      },
      {
        name: 'In Progress',
        uv: inprogressByDayPercentage,
        pv: inprogressByMonthPercentage,
      },
      {
        name: 'Done',
        uv: doneByDayPercentage,
        pv: doneByMonthPercentage,
      },
    ],
    [
      todoByMonthPercentage,
      inprogressByMonthPercentage,
      doneByMonthPercentage,
      todoByDayPercentage,
      inprogressByDayPercentage,
      doneByDayPercentage,
    ]
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let chartWidth;
  let chartHeight;
  let chartMaxBarSize;

  let chartbarSize;
  let chartBarGap;
  let chartBarCategoryGap;

  let chartLabelListFontSize;
  let chartXAxisFontSiZe;

  let chartLabelListlineHeight;

  // Depending on the width of the screen, appropriate styles are applied

  switch (true) {
    case windowWidth <= device.mobile:
      chartWidth = 279;
      chartHeight = 333;
      chartbarSize = 22;

      chartMaxBarSize = 243;
      chartBarGap = 8;
      chartBarCategoryGap = 30;

      chartLabelListFontSize = 12;
      chartXAxisFontSiZe = 12;
      chartLabelListlineHeight = 1.33;
      break;
    case windowWidth <= device.tablet:
      chartWidth = 576;
      chartHeight = 360;
      chartbarSize = 27;

      chartMaxBarSize = 522;
      chartBarGap = 14;
      chartBarCategoryGap = 127;

      chartLabelListFontSize = 16;
      chartXAxisFontSiZe = 14;
      chartLabelListlineHeight = 1.13;
      break;
    case windowWidth <= device.desktop:
      chartWidth = 780;
      chartHeight = 360;
      chartbarSize = 27;

      chartMaxBarSize = 694;
      chartBarGap = 14;
      chartBarCategoryGap = 170;

      chartLabelListFontSize = 16;
      chartXAxisFontSiZe = 14;
      chartLabelListlineHeight = 1.13;
      break;

    default:
      chartWidth = 1087;
      chartHeight = 752;
      chartbarSize = 22;

      chartMaxBarSize = 694;
      chartBarGap = 14;
      chartBarCategoryGap = 170;

      chartLabelListFontSize = 16;
      chartXAxisFontSiZe = 14;
      chartLabelListlineHeight = 1.13;
      break;
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContainerSecondWrapper>
      <ContainerFirstWrapper>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <BarChart
            width={chartWidth}
            height={chartHeight}
            maxBarSize={chartMaxBarSize}
            barGap={chartBarGap}
            barCategoryGap={chartBarCategoryGap}
            data={data}
            margin={{
              top: 40,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray=" "
              stroke="#E3F3FF"
            />

            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="name"
              fontSize={chartXAxisFontSiZe}
              fontWeight={400}
              tickMargin={10}
            />
            <YAxis
              ticks={[0, 20, 40, 60, 80, 100]}
              position="left"
              tickCount={6}
              tickMargin={20}
              fontSize={14}
              fontWeight={500}
              lineHeight={1.5}
              axisLine={false}
              tickLine={false}
            >
              <Label
                position="top"
                dy={-24}
               
                fontSize={14}
                fontWeight={600}
                lineHeight={1.5}
              >
                {t('task')}
              </Label>
            </YAxis>

            <Legend />

            <defs>
              <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
                <stop offset="5%" stopColor="#FFD2DD" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#FFD2DD" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="1" x2="0" y2="0">
                <stop offset="5%" stopColor="#3E85F3" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#3E85F3" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Bar
              dataKey="uv"
              fill="url(#colorUv)"
              legendType="none"
              barSize={chartbarSize}
              minPointSize="3"
            >
              <LabelList
                dataKey="uv"
                position="top"
                fontSize={chartLabelListFontSize}
                fontWeight={500}
                lineHeight={chartLabelListlineHeight}
                formatter={value => `${value}%`}
              />
            </Bar>

            <Bar
              dataKey="pv"
              fill="url(#colorPv)"
              legendType="none"
              barSize={chartbarSize}
              minPointSize="3"
            >
              <LabelList
                dataKey="pv"
                position="top"
                fontSize={chartLabelListFontSize}
                fontWeight={500}
                lineHeight={chartLabelListlineHeight}
                formatter={value => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ContainerFirstWrapper>
    </ContainerSecondWrapper>
  );
};

export default StatisticsChart;
