import React, {useState} from 'react';
import './App.css';
import Current from './components/Current';
import History from './components/History';

function App() {

  const [page, togglePage] = useState('current');// default homepage - current rates

  let content = <Current switch={(coin)=>togglePage(coin)} />;
  if (page !== 'current'){
    content = <History switch={(coin)=>{togglePage(coin)}} coin={page} />;
  }

  return (
    <div className="App">
      <h1>Crypto Rates in USD $</h1>
      {content}
    </div>
  );

}

export default App;
