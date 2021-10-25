import React from 'react';
import './Table.css';

function AdjustTable(props) {

    let dates = <p></p>;
    let intervals = <p></p>;

    return (
        <form >
            <label for="coin" >Coin:</label>
            <select name="coin">
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
                <option value="LTC">Litecoin</option>
            </select>
            <label for="start" >Period:</label>
            <select name="start">
                <option value="today">Today</option>
                <option value="week">A week</option>
                <option value="month">A Month</option>
                <option value="3months">3 Months</option>
                <option value="year">A Year</option>
                <option value="all">Costum dates</option>
            </select>
            {dates}
            {intervals}
        </form>
    );
}

export default AdjustTable;