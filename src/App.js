import React, { useState } from 'react';
import './App.css';
import Start from './components/start';
import Player from './components/player';
import Map from './components/map';
import Tools from './components/tools/';
import Introduction from './components/introduction';
import { useSelector } from 'react-redux';


export default function App() {
  const [gameStart, setGameStart] = useState({
    'start': true,
    'intro': false,
  });
  const { luminosity } = useSelector(state => ({
    luminosity: state.luminosity,
  }));
  var lum = "lum_" + luminosity;
  console.log(lum);

  if (gameStart.start) {
    return (
      <div className="game">
        <Start nextButton={setGameStart} />
      </div>
    );
  } else if (gameStart.intro) {
    return (
      <div className='game' >
        <Introduction><button onClick={() => setGameStart({
          'start': false,
          'intro': false,
        })}>Passer</button></Introduction>
      </div >
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
