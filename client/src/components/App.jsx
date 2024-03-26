import React from 'react';
import {Chart} from './Chart';
import {cdata} from '../returns';
import {DataTable} from './DataTable';
// import { periodData } from '../periods';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { periodData } from '../periods';

export const App = () => {

  return (
    <div className='flex m-6 h-screen border-2 rounded-3xl p-10 bg-white' >
      <div className='first w-full bg-white'>
        <h1 className='text-2xl font-bold mb-8'>Drawdown Periods <ErrorOutlineIcon /></h1>
        <Chart data={cdata.data.combined} periodData = {periodData.data}/>
      </div>
      <div className='second w-2/3 bg-white'>
        <DataTable />
      </div>
    </div>
  );
};


