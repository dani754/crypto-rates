import React from 'react';
import './Table.css';
import {sortByDate, sortByAscDate, sortByPrice} from './SortTable';

function HistoryTable(props) {

    let tableArray = sortByDate(props.data, props.coin);

    return (
        <table className="longTable" >
            <thead>
                <tr>
                    <th><button onClick={()=>{tableArray = sortByDate(props.data, props.coin)}} >Date</button></th>
                    <th><button onClick={()=>{tableArray = sortByAscDate(props.data, props.coin)}}  >Time</button></th>
                    <th><button onClick={()=>{tableArray = sortByPrice(props.data, props.coin)}}  >Price</button></th>
                </tr>
            </thead>
            <tbody>
                {
                    tableArray.map( (rate,i) => {
                        return (
                            <tr key={i} >
                                <td key={rate.date + i}>{rate.date}</td>
                                <td key={rate.time + i}>{rate.time}</td>
                                <td key={rate.price + i} >{rate.price}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default HistoryTable;