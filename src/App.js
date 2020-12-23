import React from 'react';
import './App.css';
import {PlayerStore} from './components/player';
import World from './components/map/world';
import Map from './components/map';
import Music from './components/music';
import { Tools } from './components/tools/'


export default function App() {

  return (
    <div className='game'>
      <Map>
        <World idWorld={1} />
        <PlayerStore skin={1} />
        <Music />
      </Map>
      <Tools />
    </div>
  );
}
