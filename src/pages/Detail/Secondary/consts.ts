export type TStatus = 1 | 2; // 1: 未读 2:已读
export interface IItem {
  id: number;
  content: string;
  tag: string;
  createTime: string;
  status: TStatus;
  type: number;
}

export const dataItemList: IItem[] = [
  {
    id: 1,
    content: 'High Risk Detected - BH00010 - Pattern Detection Abnormality',
    tag: 'Fatal',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 1,
  },
  {
    id: 2,
    content: 'Dispute Approval - BH00007',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 2,
    type: 2,
  },
  {
    id: 3,
    content: 'Requires Attention - BH00011 - Invalid  Personal Identification Document',
    tag: 'Warning',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 3,
  },
  {
    id: 4,
    content: 'Account Verified - BH00069 - Risk Level 15%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 2,
  },
  {
    id: 5,
    content: 'Account Verified - BH00026 - Risk Level 11%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 2,
  },
  {
    id: 6,
    content: 'Account Verified - BH00099 - Risk Level 4%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 2,
    type: 2,
  },
  {
    id: 7,
    content: 'High Risk Detected - BH00018 - High Credit Risk',
    tag: 'Fatal',
    createTime: '2021-01-01 08:00',
    status:2,
    type: 1,
  },
  {
    id: 8,
    content: 'High Risk Detected - BH00077 - Suspicious Profile',
    tag: 'Fatal',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 1,
  },
  {
    id: 9,
    content: 'High Risk Detected - BH00284 - Pattern Detection Abnormality',
    tag: 'Fatal',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 1,
  },
  {
    id: 10,
    content: 'Account Verified - BH00134 - Risk Level 15%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 2,
  },
  {
    id: 11,
    content: 'Account Verified - BH02329 - Risk Level 11%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 2,
  },
  {
    id: 12,
    content: 'Account Verified - BH00019 - Risk Level 4%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 2,
    type: 2,
  },
  {
    id: 13,
    content: 'Account Verified - BH00604 - Risk Level 15%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 2,
  },
  {
    id: 14,
    content: 'Account Verified - BH00033 - Risk Level 11%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 2,
  },
  {
    id: 15,
    content: 'Account Verified - BH00194 - Risk Level 4%',
    tag: 'Info',
    createTime: '2021-01-01 08:00',
    status: 2,
    type: 2,
  },
  {
    id: 16,
    content: 'Requires Attention - BH02568 - Invalid  Personal Identification Document',
    tag: 'Warning',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 3,
  },
  {
    id: 17,
    content: 'Requires Attention - BH02929 - Invalid  Personal Identification Document',
    tag: 'Warning',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 3,
  },
  {
    id: 18,
    content: 'Requires Attention - BH07777 - Invalid  Personal Identification Document',
    tag: 'Warning',
    createTime: '2021-01-01 08:00',
    status: 1,
    type: 3,
  },
];
