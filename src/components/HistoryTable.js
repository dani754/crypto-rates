import React from 'react';
import './Table.css';

function HistoryTable(props) {

    return (
        <table className="longTable" >
            <thead>
                <tr>
                    <th><button >Date</button></th>
                    <th><button >Time</button></th>
                    <th><button >Price</button></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.dates.map( (date,i) => {
                        return (
                            <tr key={i} >
                                <td key={date}>{date}</td>
                                <td key={date + props.times[i]}>{props.times[i]}</td>
                                <td key={props.prices[i]} >{props.prices[i]}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default HistoryTable;