import React, {useEffect} from 'react'
import './App.css'

function DataTable() {


    return (
        <div className='tdata rounded-3xl'>
            <table className='shadow-lg bg-white'>
                <thead>
                    <tr>
                        <th className='bg-blue-100 border text-left px-8 py-4'>Date Range</th>
                        <th className='bg-blue-100 border text-left px-8 py-4'>Max DD</th>
                        <th className='bg-blue-100 border text-left px-8 py-4'>Days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border px-8 py-4'>2024-01-01 to 2024-01-31</td>
                        <td className='border px-8 py-4'>10%</td>
                        <td className='border px-8 py-4'>30</td>
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
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
