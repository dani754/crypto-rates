import React from 'react';
import './Table.css';

function CurrentTable(props) {

    let prices = props.rates.map( rate => {
        let price = rate.toString();
        let dot = price.indexOf('.');
        console.log("dot", dot, price);
        if (dot === -1 && price.length > 3){
            price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (dot > 3){
            let substr = price.substring(dot-3,dot-2);
            price = price.replace(substr, ','+substr);
        }
        console.log("price", price);
        return price;
    });

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
                        prices.map( (rate, i) => {
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