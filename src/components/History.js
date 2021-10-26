import React from 'react';
import HistoryTable from './HistoryTable';
import AdjustTable from './AdjustTable';
import url from './server';
import {dateParseForRouting} from './DateTime';
import './Page.css';

export default class History extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            coin: 'BTC',
            start: '',
            end: '',
            rates: [],
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
            this.setState({
                rates: data,
            })
        }).catch( err => console.log(err));        
    }

    handleChange = (coinNew,startNew,endNew) => {
        this.setState({
            coin: coinNew,
            start: startNew,
            end: endNew,
            rates: [],
        })
    }
    
    render() {
        if ( Array.isArray(this.state.rates) && this.state.rates.length === 0 && this.state.start <= dateParseForRouting(new Date()))
            this.getHistoricRates();

        if ( this.state.start === ''){
            let today = dateParseForRouting(new Date());
            this.setState({
                start: today,
                end: today,
            })
        }
            
        return (
            <div className="Body" >
                <button className="BigButton" onClick={()=>this.props.switch('current')} >Back To Live Rates</button>
                <AdjustTable coin={this.state.coin} start={this.state.start} end={this.state.end} onUpdate={(coin,start,end)=>this.handleChange(coin,start,end)} />
                <HistoryTable data={this.state.rates} coin={this.state.coin} />
            </div>
        );
    }

}