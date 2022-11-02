import { IBoardProps, ETrend } from 'components/Board';

export const PANE_LIST: Array<IBoardProps> = [
  {
    title: 'Applications',
    count: '1126',
    trendNum: '10%',
    trend: ETrend.up,
  },
  {
    title: 'Credit Risk Flag',
    count: '13',
    trendNum: '13%',
    trend: ETrend.down,
  },
  {
    title: 'Behavioural Flag',
    count: '4',
    trendNum: '10%',
    trend: ETrend.up,
  },
  {
    title: 'KYC Flag',
    count: '90',
    trendNum: '1%',
    trend: ETrend.down,
  },
  {
    title: 'Approval Rate（%）',
    count: '92.5',
    trendNum: '7%',
    trend: ETrend.up,
  },
  {
    title: 'Overall Accuracy（%）',
    count: '97',
    trendNum: '2%',
    trend: ETrend.up,
  },
  {
    title: 'Pattern Detection Accuracy（%）',
    count: '88',
    trendNum: '2%',
    trend: ETrend.up,
  },
  {
    title: 'KYC Accuracy（%）',
    count: '94',
    trendNum: '2%',
    trend: ETrend.up,
  },
];

export const PRODUCT_LIST = [
  {
    description: 'Assess and score the credit level of a user.',
    index: 1,
    isSetup: true,
    name: 'Risk Scoring',
    type: 'A',
    icon: 'user',
  },
  {
    description: 'Assess credit risk based on past records and pattern.',
    index: 1,
    isSetup: true,
    name: 'Credit Risk Verification',
    type: 'C',
    icon: 'creditcard',
  },
];
