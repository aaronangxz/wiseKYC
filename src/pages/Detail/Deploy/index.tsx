import React, { memo } from 'react';
import TopChart from './components/TopChart';
import BottomTable from './components/BottomTable';
import BottomTable1 from './components/BottomTable1';
import P99Chart from 'pages/Dashboard/Base/components/P99Chart';

const Deploy = () => (
  <div>
    <P99Chart />
    <p></p>
    <TopChart />
    <BottomTable />
    <p></p>
    <BottomTable1 />
  </div>
);

export default memo(Deploy);
