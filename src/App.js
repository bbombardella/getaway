import React, { useState } from 'react';
import './App.css';
import {PlayerStore} from './components/player';
import {WorldStore} from './components/map/world';
import Map from './components/map';
import Music from './components/music';
import { Tools } from './components/tools/';
import Introduction from './components/introduction';


export default function App() {
  const [ isIntro, setIsIntro ] = useState(true);
    if (isIntro){
      return (
      <div className='game'>
      <Introduction><button onClick={()=>setIsIntro(false)}>Passer</button></Introduction>
      </div>
      );
    } else {
      return (
      <div className='game'>
        <Map>
          <WorldStore />
          <PlayerStore skin={1} /> 
          <Music />
        </Map>
        <Tools />
      </div>
      );
      }
}
