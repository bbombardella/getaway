import './App.css';
import React, { useState } from 'react'
import {PlayerStore} from './components/player';
import World from './components/map/world';
import Map from './components/map';
import {InventoryStore} from './components/inventory';
import Help from './components/help';
import useKeyPress from './hooks/use-key-pressed';



function Overlay(props) {
  return(
    <div id='overlay'
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, .5)'
      }}
    ></div>
  )
}

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
    <div className='game'>
      <Map>
        <World idWorld={1} />
        <PlayerStore skin={1} />
      </Map>
      <div className='tools'>
        {helpNeeded && <Help><button onClick={() => setHelpNeeded(false)}>&times;</button></Help>}
        {inventoryNeeded && <InventoryStore><button onClick={() => setInventoryNeeded(false)}>&times;</button></InventoryStore>}

        <button onClick={()=>setHelpNeeded(true)}>Help</button>
        <button onClick={()=>setInventoryNeeded(true)}>Inventaire</button>
      </div>
        {(helpNeeded || inventoryNeeded) && <Overlay/>}
    </div>
  );
}
