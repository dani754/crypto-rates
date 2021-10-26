import React from 'react';
import {timeOnly, priceString} from './DateTime';

function arrangeToTable(data, coin){
    let table = data.map( row => {
        let dateStr = row.date.substring(0, 10);
        let timeStr = timeOnly(row.date);
        let priceStr = '';
        switch(coin){
            case 'ETH':
                priceStr = priceString(row.ETH);
                break;
            case 'LTC':
                priceStr = priceString(row.LTC);
                break;
            default:
                priceStr = priceString(row.BTC);
        }
        return (
            {
                date: dateStr,
                time: timeStr,
                price: priceStr,
            }
        );
    })
    return table;
}

export function sortByDate(data, coin){
    let table = arrangeToTable(data, coin);
    table.sort(function(a, b){return b.date.localeCompare(a.date) || b.time.localeCompare(a.time)});
    return table;
}

export function sortByAscDate(data, coin){
    let table = arrangeToTable(data, coin);
    table.sort(function(a, b){return a.date.localeCompare(b.date) || a.time.localeCompare(b.time)});
    return table;
}



export function sortByPrice(data, coin){
    let table = arrangeToTable(data, coin);
    table.sort(function(a, b){return a.price - b.price});
    return table;
}
