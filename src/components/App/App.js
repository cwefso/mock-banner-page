import Space from '../Space/Space'
import Egypt from '../Egypt/Egypt'
import DMNS from '../DMNS/DMNS'
import React from 'react'
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='https://wefso-mock-dmns-ad.netlify.app/'> 
        <DMNS />
        </a>
        <a href= 'https://wefso-mock-space-ad.netlify.app/'>
        <Space />
        </a>
        <a href= 'https://wefso-mock-egypt-ad.netlify.app/'>
        <Egypt />
        </a>
      </header>
    </div>
  );
}

export default App;
