export function timeOnly(dateISO){
    const time = new Date(dateISO).toLocaleTimeString('en',
    { timeStyle: 'short', hour12: false, timeZone: 'Asia/Jerusalem' });
    return time;
}