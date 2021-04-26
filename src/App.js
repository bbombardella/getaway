import React, { useState } from 'react';
import './App.css';
import Player from './components/player';
import Map from './components/map';
import Tools from './components/tools/';
import Introduction from './components/introduction';
import { useSelector } from'react-redux';


export default function App() {
  const [isIntro, setIsIntro] = useState(true);
  const { luminosity } = useSelector(state => ({
    luminosity : state.luminosity,
}));
  if (isIntro) {
    return (
      <div className='game' >
        <Introduction><button onClick={() => setIsIntro(false)}>Passer</button></Introduction>
      </div>
    );
  } else {
    return (
      <div className='game' style = {{opacity: {luminosity}}}>
        <Map>
          <Player skin={1} />
        </Map>
        <Tools />
      </div>
    );
  }
}
