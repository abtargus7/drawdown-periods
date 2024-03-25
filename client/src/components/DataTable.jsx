import React, { useEffect, useState } from 'react'
import './App.css'
import period from '../ddperiod';

function DataTable() {

    const [periods, setPeriods] = useState([]);

    useEffect(() => {
    
        const periodData = period.data;
        console.log(periodData);
        setPeriods(periodData);
    }, [])




    return (
        <div className='tdata rounded-3xl'>
            <table className='shadow-lg bg-white text-xs'>
                <thead>
                    <tr>
                        <th className='bg-blue-100 border text-left px-8 py-4'>Date Range</th>
                        <th className='bg-blue-100 border text-left px-8 py-4'>Max DD</th>
                        <th className='bg-blue-100 border text-left px-8 py-4'>Days</th>
                    </tr>
                </thead>
                <tbody>
                    {periods.map( (per) => {
                        return <tr>
                        <td className='border px-8 py-4'>{per.Start_Date} - {per.End_Date}</td>
                        <td className='border px-8 py-4 text-red-600'>{parseFloat(per.Max_Drawdown).toFixed(2)}</td>
                        <td className='border px-8 py-4'>{per.Drawdown_days}</td>
                        </tr>
                    })}
                    {/* <tr>
                       
                    </tr>
                    <tr>
                        <td className='border px-8 py-4'>2024-02-01 to 2024-02-29</td>
                        <td className='border px-8 py-4'>8%</td>
                        <td className='border px-8 py-4'>25</td>
                    </tr>
                    <tr>
                        <td className='border px-8 py-4'>2024-03-01 to 2024-03-31</td>
                        <td className='border px-8 py-4'>5%</td>
                        <td className='border px-8 py-4'>20</td>
                    </tr>
                    <tr>
                        <td className='border px-8 py-4'>2024-04-01 to 2024-04-30</td>
                        <td className='border px-8 py-4'>12%</td>
                        <td className='border px-8 py-4'>35</td>
                    </tr>
                    <tr>
                        <td className='border px-8 py-4'>2024-05-01 to 2024-05-31</td>
                        <td className='border px-8 py-4'>15%</td>
                        <td className='border px-8 py-4'>40</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
