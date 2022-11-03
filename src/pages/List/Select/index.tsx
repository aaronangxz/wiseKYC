import React, { useState, memo, useEffect } from 'react';
import { Table, Dialog, Button, Row } from 'tdesign-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListSelect, getList, clearPageState } from 'modules/list/select';
import SearchForm from './components/SearchForm';
import { StatusMap, ContractTypeMap, PaymentTypeMap } from '../Base';

import './index.module.less';
import classnames from 'classnames';
import CommonStyle from '../../../styles/common.module.less';
import { IContract } from 'services/contract';

export const daat:IContract[] = [
  {
    index: 1,
    name: "Trading",
    status: 1,
    no: "BH00010",
    contractType: 1,
    paymentType: 1 ,
    amount: "ni.hao@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 2,
    name: "Trading",
    status: 0,
    no: "BH00009",
    contractType: 0,
    paymentType: 0 ,
    amount: "rina@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 3,
    name: "Spot",
    status: 2,
    no: "BH00008",
    contractType: 2,
    paymentType: 0 ,
    amount: "hey@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 4,
    name: "Custody",
    status: 3,
    no: "BH00007",
    contractType: 1,
    paymentType: 1 ,
    amount: "yo@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 5,
    name: "Derivatives",
    status: 4,
    no: "BH00006",
    contractType: 2,
    paymentType: 1 ,
    amount: "erm@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 6,
    name: "Trading",
    status: 4,
    no: "BH00005",
    contractType: 2,
    paymentType: 1 ,
    amount: "huh@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 7,
    name: "Custody",
    status: 5,
    no: "BH00004",
    contractType: 0,
    paymentType: 0 ,
    amount: "sadge@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 8,
    name: "Spot",
    status: 4,
    no: "BH00003",
    contractType: 2,
    paymentType: 1 ,
    amount: "lmao@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 9,
    name: "Spot",
    status: 4,
    no: "BH00002",
    contractType: 2,
    paymentType: 1 ,
    amount: "lul@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },
  {
    index: 10,
    name: "Derivatives",
    status: 2,
    no: "BH00001",
    contractType: 2,
    paymentType: 1 ,
    amount: "wise@wisenance.com",
    updateTime: "string",
    adminName: 's',
  },]
  
export const SelectTable = () => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListSelect);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
  const [visible, setVisible] = useState(false);
  const { loading, contractList, current, pageSize, total } = pageState;

  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );
    return () => {
      dispatch(clearPageState());
    };
  }, []);

  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }

  function rehandleClickOp(record: any) {
    console.log(record);
  }

  function handleClickDelete(record: any) {
    console.log(record);
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
  }

  
  return (
    <>
      <Row justify='start' style={{ marginBottom: '20px' }}>
        <SearchForm
          onSubmit={async (value) => {
            console.log(value);
          }}
          onCancel={() => {}}
        />
      </Row>
      <Table
        loading={loading}
        data={daat}
        columns={[
          {
            title: 'Type',
            fixed: 'left',
            align: 'left',
            ellipsis: true,
            colKey: 'name',
          },
          {
            title: 'Status',
            colKey: 'status',
            width: 200,
            cell({ row }) {
              return StatusMap[row.status || 5];
            },
          },
          {
            title: 'Customer ID',
            width: 200,
            ellipsis: true,
            colKey: 'no',
          },
          {
            title: 'Risk Level',
            width: 200,
            ellipsis: true,
            colKey: 'contractType',
            cell({ row }) {
              return ContractTypeMap[row.contractType];
            },
          },
          {
            title: 'Documents',
            width: 200,
            ellipsis: true,
            colKey: 'paymentType',
            cell({ row }) {
              return PaymentTypeMap[row.paymentType];
            },
          },
          {
            title: 'Assigned Analyst',
            width: 200,
            ellipsis: true,
            colKey: 'amount',
          },
          {
            align: 'left',
            fixed: 'right',
            width: 200,
            colKey: 'op',
            title: 'Action',
            cell(record) {
              return (
                <>
                  <Button
                    theme='primary'
                    variant='text'
                    onClick={() => {
                      rehandleClickOp(record);
                    }}
                  >
                    Manage
                  </Button>
                  <Button
                    theme='primary'
                    variant='text'
                    onClick={() => {
                      handleClickDelete(record);
                    }}
                  >
                    Flag
                  </Button>
                </>
              );
            },
          },
        ]}
        rowKey='index'
        selectedRowKeys={selectedRowKeys}
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
      <Dialog header='Do you want to flag this application?' visible={visible} onClose={handleClose}>
        <p>Flagged application will require manual verifications.</p>
      </Dialog>
    </>
  );
};

const selectPage: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
    <SelectTable />
  </div>
);

export default memo(selectPage);
