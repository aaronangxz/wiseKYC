import { lazy } from 'react';
import { LayersIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/detail',
    meta: {
      title: 'KYC',
      Icon: LayersIcon,
    },
    children: [
      {
        path: 'advanced',
        Component: lazy(() => import('pages/Detail/Advanced')),
        meta: { title: 'Details' },
      },
      {
        path: 'deploy',
        Component: lazy(() => import('pages/Detail/Deploy')),
        meta: { title: 'System Monitoring' },
      },
      {
        path: 'secondary',
        Component: lazy(() => import('pages/Detail/Secondary')),
        meta: { title: 'Audit Log' },
      },
      {
        path: 'card',
        Component: lazy(() => import('pages/List/Card')),
        meta: { title: 'Algorithms' },
      },
    ],
  },
];

export default result;
