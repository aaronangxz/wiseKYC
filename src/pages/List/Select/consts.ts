interface IOption {
  value: number | string;
  label: string;
}

// 合同状态枚举
export const CONTRACT_STATUS = {
  FAIL: 0,
  AUDIT_PENDING: 1,
  EXEC_PENDING: 2,
  EXECUTING: 3,
  FINISH: 4,
};

export const CONTRACT_STATUS_OPTIONS: Array<IOption> = [
  { value: CONTRACT_STATUS.FAIL, label: 'Flagged' },
  { value: CONTRACT_STATUS.AUDIT_PENDING, label: 'Pending Verification' },
  { value: CONTRACT_STATUS.EXEC_PENDING, label: 'Pending KYC' },
  { value: CONTRACT_STATUS.EXECUTING, label: 'KYC In Progress' },
  { value: CONTRACT_STATUS.FINISH, label: 'Verified' },
];

// 合同类型枚举
export const CONTRACT_TYPES = {
  MAIN: 0,
  SUB: 1,
  SUPPLEMENT: 2,
};

export const CONTRACT_TYPE_OPTIONS: Array<IOption> = [
  { value: CONTRACT_TYPES.MAIN, label: 'Low' },
  { value: CONTRACT_TYPES.SUB, label: 'Medium' },
  { value: CONTRACT_TYPES.SUPPLEMENT, label: 'High' },
];
