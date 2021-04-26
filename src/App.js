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
var lum = "lum_"+luminosity;
console.log(lum);
  if (isIntro) {
    return (
      <div className='game' >
        <Introduction><button onClick={() => setIsIntro(false)}>Passer</button></Introduction>
      </div>
    );
  } else {
    return (
      <div className='game' id={lum}>
        <Map>
          <Player skin={1} />
        </Map>
        <Tools />
      </div>
    );
  }
}
