import React, { useState } from 'react';
import { Col, Radio, Row, Card } from 'tdesign-react';
import { EChartOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';
import { getBarOptions } from '../chart';
import useDynamicChart from 'hooks/useDynamicChart';
import DynamicLineChart from './DynamicLineChart';
import Style from './TopChart.module.less';

const TopChart = () => {
  const [barOptions, setBarOptions] = useState<EChartOption>(getBarOptions());

  const tabChange = (isMonth: boolean) => {
    setBarOptions(getBarOptions(isMonth));
  };
  const dynamicBarChartOptions = useDynamicChart(barOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.0.axisLabel.color', 'yAxis.0.axisLabel.color'],
  });
  return (
    <Row gutter={16} className={Style.panel}>
      <Col span={6}>
        <Card title='KYC Trend' headerBordered>
          <div className={Style.deployPanelLeft}>
            <DynamicLineChart />
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title='Alert'
          headerBordered
          actions={
            <Radio.Group defaultValue='week' onChange={(val) => tabChange(val === 'month')}>
              <Radio.Button value='week'>This Week</Radio.Button>
              <Radio.Button value='month'>This Month</Radio.Button>
            </Radio.Group>
          }
        >
          <ReactEcharts
            option={dynamicBarChartOptions} // option：图表配置项
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 500 }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(TopChart);
