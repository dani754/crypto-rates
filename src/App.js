import React, {useState} from 'react';
import './App.css';
import Current from './Current';
import History from './History';

function App() {

  const [page, togglePage] = useState('current');

  let table = <Current />;
  if (page !== 'current'){
    table = <History coin={page} />;
  }

  return (
    <div className="App">
      <h1>my app</h1>
      <h2>{page}</h2>
      <button onClick={()=> togglePage('current')}>Real time rates</button>
      <button onClick={()=> togglePage('BTC')}>BTC history</button>
      <button onClick={()=> togglePage('ETH')}>ETH history</button>
      <button onClick={()=> togglePage('LTC')}>LTC history</button>
      {table}
    </div>
  );
}

export default App;
