import React from 'react';
import HistoryTable from './HistoryTable';
import AdjustTable from './AdjustTable';
import url from './server';
import {arrangeToTable} from './DateTime';
import './Page.css';

export default class History extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            coin: 'BTC',
            start: '141021',
            end: '261021',
            interavl: 'all',
            dates: [],
            times: [],
            prices: [],
        }
    }

    getHistoricRates = () => {
        let routeURL = url +this.state.coin + '/' + this.state.start + '/' + this.state.end;
        fetch(routeURL, {
            method: "get",
            dataType: "json",
            headers: {'Content-Type': 'application/json'},
        }).then( res => res.json() )
        .then( data => {
            console.log("data", data);
            let dataArray = arrangeToTable(data, this.state.coin);
            this.setState({
                dates: dataArray.dates,
                times: dataArray.times,
                prices: dataArray.prices,
            })
            console.log("rates", this.state.rates);
        }).catch( err => console.log(err));        
    }
    
    render() {
        if ( Array.isArray(this.state.dates) && this.state.dates.length === 0 )
            this.getHistoricRates();
            
        return (
            <div className="Body" >
                <button className="BigButton" onClick={()=>this.props.switch('current')} >Back To Live Rates</button>
            <AdjustTable />
                <HistoryTable prices ={this.state.prices} dates={this.state.dates} times={this.state.times} />
            </div>
        );
    }

}