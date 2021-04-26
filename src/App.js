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
var lum = luminosity.luminosity;
console.log(lum);
  if (isIntro) {
    return (
      <div className='game' >
        <Introduction><button onClick={() => setIsIntro(false)}>Passer</button></Introduction>
      </div>
    );
  } else {
    switch(lum){
      case("0.5"):
        return (
          <div className='game' id="lum_1">
            <Map>
              <Player skin={1} />
            </Map>
            <Tools />
          </div>
        );
      case("0.4"):
        return (
          <div className='game' id="lum_09">
            <Map>
              <Player skin={1} />
            </Map>
            <Tools />
          </div>
        );
      case("0.3"):
        return (
          <div className='game' id="lum_08">
            <Map>
              <Player skin={1} />
            </Map>
            <Tools />
          </div>
        );
      case("0.2"):
        return (
          <div className='game' id="lum_07">
            <Map>
              <Player skin={1} />
            </Map>
            <Tools />
          </div>
        );
      case("0.1"):
        return (
          <div className='game' id="lum_06">
            <Map>
              <Player skin={1} />
            </Map>
            <Tools />
          </div>
        );
        case("0"):
      return (
          <div className='game' id="lum_05">
            <Map>
              <Player skin={1} />
            </Map>
            <Tools />
          </div>
        );
      default:
        return (
          <div className='game'  id="lum_1">
            <Map>
              <Player skin={1} />
            </Map>
            <Tools />
          </div>
        );
    }
  }
}
