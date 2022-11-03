import React, { useEffect, useState } from 'react';
import { Table, Card } from 'tdesign-react';
import { TableSort, TdPrimaryTableProps } from 'tdesign-react/es/table';
import request from 'utils/request';
import { TableModel, TABLE_COLUMNS } from '../constant';
import ManagementPopup from './ManagementPopup';
import Style from './BottomTable.module.less';

export const daat:TableModel[] = [{
  name: "Profiling",
  adminName: "US-East",
  updateTime: "Active",
  telephone: "67%" ,
  op: "undefined | string | number",
},
{
  name: "Segmentation",
  adminName: "US-East",
  updateTime: "Active",
  telephone: "89%" ,
  op: "undefined | string | number",
},
{
  name: "Risk Scoring",
  adminName: "US-East",
  updateTime: "Active",
  telephone: "78%" ,
  op: "undefined | string | number",}
  ,{
    name: "Screening",
    adminName: "US-East",
    updateTime: "Active",
    telephone: "92%" ,
    op: "undefined | string | number",},
    {
      name: "Pattern Detection",
      adminName: "US-East",
      updateTime: "Active",
      telephone: "99%" ,
      op: "undefined | string | number",}
]

const BottomTable = () => {
  const [sort, setSort] = useState<TableSort>({ sortBy: 'name', descending: true });
  const [visible, setVisible] = useState(false);
  const [{ tableData }, setTableData] = useState({ tableData: [{
    task:"s"
  }] });
  const pagination = {
    pageSize: 10,
    total: tableData.length,
    pageSizeOptions: [],
  };

  useEffect(() => {
    request.get('/api/get-project-list').then((res: any) => {
      if (res.code === 0) {
        const { list = [] } = res.data;
        setTableData({ tableData: list });
      }
    });
  }, []);

  const removeRow = (rowIndex: number) => {
    console.log(' rowIndex = ', rowIndex);
    console.log(' tableData = ', tableData);

    tableData.splice(rowIndex, 1);
    setTableData({ tableData });
  };

  const getTableColumns = (columns: TdPrimaryTableProps['columns']): TdPrimaryTableProps['columns'] => {
    if (columns) {
      columns[4].cell = (context) => {
        const { rowIndex } = context;
        return (
          <>
            <a className={Style.operationLink} onClick={() => setVisible(!visible)}>
              Manage
            </a>
            <a className={Style.operationLink} onClick={() => removeRow(rowIndex)}>
              Restart
            </a>
          </>
        );
      };
    }
    return columns;
  };

  return (
    <>
      <Card title='Machine Learning Models' headerBordered>
        <Table
          columns={getTableColumns(TABLE_COLUMNS)}
          rowKey='index'
          pagination={pagination}
          data={daat}
          sort={sort}
          onSortChange={(newSort: TableSort) => setSort(newSort)}
        />
      </Card>
      {visible && <ManagementPopup visible={visible} />}
    </>
  );
};

export default React.memo(BottomTable);
