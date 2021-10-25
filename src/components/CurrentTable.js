import React from 'react';
import './Table.css';

function CurrentTable(props) {

    return (
        <table>
            <thead>
                <tr>
                    <th><button >BTC</button></th>
                    <th><button >ETH</button></th>
                    <th><button >LTC</button></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        props.rates.map( (rate, i) => {
                            return (
                                <td key={i} >{rate}</td>
                            );
                        })
                    }
                </tr>
            </tbody>
        </table>
    );
}

export default CurrentTable;