import React from 'react';
import CurrentTable from './CurrentTable';

function History(props) {
    return (
        <div>
            <h1>{props.coin}</h1>

            <CurrentTable />
        </div>
    );
}

export default History;