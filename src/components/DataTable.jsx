import React, { useEffect, useState } from 'react'
import { period } from '../ddperiod';

export const DataTable = () => {

    const [periods, setPeriods] = useState([]);

    useEffect(() => {
        const periodData = period.data;
        setPeriods(periodData);
    }, [])

    return (                    
            <table className='shadow-lg bg-white max-h-96' >
                <thead>
                    <tr>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Period</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Max DD</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Days</th>
                    </tr>
                </thead>
                <tbody>
                    {periods.map((per, index) => {
                        return <tr key={index}>
                            <td className='border px-8 py-4'>{per.Start_Date} - {per.End_Date}</td>
                            <td className='border px-8 py-4 text-red-600'>{parseFloat(per.Max_Drawdown).toFixed(2)}</td>
                            <td className='border px-8 py-4'>{per.Drawdown_days}</td>
                        </tr>
                    })}
                </tbody>
            </table>

    )
}
