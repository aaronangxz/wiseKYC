import React, { memo } from 'react';
import TopChart from './components/TopChart';
import BottomTable from './components/BottomTable';
import BottomTable1 from './components/BottomTable1';

const Deploy = () => (
  <div>
    <TopChart />
    <BottomTable />
    <p></p>
    <BottomTable1 />
  </div>
);

export default memo(Deploy);
