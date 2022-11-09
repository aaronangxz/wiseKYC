import React, { useEffect, useState } from 'react';
import { Table, Card } from 'tdesign-react';
import { TableSort, TdPrimaryTableProps } from 'tdesign-react/es/table';
import request from 'utils/request';
import { TableModel, TABLE_COLUMNS1 } from '../constant';
import ManagementPopup from './ManagementPopup';
import Style from './BottomTable.module.less';

export const daat:TableModel[] = [{
  name: "US-1",
  adminName: "US-East",
  updateTime: "08/11/2022 22:30",
  telephone: "Active" ,
  op: "undefined | string | number",
},
{
  name: "US2",
  adminName: "US-East",
  updateTime: "09/11/2022 20:34",
  telephone: "Active" ,
  op: "undefined | string | number",
},
{
  name: "US3",
  adminName: "US-East",
  updateTime: "09/11/2022 22:10",
  telephone: "-" ,
  op: "undefined | string | number",}
  ,{
    name: "US4",
    adminName: "US-East",
    updateTime: "08/11/2022 05:40",
    telephone: "Active" ,
    op: "undefined | string | number",},
    {
      name: "US5",
      adminName: "US-East",
      updateTime: "10/11/2022 09:04",
      telephone: "Active" ,
      op: "undefined | string | number",},
      {
        name: "EU1",
        adminName: "Europe-West",
        updateTime: "02/11/2022 20:30",
        telephone: "Active" ,
        op: "undefined | string | number",
      },
      {
        name: "EU2",
        adminName: "Europe-West",
        updateTime: "-",
        telephone: "Deploying" ,
        op: "undefined | string | number",
      },
      {
        name: "EU3",
        adminName: "Europe-West",
        updateTime: "11/11/2022 16:30",
        telephone: "Active" ,
        op: "undefined | string | number",}
        ,{
          name: "EU4",
          adminName: "Europe-West",
          updateTime: "-",
          telephone: "Offline" ,
          op: "undefined | string | number",},
          {
            name: "EU5",
            adminName: "Europe-West",
            updateTime: "08/11/2022 21:30",
            telephone: "Active" ,
            op: "undefined | string | number",},
            {
              name: "Asia1",
              adminName: "Asia-SouthEast",
              updateTime: "08/11/2022 22:20",
              telephone: "Active" ,
              op: "undefined | string | number",
            },
            {
              name: "Asia2",
              adminName: "Asia-SouthEast",
              updateTime: "10/11/2022 23:11",
              telephone: "Active" ,
              op: "undefined | string | number",
            },
            {
              name: "Asia3",
              adminName: "Asia-SouthEast",
              updateTime: "-",
              telephone: "Offline" ,
              op: "undefined | string | number",}
              ,{
                name: "Asia4",
                adminName: "Asia-SouthEast",
                updateTime: "08/11/2022 22:30",
                telephone: "Active" ,
                op: "undefined | string | number",},
                {
                  name: "Asia5",
                  adminName: "Asia-SouthEast",
                  updateTime: "09/11/2022 02:07",
                  telephone: "Active" ,
                  op: "undefined | string | number",}
]

const BottomTable1 = () => {
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
      <Card title='Deployment' headerBordered>
        <Table
          columns={getTableColumns(TABLE_COLUMNS1)}
          rowKey='index'
          pagination={pagination}
          data={daat}
          sort={sort}
          onSortChange={(newSort: TableSort) => setSort(newSort)}
        />
      </Card>
    </>
  );
};

export default React.memo(BottomTable1);
