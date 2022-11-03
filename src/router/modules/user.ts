import { lazy } from 'react';
import { UserCircleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/user',
    meta: {
      title: 'Users',
      Icon: UserCircleIcon,
      hidden:true,
    },
    children: [
      {
        path: 'index',
        Component: lazy(() => import('pages/User')),
        meta: {
          title: 'User Details',
          hidden:true
        },
      },
    ],
  },
];

export default result;
