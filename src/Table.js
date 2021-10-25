import React from 'react';
import './App.css';

function Table() {
    return (
        <table>
            <tr>
                <th>Last Update</th>
                <th>BTC</th>
                <th>ETH</th>
                <th>LTC</th>
            </tr>
            <tr>
                <td>14:45 Today</td>
                <td>111.11</td>
                <td>222.22</td>
                <td>333.33</td>
            </tr>
        </table>
    );
}

export default Table;