import React from 'react';
import {Chart} from './Chart';
import {cdata} from '../returns';
import {DataTable} from './DataTable';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { periodData } from '../periods';
import {Box} from '@mui/material';
import {Card} from '@mui/material';
import {CardContent} from '@mui/material';

export const App = () => {

  return (
      <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        backgroundColor: "#EEEEEE",
        padding: 2,
      }}
    >
      <Card variant="outlined">
        <CardContent>
        <h1 className='text-2xl font-bold'>Drawdown Periods <ErrorOutlineIcon /></h1>
        </CardContent>
        <CardContent>
          <Chart data={cdata.data.combined} periodData={periodData.data} />
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, flex: 1 }} variant="outlined">
        <CardContent>
          <DataTable />
        </CardContent>
      </Card>
    </Box>
  );
};


