import React from 'react';
import './Table.css';
import {dateParseForRouting, parsedDateToInputFormat} from './DateTime';

export default class  AdjustTable extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            coin: 'BTC',
            start: '',
            end: '',
            dates: [],
            times: [],
            prices: [],
        }
    }

    handleDateToParent = (date) => {
        let ddmmyy = dateParseForRouting(new Date(date));
        return ddmmyy;
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        let parsedStart = this.handleDateToParent(this.state.start);
        let parsedEnd = this.handleDateToParent(this.state.end);
        this.props.onUpdate(this.state.coin, parsedStart, parsedEnd);
        event.preventDefault();
    }

    render(){

        if (this.state.start ===  ''){
            let defaultStart = parsedDateToInputFormat(this.props.start);
            let defaultEnd = parsedDateToInputFormat(this.props.end);
            this.setState({
                start: defaultStart,
                end: defaultEnd,
            });
        }
        console.log(this.state, this.props);

        return (
            <form onSubmit={this.handleSubmit} >
                <label for="coin" >Coin:</label>
                <select name="coin" value={this.state.coin} onChange={this.handleChange}>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Ethereum</option>
                    <option value="LTC">Litecoin</option>
                </select>
                <label for="start" >From:</label>
                    <input name="start" type="date" value={this.state.start} onChange={this.handleChange} />
                <label for="end" >Until:</label>
                    <input name="end" type="date"  value={this.state.end} onChange={this.handleChange}  />
                <button >OK</button>
            </form>
        );
    }
}

