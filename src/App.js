import './App.css';
import React, { useState } from 'react'
import Player from './components/player';
import World from './components/map/world';
import Map from './components/map'
import useKeyPress from './hooks/use-key-pressed';

export default function App() {

  const [helpKeyPressed, setHelpKeyPressed] = useState(false);
  const [inventoryKeyPressed, setInventoryKeyPressed] = useState(false);

  useKeyPress((e) => {
      if(e.key === 'h') {
          setHelpKeyPressed(!helpKeyPressed)
      }
      if(e.key === 'i') {
        setInventoryKeyPressed(!inventoryKeyPressed)
      }
      e.preventDefault();
    });

  return (
    <div>
      {
        helpKeyPressed ? <div>Menu Help : oui oui</div> : <div>Menu Help : non non</div>
      }
      {
        inventoryKeyPressed ? <div>Inventaire : oui oui</div> : <div>Inventaire : non non</div>
      }
      <Map>
        <World idWorld={1} />
        <Player skin={1} />
      </Map>
    </div>
  );
}
