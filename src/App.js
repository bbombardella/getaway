import React, { useState } from 'react';
import './App.css';
import Player from './components/player';
import Map from './components/map';
import Tools from './components/tools/';
import Introduction from './components/introduction';


export default function App() {
  const [isIntro, setIsIntro] = useState(true);
  if (isIntro) {
    return (
      <div className='game'>
        <Introduction><button onClick={() => setIsIntro(false)}>Passer</button></Introduction>
      </div>
    );
  } else {
    return (
      <div className='game'>
        <Map>
          <Player skin={1} />
        </Map>
        <Tools />
      </div>
    );
  }
}
