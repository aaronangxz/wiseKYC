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
        path: 'base',
        Component: lazy(() => import('pages/Detail/Base')),
        meta: {
          title: 'Basic Information',
        },
      },
      {
        path: 'advanced',
        Component: lazy(() => import('pages/Detail/Advanced')),
        meta: { title: 'Detailed Information' },
      },
      {
        path: 'deploy',
        Component: lazy(() => import('pages/Detail/Deploy')),
        meta: { title: 'Insights' },
      },
      {
        path: 'secondary',
        Component: lazy(() => import('pages/Detail/Secondary')),
        meta: { title: 'Audit Log' },
      },
    ],
  },
];

export default result;
