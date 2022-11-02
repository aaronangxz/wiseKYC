import { lazy } from 'react';
import { QueueIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/form',
    meta: {
      title: 'Appeal & Dispute',
      Icon: QueueIcon,
    },
    children: [
      {
        path: 'step',
        Component: lazy(() => import('pages/Form/Step')),
        meta: { title: 'Application' },
      },
    ],
  },
];

export default result;
