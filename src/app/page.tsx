import React from 'react';
import './App.css';
import Banner from '../components/Banner';
import DashButton from '../components/DashButton';
import BeyondButton from '../components/BeyondButton';
import RunChecksButton from '../components/RunChecksButton';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Banner />
        <div className="buttons-container">
          <DashButton />
          <BeyondButton />
        </div>
        <div className='run-checks-container'>
          <RunChecksButton />
        </div>
      </div>
    </div>
  );
}
 
export default App;