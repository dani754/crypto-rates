import React from 'react';
import CurrentTable from './CurrentTable';
import url from './server';
import {timeOnly, priceArrayString} from './DateTime';
import './Page.css';

export default class Current extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rates: [],
            time: "",
        }
    }

    getCurrentRates = () => {
        fetch(url, {
            method: "get",
            dataType: "json",
            headers: {'Content-Type': 'application/json'},
        }).then( res => res.json() )
        .then( data => {
            console.log("data", data);
            let timePart = timeOnly(data.date);
            let prices = priceArrayString([data.BTC, data.ETH, data.LTC]);
            this.setState({
                rates: prices,
                time: timePart,
            })
            console.log("rates", this.state.rates);
        }).catch( err => console.log(err));        
    }
    
    render() {
        if ( Array.isArray(this.state.rates) && this.state.rates.length === 0 )
            this.getCurrentRates();
            
        return (
            <div className="Body" >
                <h2>Last Update on {this.state.time}</h2>
                <CurrentTable rates ={this.state.rates} onClick={(coin)=>this.props.switch(coin)} />
                <button className="BigButton" onClick={()=>this.props.switch('BTC')} >Get Rates History</button>
            </div>
        );
    }

}