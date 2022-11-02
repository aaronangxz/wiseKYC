import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const dashboard: IRouter[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      Icon: DashboardIcon,
    },
    children: [
      {
        path: 'base',
        Component: lazy(() => import('pages/Dashboard/Base')),
        meta: {
          title: 'Overview',
        },
      },
      {
        path: 'detail',
        Component: lazy(() => import('pages/Dashboard/Detail')),
        meta: {
          title: 'Insights',
        },
      },
    ],
  },
];

export default dashboard;
