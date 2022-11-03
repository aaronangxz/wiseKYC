import React, { useState, memo, useEffect } from 'react';
import { Table, Tag, Row, Col, Button, Input } from 'tdesign-react';
import { ChevronUpCircleIcon, SearchIcon, ChevronDownCircleIcon } from 'tdesign-icons-react';
import classnames from 'classnames';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListBase, getList, clearPageState } from 'modules/list/base';
import CommonStyle from 'styles/common.module.less';
import style from './index.module.less';
import { IContract } from 'services/contract';

export const PaymentTypeMap: {
  [key: number]: React.ReactElement;
} = {
  0: (
    <>
    Incomplete
      <ChevronUpCircleIcon style={{ color: 'red', marginLeft: 4 }} />
    </>
  ),
  1: (
    <>
      Completed
      <ChevronDownCircleIcon style={{ color: 'green', marginLeft: 4 }} />
    </>
  ),
};

export const StatusMap: {
  [key: number]: React.ReactElement;
} = {
  1: (
    <Tag theme='warning' variant='light'>
      Pending Verification
    </Tag>
  ),
  2: (
    <Tag theme='warning' variant='light'>
      Pending KYC
    </Tag>
  ),
  3: (
    <Tag theme='success' variant='light'>
      KYC In Progress
    </Tag>
  ),
  4: (
    <Tag theme='success' variant='light'>
      Verified
    </Tag>
  ),
  5: (
    <Tag theme='danger' variant='light'>
      Flagged
    </Tag>
  ),
};

export const ContractTypeMap: {
  [key: number]: string;
} = {
  0: 'High',
  1: 'Medium',
  2: 'Low',
};

export const daat:IContract[] = [
  {
    adminName: 's',
  amount: "string",
  contractType: 1,
  index: 1,
  name: "string",
  no: "string",
  paymentType: 1 ,
  status: 1,
  updateTime: "string",
  },]

export default memo(() => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListBase);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([1, 2]);

  const { loading, contractList, current, pageSize, total } = pageState;

  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );
    return () => {
      console.log('clear');
      dispatch(clearPageState());
    };
  }, []);

  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }
  return (
    <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
      <Row justify='space-between' className={style.toolBar}>
        <Col>
          <Row gutter={8} align='middle'>
            <Col>
              <Button>New Case</Button>
            </Col>
            <Col>
              <Button theme='default'>导出合同</Button>
            </Col>
            <Col>
              <div>已选 {selectedRowKeys?.length || 0} 项</div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Input suffixIcon={<SearchIcon />} placeholder='请输入你需要搜索的型号' />
        </Col>
      </Row>

      <Table
        columns={[
          {
            colKey: 'row-select',
            fixed: 'left',
            type: 'multiple',
            // width: 50,
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'name',
            title: 'Type',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'status',
            title: 'Status',
            cell({ row }) {
              return StatusMap[row.status || 5];
            },
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'no',
            title: '合同编号',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'contractType',
            title: '合同类型',
            cell({ row }) {
              return ContractTypeMap[row.contractType];
            },
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'paymentType',
            title: '合同收付类型',
            cell({ row }) {
              return PaymentTypeMap[row.paymentType];
            },
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'amount',
            title: '合同金额（元）',
          },
          {
            align: 'left',
            fixed: 'right',
            width: 180,
            colKey: 'op',
            title: '操作',
            cell() {
              return (
                <>
                  <Button theme='primary' variant='text'>
                    管理
                  </Button>
                  <Button theme='primary' variant='text'>
                    删除
                  </Button>
                </>
              );
            },
          },
        ]}
        loading={loading}
        data={daat}
        rowKey='index'
        selectedRowKeys={selectedRowKeys}
        verticalAlign='top'
        hover
        onSelectChange={onSelectChange}
        pagination={{
          pageSize,
          total,
          current,
          showJumper: true,
          onCurrentChange(current, pageInfo) {
            dispatch(
              getList({
                pageSize: pageInfo.pageSize,
                current: pageInfo.current,
              }),
            );
          },
          onPageSizeChange(size) {
            dispatch(
              getList({
                pageSize: size,
                current: 1,
              }),
            );
          },
        }}
      />
    </div>
  );
});
