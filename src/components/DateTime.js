
//parse time from date
export function timeOnly(dateISO){
    const time = new Date(dateISO).toLocaleTimeString('en',
    { timeStyle: 'short', hour12: false, timeZone: 'Asia/Jerusalem' });
    return time;
}

//string price array with commas
export function priceArrayString(ratesArray){
    let pricesArray = ratesArray.map ( rate => {
        return priceString(rate);
    });
    return pricesArray;
}

//string a single rate with commas given decimal point
export function priceString(rate){
    let price = String(rate);
    let dot = price.indexOf('.');
    //if not decimal point and number is bigger than 999
    if (dot === -1 && price.length > 3){
        let substr = price.substring(price.length-3);
        price = price.replace(substr, ','+substr);
    }
    //with decimal point and number bigger than 999
    else if (dot > 0 && price.substring(0,dot).length > 3){
        let substr = price.substring(dot-3); //use all digits before comma - avoiding equal digits for replace
        price = price.replace(substr, ','+substr);
    }
    return price;
}

//change yyy-mm-dd to ddmmyy format for backend request
export function dateParseForRouting(date){
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yy = String(date.getFullYear()).substring(2);
    let dateParse = dd + mm + yy;
    return dateParse;
}

//change backend ddmmyy format to yyy-mm-dd input date format
export function parsedDateToInputFormat(ddmmyy){
    console.log("ddmmyy", ddmmyy);
    let date = "20" + String(ddmmyy.substring(4)) + "-" + ddmmyy.substring(2,4) + "-" + ddmmyy.substring(0,2);
    console.log("date to input", date);
    return date;
}