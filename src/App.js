import './App.css';
import React, { useState } from 'react'
import Player from './components/player';
import World from './components/map/world';
import Map from './components/map'
import useKeyPress from './hooks/use-key-pressed';

export default function App() {

  const [helpNeeded, setHelpNeeded] = useState(false);
  const [inventoryNeeded, setInventoryNeeded] = useState(false);

  useKeyPress((e) => {
      if(e.key === 'h') {
          setHelpNeeded(!helpNeeded)
      }
      if(e.key === 'i') {
        setInventoryNeeded(!inventoryNeeded)
      }
      e.preventDefault();
    });

  return (
    <div>
      <Map>
        <World idWorld={1} />
        <Player skin={1} />
      </Map>
      {
        helpNeeded ? <div>Menu Help : oui oui</div> : <div>Menu Help : non non</div>
      }
      {
        inventoryNeeded ? <div>Inventaire : oui oui</div> : <div>Inventaire : non non</div>
      }
      <button onClick={()=>setHelpNeeded(true)}>Help</button>
      <button onClick={()=>setHelpNeeded(false)}>Quitter Help</button>
      <button onClick={()=>setInventoryNeeded(true)}>Inventaire</button>
      <button onClick={()=>setInventoryNeeded(false)}>Quitter Inventaire</button>
    </div>
  );
}
