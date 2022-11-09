import type { TdPrimaryTableProps, SorterFun, TableRowData } from 'tdesign-react/es/table';

export interface TableModel {
  name: string;
  adminName: string;
  updateTime: string;
  telephone: string | number;
  op?: undefined | string | number;
}

const nameSorter: SorterFun<TableRowData> = (a, b) => {
  const result = a.name.charCodeAt(0) - b.name.charCodeAt(0);
  if (result > 0) return 1;
  if (result < 0) return -1;
  return 0;
};

export const TABLE_COLUMNS: TdPrimaryTableProps['columns'] = [
  {
    width: '250',
    ellipsis: true,
    colKey: 'name',
    title: 'Model',
    sortType: 'all',
    sorter: nameSorter,
  },
  {
    width: '224',
    ellipsis: true,
    colKey: 'adminName',
    title: 'Cluster',
  },
  {
    width: '224',
    ellipsis: true,
    colKey: 'telephone',
    title: 'Usage',
  },
  {
    width: '224',
    className: 'test',
    ellipsis: true,
    colKey: 'updateTime',
    title: 'Last Active',
    sortType: 'all',
    sorter: true,
  },
  {
    align: 'left',
    width: '200',
    className: 'test2',
    ellipsis: true,
    colKey: 'op',
    fixed: 'right',
    title: 'Action',
  },
];

export const TABLE_COLUMNS1: TdPrimaryTableProps['columns'] = [
  {
    width: '200',
    ellipsis: true,
    colKey: 'name',
    title: 'Machine',
    sortType: 'all',
    sorter: nameSorter,
  },
  {
    width: '224',
    ellipsis: true,
    colKey: 'adminName',
    title: 'Cluster',
  },
  {
    width: '224',
    ellipsis: true,
    colKey: 'telephone',
    title: 'Status',
  },
  {
    width: '224',
    className: 'test',
    ellipsis: true,
    colKey: 'updateTime',
    title: 'Last Deployment',
    sortType: 'all',
    sorter: true,
  },
  {
    align: 'left',
    width: '200',
    className: 'test2',
    ellipsis: true,
    colKey: 'op',
    fixed: 'right',
    title: 'Action',
  },
];

export const POPUP_DATA = {
  formData: {
    name: '',
    warning: '',
    success: '',
    failB: '',
    warningB: '',
    loading: '',
    add: '',
    help: '',
  },
  options: [
    {
      label: '资源初始化后',
      value: 'beijing',
    },
    {
      label: '上海',
      value: 'shanghai',
    },
  ],
  options1: [
    {
      label: '资源初始化后',
      value: 'guangzhou',
    },
    {
      label: '深圳',
      value: 'shenzhen',
    },
    {
      label: '东莞',
      value: 'dongguang',
    },
  ],
  options2: [
    {
      label: '资源初始化后',
      value: 'nanjing',
    },
    {
      label: '苏州',
      value: '苏州',
    },
    {
      label: '无锡',
      value: 'wuxi',
    },
  ],
  tSelectOptions: [
    {
      label: 'Sanzhang',
      value: '1',
    },
    {
      label: 'ls',
      value: '2',
    },
    {
      label: 'James',
      value: '3',
    },
  ],
};

export const BASE_INFO_DATA = [
  {
    name: 'Cluster',
    value: 'Asia - Singapore',
  },
  {
    name: 'Cluster ID',
    value: 'cls - 2ntelvxw',
    type: {
      key: 'color',
      value: 'blue',
    },
  },
  {
    name: 'Status',
    value: 'Deploying',
    type: {
      key: 'color',
      value: 'green',
    },
  },
  {
    name: 'Version',
    value: '1.7.8',
  },
  {
    name: 'Configuration',
    value: '32 Cores 192 GB',
  },
  {
    name: 'Location',
    value: 'Singapore',
  },
  {
    name: 'Resource',
    value: 'Default',
  },
  {
    name: 'Nodes',
    value: '8',
  },
  {
    name: 'Network',
    value: 'vpc - 5frmkm1x',
    type: {
      key: 'color',
      value: 'blue',
    },
  },
  {
    name: 'Host',
    value: '172.16.0.0 / 16',
  },
  {
    name: 'Certificate',
    value: 'View Certificate',
    type: {
      key: 'color',
      value: 'blue',
    },
  },
  {
    name: 'Deploy Date',
    value: '2022-11-08 22:11:44',
    type: {
      key: 'contractAnnex',
      value: 'pdf',
    },
  },
  {
    name: 'Descrption',
    value: 'Regular Deployment 18',
  },
];
