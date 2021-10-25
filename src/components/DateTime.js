
export function timeOnly(dateISO){
    const time = new Date(dateISO).toLocaleTimeString('en',
    { timeStyle: 'short', hour12: false, timeZone: 'Asia/Jerusalem' });
    return time;
}

export function priceString(ratesArray){
    let pricesArray = ratesArray.map ( rate => {
        let price = rate.toString();
        let dot = price.indexOf('.');
        console.log("dot", dot, price);
        if (dot === -1 && price.length > 3){
            let substr = price.substring(price.length-3);
            price = price.replace(substr, ','+substr);
        }
        else if (dot > 0 && price.substring(0,dot).length > 3){
            let substr = price.substring(dot-3);
            price = price.replace(substr, ','+substr);
        }
        console.log("price", price);
        return price;
    });
    return pricesArray;
}

export function arrangeToTable(dataArray, coin) {
    let datesAndPricesArrays = {
        dates: [],
        times: [],
        prices: [],
    };

    datesAndPricesArrays.dates = dataArray.map( row => {
        let date = row.date;
        return (
            date.substring(0, 10)
        );
    });
    console.log("date arrange", datesAndPricesArrays);
    datesAndPricesArrays.times = dataArray.map( row => {
        let time = timeOnly(row.date);
        return time;
    });
    console.log("time arrange", datesAndPricesArrays);
    datesAndPricesArrays.prices = dataArray.map( row => {
        switch(coin){
            case 'eth':
                return row.ETH;
            case 'ltc':
                return row.LTC;
            default:
                return row.BTC;
        }
    });
    console.log("rates arrange", datesAndPricesArrays);

    datesAndPricesArrays.prices = priceString(datesAndPricesArrays.prices);
    console.log("price arrange", datesAndPricesArrays);

    return datesAndPricesArrays;
}