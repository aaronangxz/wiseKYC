import React from 'react';
import { Col, Radio, Row, Table, Button, Card } from 'tdesign-react';
import { TdPrimaryTableProps } from 'tdesign-react/es/table';
import classnames from 'classnames';
import { TrendIcon, ETrend } from 'components/Board';
import { PURCHASE_TREND_LIST, SALE_TREND_LIST } from '../constant';
import Style from './RankList.module.less';

const DateRadioGroup = (
  <Radio.Group defaultValue='recent_week'>
    <Radio.Button value='recent_week'>This Week</Radio.Button>
    <Radio.Button value='recent_month'>Past 3 Months</Radio.Button>
  </Radio.Group>
);

const SALE_COLUMNS: TdPrimaryTableProps['columns'] = [
  {
    align: 'center',
    colKey: 'index',
    title: 'Rank',
    width: 100,
    fixed: 'left',
    cell: ({ rowIndex }) => (
      <span className={classnames(Style.rankIndex, { [Style.rankIndexTop]: rowIndex < 3 })}>{rowIndex + 1}</span>
    ),
  },
  {
    align: 'left',
    ellipsis: true,
    colKey: 'productName',
    title: 'Country',
    width: 150,
  },
  {
    align: 'center',
    colKey: 'growUp',
    width: 100,
    title: 'Change',
    cell: ({ row }) => <TrendIcon trend={row.growUp < 0 ? ETrend.down : ETrend.up} trendNum={Math.abs(row.growUp)} />,
  },
  {
    align: 'center',
    colKey: 'count',
    title: 'Total',
    width: 100,
  },
  {
    align: 'center',
    colKey: 'date',
    width: 140,
    title: 'Latest',
  },
  {
    align: 'center',
    colKey: 'operation',
    fixed: 'right',
    title: 'Action',
    width: 100,
    cell: ({ row }) => (
      <Button variant='text' theme='primary' onClick={() => console.log(row)}>
        View
      </Button>
    ),
  },
];

const PURCHASE_COLUMNS: TdPrimaryTableProps['columns'] = [
  {
    align: 'center',
    colKey: 'index',
    title: 'Rank',
    width: 100,
    fixed: 'left',
    cell: ({ rowIndex }) => (
      <span className={classnames(Style.rankIndex, { [Style.rankIndexTop]: rowIndex < 3 })}>{rowIndex + 1}</span>
    ),
  },
  {
    align: 'left',
    ellipsis: true,
    colKey: 'productName',
    title: 'Reason',
    width: 200,
  },
  {
    align: 'center',
    colKey: 'growUp',
    width: 100,
    title: 'Change',
    cell: ({ row }) => <TrendIcon trend={row.growUp < 0 ? ETrend.down : ETrend.up} trendNum={Math.abs(row.growUp)} />,
  },
  {
    align: 'center',
    colKey: 'count',
    title: 'Total',
    width: 100,
  },
  {
    align: 'center',
    colKey: 'date',
    width: 140,
    title: 'Latest',
  },
  {
    align: 'center',
    colKey: 'operation',
    title: 'Action',
    fixed: 'right',
    width: 80,
    cell: ({ row }) => (
      <Button variant='text' theme='primary' onClick={() => console.log(row)}>
        View
      </Button>
    ),
  },
];

const RankList = () => (
  <Row gutter={[16, 16]} className={Style.rankListPanel}>
    <Col xs={12} xl={6} span={12}>
      <Card title='Highest Risk' subtitle = 'By country' actions={DateRadioGroup} headerBordered>
        <Table columns={SALE_COLUMNS} rowKey='productName' size='medium' data={SALE_TREND_LIST} />
      </Card>
    </Col>
    <Col xs={12} xl={6} span={12}>
      <Card title='Most Common Risk' actions={DateRadioGroup} headerBordered>
        <Table columns={PURCHASE_COLUMNS} rowKey='productName' size='medium' data={PURCHASE_TREND_LIST} />
      </Card>
    </Col>
  </Row>
);

export default React.memo(RankList);
