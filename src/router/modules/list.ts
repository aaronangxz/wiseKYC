import { lazy } from 'react';
import { ViewModuleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/list',
    meta: {
      title: 'Applications',
      Icon: ViewModuleIcon,
    },
    children: [
      {
        path: 'tree',
        Component: lazy(() => import('pages/List/Tree')),
        meta: { title: 'Overview' },
      },
    ],
  },
];

export default result;
