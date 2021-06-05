import React, { useState } from 'react';
import './App.css';
import Player from './components/player';
import Map from './components/map';
import Tools from './components/tools/';
import Introduction from './components/introduction';
import { useDispatch, useSelector } from'react-redux';
import { INGAME } from './config/const/settings';


export default function App() {
  const dispatch = useDispatch();
  const [isIntro, setIsIntro] = useState(true);
  const { luminosity, ingame } = useSelector(state => ({
    luminosity : state.luminosity,
    ingame: state.ingame,

}));
var lum = "lum_"+luminosity;
console.log(ingame);
  if (isIntro) {
    return (
      <div className='game' >
        <Introduction><button onClick={() => dispatch({
          type: INGAME,
          payload:{
            ingame: true,
          }
        })
        &&
        setIsIntro(false)
        }>Passer</button></Introduction>
      </div>
    );
  } else {
    if(ingame){
      return (
        <div className='game' id={lum}>
          <Map>
            <Player skin={1} />
          </Map>
          <Tools />
        </div>
      );
    } else {
      if(!ingame){
        return;
      }
    }
  }
}
