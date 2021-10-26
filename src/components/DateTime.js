
export function timeOnly(dateISO){
    const time = new Date(dateISO).toLocaleTimeString('en',
    { timeStyle: 'short', hour12: false, timeZone: 'Asia/Jerusalem' });
    return time;
}

export function priceArrayString(ratesArray){
    let pricesArray = ratesArray.map ( rate => {
        return priceString(rate);
    });
    return pricesArray;
}

export function priceString(rate){
    let price = String(rate);
    let dot = price.indexOf('.');
        if (dot === -1 && price.length > 3){
            let substr = price.substring(price.length-3);
            price = price.replace(substr, ','+substr);
        }
        else if (dot > 0 && price.substring(0,dot).length > 3){
            let substr = price.substring(dot-3);
            price = price.replace(substr, ','+substr);
        }
    return price;
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
            date
        );
    });
    datesAndPricesArrays.times = dataArray.map( row => {
        let time = timeOnly(row.date);
        return time;
    });
    datesAndPricesArrays.prices = dataArray.map( row => {
        switch(coin){
            case 'ETH':
                return row.ETH;
            case 'LTC':
                return row.LTC;
            default:
                return row.BTC;
        }
    });
    datesAndPricesArrays.prices = priceString(datesAndPricesArrays.prices);
    return datesAndPricesArrays;
}

export function dateParseForRouting(date){
    console.log("date to parse", date);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yy = String(date.getFullYear()).substring(2);
    let dateParse = dd + mm + yy;
    console.log("date after parse", dateParse);
    return dateParse;
}

export function parsedDateToInputFormat(ddmmyy){
    console.log("ddmmyy", ddmmyy);
    let date = "20" + String(ddmmyy.substring(4)) + "-" + ddmmyy.substring(2,4) + "-" + ddmmyy.substring(0,2);
    console.log("date to input", date);
    return date;
}