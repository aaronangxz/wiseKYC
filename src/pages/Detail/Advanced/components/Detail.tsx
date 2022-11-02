import React from 'react';
import { Button, Table, Tag, Card } from 'tdesign-react';
import { dataBuyList, total } from '../consts';
import Style from '../index.module.less';

const Detail = () => (
  <Card title='产品采购明细' className={Style.cardBox} header>
    <Table
      data={dataBuyList}
      columns={[
        {
          align: 'left',
          width: 300,
          ellipsis: true,
          colKey: 'number',
          title: 'Task ID',
        },
        {
          align: 'left',
          width: 200,
          ellipsis: true,
          colKey: 'name',
          title: 'Task',
          cell({ row }) {
            return (
              <>
                {row.name}
                <Tag theme='default' size='small'>
                  {row.tag}
                </Tag>
              </>
            );
          },
        },
        {
          align: 'left',
          width: 200,
          ellipsis: true,
          colKey: 'code',
          title: 'Operator',
        },
        {
          align: 'left',
          width: 100,
          ellipsis: true,
          colKey: 'amount',
          title: 'Priority',
          cell({ row }) {
            return row.amount;
          },
        },
        {
          align: 'left',
          width: 200,
          ellipsis: true,
          colKey: 'department',
          title: 'Department',
        },
        {
          align: 'left',
          width: 500,
          ellipsis: true,
          colKey: 'createtime',
          title: 'Time',
        },
        {
          align: 'left',
          fixed: 'right',
          width: 300,
          colKey: 'op',
          title: 'Action',
          cell() {
            return (
              <>
                <Button theme='primary' variant='text'>
                  Manage
                </Button>
                <Button theme='primary' variant='text'>
                  Flag
                </Button>
              </>
            );
          },
        },
      ]}
      rowKey='id'
      verticalAlign='top'
      hover
      pagination={{
        pageSize: 10,
        total,
        current: 1,
        showJumper: true,
        onChange(pageInfo) {
          console.log(pageInfo, 'onChange pageInfo');
        },
        onCurrentChange(current, pageInfo) {
          console.log(current, 'onCurrentChange current');
          console.log(pageInfo, 'onCurrentChange pageInfo');
        },
        onPageSizeChange(size, pageInfo) {
          console.log(size, 'onPageSizeChange size');
          console.log(pageInfo, 'onPageSizeChange pageInfo');
        },
      }}
    />
  </Card>
);

export default React.memo(Detail);
