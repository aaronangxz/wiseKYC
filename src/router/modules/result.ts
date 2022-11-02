import { lazy } from 'react';
import { CheckCircleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/result',
    meta: {
      title: 'Approvals',
      Icon: CheckCircleIcon,
    },
    children: [
      {
        path: 'success',
        Component: lazy(() => import('pages/Result/Success')),
        meta: {
          title: '成功页',
        },
      },
    ],
  },
];

export default result;
