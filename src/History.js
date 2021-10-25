import React from 'react';
import './App.css';
import Table from './Table';

function History(props) {
    return (
        <div>
            <h1>{props.coin}</h1>

            <Table />
        </div>
    );
}

export default History;