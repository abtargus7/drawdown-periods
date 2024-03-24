import React from 'react'

function Table() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date Range</th>
                        <th>Max DD</th>
                        <th>Days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024-01-01 to 2024-01-31</td>
                        <td>10%</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>2024-02-01 to 2024-02-29</td>
                        <td>8%</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>2024-03-01 to 2024-03-31</td>
                        <td>5%</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>2024-04-01 to 2024-04-30</td>
                        <td>12%</td>
                        <td>35</td>
                    </tr>
                    <tr>
                        <td>2024-05-01 to 2024-05-31</td>
                        <td>15%</td>
                        <td>40</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
