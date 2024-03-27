import React from 'react';
import {Chart} from './Chart';
import {cdata} from '../returns';
import {DataTable} from './DataTable';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { periodData } from '../periods';

export const App = () => {

  return (
    <>
      <div className='first w-40 bg-white'>
        <h1 className='text-2xl font-bold mb-8'>Drawdown Periods <ErrorOutlineIcon /></h1>
        <Chart data={cdata.data.combined} periodData = {periodData.data}/>
      </div>
      <div className='second bg-white h-2/3 max-w-12'>
        <DataTable />
      </div>
    </>
  );
};


