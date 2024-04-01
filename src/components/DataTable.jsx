// import React, { useEffect, useState } from 'react'
// import { period } from '../ddperiod';

// export const DataTable = () => {

//     const [periods, setPeriods] = useState([]);

//     // const fetchData = async() => {
//     //     const res = await fetch('/api');
//     //     const data = res.json();
//     //     console.log(data);
//     //     setPeriods(data);
//     // }

//     useEffect(() => {
//         const periodData = period.data;
//         setPeriods(periodData);
//     }, [])

//     return (                    
//             <table className='shadow-lg bg-white' >
//                 <thead>
//                     <tr>
//                         <th className='bg-gray-100 border text-left px-8 py-4'>Period</th>
//                         <th className='bg-gray-100 border text-left px-8 py-4'>Max DD</th>
//                         <th className='bg-gray-100 border text-left px-8 py-4'>Days</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {periods.map((per, index) => {
//                         return <tr key={index}>
//                             <td className='border px-8 py-4'>{per.Start_Date} - {per.End_Date}</td>
//                             <td className='border px-8 py-4 text-red-600'>{parseFloat(per.Max_Drawdown).toFixed(2)}</td>
//                             <td className='border px-8 py-4'>{per.Drawdown_days}</td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>

//     )
// }

import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { period } from "../ddperiod";

export const DataTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead style={{ backgroundColor: "lightgrey" }}>
                    <TableRow>
                        <TableCell className='bg-gray-100 border text-left px-8 py-4' style={{ borderRight: "1px solid #ddd" }}>
                            Period
                        </TableCell>
                        <TableCell className='bg-gray-100 border text-left px-8 py-4' align="right" style={{ borderRight: "1px solid #ddd" }}>
                            MaxDD
                        </TableCell>
                        <TableCell className='bg-gray-100 border text-left px-8 py-4' align="right">Days</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {period.data.map((period, index) => (
                        <TableRow key={index}>
                            <TableCell
                                className='border px-8 py-4'
                                component="th"
                                scope="row"
                                style={{ borderRight: "1px solid #ddd" }}
                            >
                                {`${period.Start_Date} - ${period.End_Date}`}
                            </TableCell>
                            <TableCell
                                className='border px-8 py-4'
                                align="right"
                                sx={{ borderRight: "1px solid #ddd", color: "#f36361" }}
                            >
                                {(Math.round(period.Max_Drawdown * 100) / 100).toFixed(2)}
                            </TableCell>
                            <TableCell
                                className='border px-8 py-4'
                                align="right">{period.Drawdown_days}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

// export default DataTable;
