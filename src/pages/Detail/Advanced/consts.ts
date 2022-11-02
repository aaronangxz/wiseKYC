// Mock Data of 基本信息
interface InfoItem {
  id: number;
  name: string;
  value: string;
  type?: string;
}
export const dataInfo: InfoItem[] = [
  { id: 1, name: 'Customer Name', value: 'Ayem Ay Skemmar' },
  { id: 2, name: 'KYC Status', value: 'Processing', type: 'status' },
  { id: 3, name: 'Customer ID', value: 'BH00010' },
  { id: 4, name: 'Account Type', value: 'Trading, Custody' },
  { id: 5, name: 'Account Level', value: 'Level I' },
  { id: 6, name: 'Estimated Daily Trading Limit', value: '$ 50,000' },
  { id: 7, name: 'Submitted via', value: 'ReactNative-iOS' },
  { id: 8, name: 'Country', value: 'South Africa' },
  { id: 9, name: 'Application Date', value: '2022-11-01' },
  { id: 10, name: 'KYC Start Date', value: '2022-11-01' },
  { id: 11, name: 'Expiration Date', value: '2022-12-31' },
  { id: 12, name: 'Documents', value: 'BH00010.pdf', type: 'link' },
  { id: 13, name: 'Remarks', value: '--' },
  { id: 14, name: 'Last Modified', value: '2022-11-01 12:22:45' },
];

// Mock Data of 变更记录
interface IStepItem {
  id: number;
  name: string;
  detail?: string;
}
export const dataStep: IStepItem[] = [
  { id: 1, name: 'Application Submitted', detail: 'Submitted on 01/11' },
  { id: 2, name: 'Process KYC', detail: 'Completed on 02/11' },
  { id: 3, name: 'Manual Approval', detail: 'Estimated Completion on 04/11' },
  { id: 4, name: 'Approve', detail: '' },
];
export const stepCurrent = 2;

// Mock Data of 产品采购明细
export const total = 5;
const listTables: any = [];
// for (let i = 0; i < total; i++) {
  listTables.push({
    id: 0,
    number: '35244545',
    name: 'L3 Approval ',
    tag: 'Required',
    code: 'ni.hao@wisenance.com	',
    amount: 1,
    department: 'Compliance',
    createtime: '2021-11-02 15:43:50',
  },
  {
    id: 1,
    number: '45634664',
    name: 'L3 Approval ',
    tag: 'Required',
    code: 'wh.ut@wisenance.com	',
    amount: 1,
    department: 'Risk',
    createtime: '2021-11-02 10:22:56',
  },
  {
    id: 2,
    number: '34564364',
    name: 'Analyst ',
    tag: 'Required',
    code: 'lmao@wisenance.com	',
    amount: 1,
    department: 'KYC',
    createtime: '2021-11-01 13:33:12',
  },
  {
    id: 3,
    number: '63464656',
    name: 'Analyst ',
    tag: 'Required',
    code: 'sadge@wisenance.com	',
    amount: 1,
    department: 'KYC',
    createtime: '2021-11-01 10:43:56',
  },
  );
// }
export const dataBuyList = listTables;
