import React, { useState } from 'react';
import { Col, Row, Card } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
import useDynamicChart from 'hooks/useDynamicChart';
import DatePicker from 'components/DatePicker';
import { getp99LineChartOptions } from '../chart';
import Style from './MiddleChart.module.less';

const lineOptions = getp99LineChartOptions();


const P99Chart = () => {
  const [customOptions, setCustomOptions] = useState(lineOptions);

  const onTimeChange = (value: Array<string>) => {
    const options = getp99LineChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicLineChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
    borderColor: ['series.0.itemStyle.borderColor', 'series.1.itemStyle.borderColor'],
  });


  return (
    <Row gutter={[16, 16]} className={Style.middleChartPanel}>
      <Col xs={12} xl={12}>
        <Card title='Request Time P99' headerBordered actions={DatePicker(onTimeChange)}>
          <ReactEcharts option={dynamicLineChartOption} notMerge={true} lazyUpdate={true} />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(P99Chart);