import React from 'react';
import './App.css';
import {PlayerStore} from './components/player';
import {WorldStore} from './components/map/world';
import Map from './components/map';
import { Tools } from './components/tools/'


export default function App() {

  return (
    <div className='game'>
      <Map>
        <WorldStore />
        <PlayerStore skin={1} />
      </Map>
      <Tools />
    </div>
  );
}
