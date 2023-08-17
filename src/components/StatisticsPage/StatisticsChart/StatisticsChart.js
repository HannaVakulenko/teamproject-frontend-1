import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LabelList,
  ResponsiveContainer,
  Label,
} from 'recharts';

import { device } from 'constants';
import { fetchTasks } from '../../../redux/tasks/operations';

import { selectDate } from '../../../redux/date/selectors';

import { selectTasksByCategory } from 'redux/tasks/selectors';
import { category } from 'constants';

import { ChartContainer } from './StatisticsChart.styled';

// Поки що данні для прикладу(тестові)
// const data = [
//   {
//     name: 'To do',
//     uv: 22,
//     pv: 22,
//   },
//   {
//     name: 'In Progress',
//     uv: 35,
//     pv: 28,
//   },
//   {
//     name: 'Done',
//     uv: 43,
//     pv: 50,
//   },
// ];

const StatisticsChart = () => {
  const dispatch = useDispatch();

  //Дата
  const dateStatistics = useSelector(selectDate);
  

  // Задачи по категоріям за місяць
  const todoByMonth = useSelector(state =>
    selectTasksByCategory(state, category.toDo)
  );
  const inprogressByMonth = useSelector(state =>
    selectTasksByCategory(state, category.inProgress)
  );
  const doneByMonth = useSelector(state =>
    selectTasksByCategory(state, category.done)
  );

  // Задачи по категоріям за день

  const todoByDay = todoByMonth.filter(item =>
    item.date.includes(dateStatistics)
  );
  const inprogressByDay = inprogressByMonth.filter(item =>
    item.date.includes(dateStatistics)
  );
  const doneByDay = doneByMonth.filter(item =>
    item.date.includes(dateStatistics)
  );

  //кількість задач за місяць кожної категорії
  const todoByMonthCount = todoByMonth.length || 0;
  const inprogressByMonthCount = inprogressByMonth.length || 0;
  const doneByMonthCount = doneByMonth.length || 0;

  //кількість задач за день кожної категорії
  const todoByDayCount = todoByDay.length || 0;
  const inprogressByDayCount = inprogressByDay.length || 0;
  const doneByDayCount = doneByDay.length || 0;

  //кількість всього задач за місяць
  const totalTasksByMonth =
    todoByMonthCount + inprogressByMonthCount + doneByMonthCount;

  //кількість всього задач за день
  const totalTasksByDay =
    todoByDayCount + inprogressByDayCount + doneByDayCount;

  //відсоткове відношення задач за місяць
  const todoByMonthPercentage = Number(
    (todoByMonthCount / totalTasksByMonth) * 100
  ).toFixed();

  const inprogressByMonthPercentage = Number(
    (inprogressByMonthCount / totalTasksByMonth) * 100
  ).toFixed();

  const doneByMonthPercentage = Number(
    (doneByMonthCount / totalTasksByMonth) * 100
  ).toFixed();

  //відсоткове відношення задач за день

  const todoByDayPercentage = Number(
    (todoByDayCount / totalTasksByDay) * 100
  ).toFixed();

  const inprogressByDayPercentage = Number(
    (inprogressByDayCount / totalTasksByDay) * 100
  ).toFixed();

  const doneByDayPercentage = Number(
    (doneByDayCount / totalTasksByDay) * 100
  ).toFixed();

  //данні для відображення графіка
  const data = [
    {
      name: 'To do',
      uv: todoByDayPercentage || 0,
      pv: todoByMonthPercentage || 0,
    },
    {
      name: 'In Progress',
      uv: inprogressByDayPercentage || 0,
      pv: inprogressByMonthPercentage || 0,
    },
    {
      name: 'Done',
      uv: doneByDayPercentage || 0,
      pv: doneByMonthPercentage || 0,
    },
  ];

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

  //в залежності від ширини екрану застосовуються відповідні стилі

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

  useEffect(() => {
    dispatch(
      fetchTasks({
        monthStart: '2023-08-17',
        monthEnd: '2023-08-18',
      })
    );
  }, [dispatch]);

  return (
    <ChartContainer>
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
            left: -10,
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
            line-height={1.5}
            axisLine={false}
            tickLine={false}
          >
            <Label
              position="top"
              dy={-24}
              dx={-2}
              fontSize={14}
              fontWeight={600}
              lineHeight={1.5}
            >
              Tasks
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
    </ChartContainer>
  );
};

export default StatisticsChart;
