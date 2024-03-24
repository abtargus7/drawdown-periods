import React from 'react';
import Chart from './Chart';
import data from '../data';
import DataTable from './DataTable';

const App = () => {

  return (

    <div className='flex m-6 h-screen border-2 rounded-3xl p-10 bg-white' >
      <div className='first w-full bg-white'>
        <h1 className='text-2xl font-bold'>Drawdown Periods</h1>
        <Chart data={data} />
      </div>
      <div className='second w-2/3 bg-white'>
        <DataTable />
      </div>
    </div>

  );
};

export default App;
