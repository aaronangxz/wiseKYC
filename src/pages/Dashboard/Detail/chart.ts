import type { EChartOption } from 'echarts';

import { ONE_WEEK_LIST, getChartDataSet, getTimeArray, getRandomInt } from 'utils/chart';

// line chart options
export const getLineChartOptions = (dateTime: Array<string> = []): EChartOption => {
  let dateArray: Array<string> = ONE_WEEK_LIST;
  if (dateTime.length > 0) {
    const dividedNum = 7;
    dateArray = getTimeArray(dateTime, dividedNum, 'YYYY-MM-DD');
  }

  return {
    grid: {
      top: '5%',
      right: '10px',
      left: '30px',
      bottom: '60px',
    },
    legend: {
      left: 'center',
      bottom: '0',
      orient: 'horizontal', // legend 横向布局。
      data: ['Trading', 'Custodian', 'Spot', 'Derivative'],
    },
    xAxis: {
      type: 'category',
      data: dateArray,
      boundaryGap: false,
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
      axisLine: {
        lineStyle: {
          color: '#E3E6EB',
          width: 1,
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        name: 'Trading',
        stack: '总量',
        data: [
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
        ],
        type: 'line',
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      },
      {
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        name: 'Custodian',
        stack: '总量',
        data: [
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
        ],
        type: 'line',
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      },
      {
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        name: 'Spot',
        stack: '总量',
        data: [
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
        ],
        type: 'line',
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      },
      {
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        name: 'Derivative',
        stack: '总量',
        data: [
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
          getRandomInt(),
        ],
        type: 'line',
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      },
    ],
  };
};

export const getScatterChartOptions = (dateTime: Array<string> = []): EChartOption => {
  const [timeArray, inArray, outArray] = getChartDataSet(dateTime);

  return {
    xAxis: {
      data: timeArray,
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#E3E6EB',
          width: 1,
        },
      },
    },
    yAxis: {
      type: 'value',
      // splitLine: { show: false},
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
      nameTextStyle: {
        padding: [0, 0, 0, 60],
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    tooltip: {
      trigger: 'item',
    },
    grid: {
      top: '5px',
      left: '25px',
      right: '5px',
      bottom: '60px',
    },
    legend: {
      left: 'center',
      bottom: '0',
      orient: 'horizontal', // legend 横向布局。
      data: ['with WiseKYC', 'without WiseKYC'],
      itemHeight: 8,
      itemWidth: 8,
    },
    series: [
      {
        name: 'with WiseKYC',
        symbolSize: 10,
        data: outArray,
        type: 'scatter',
      },
      {
        name: 'without WiseKYC',
        symbolSize: 10,
        data: inArray,
        type: 'scatter',
      },
    ],
  };
};
