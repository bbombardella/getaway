import './App.css';
import React, { useState } from 'react'
import {PlayerStore} from './components/player';
import World from './components/map/world';
import Map from './components/map';
import {InventoryStore} from './components/inventory';
import Help from './components/help';
import useKeyPress from './hooks/use-key-pressed';
import PopUpInteraction from './components/interaction'



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
  const [Interact, setInteractOn] = useState(false);

  useKeyPress((e) => {
      if(e.key === 'h') {
          setHelpNeeded(!helpNeeded)
      }
      if(e.key === 'i') {
        setInventoryNeeded(!inventoryNeeded)
      }
      if(e.key === 'm') {
        setInteractOn(!Interact)
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
      {Interact && <PopUpInteraction><button onClick={() => setInteractOn(false)}>&times;</button></PopUpInteraction>}
        {helpNeeded && <Help><button onClick={() => setHelpNeeded(false)}>&times;</button></Help>}
        {inventoryNeeded && <InventoryStore><button onClick={() => setInventoryNeeded(false)}>&times;</button></InventoryStore>}

        <button onClick={()=>setInteractOn(true)}>Interagir : m</button>
        <button onClick={()=>setHelpNeeded(true)}>Help : h</button>
        <button onClick={()=>setInventoryNeeded(true)}>Inventaire : i</button>
      </div>
        {(helpNeeded || inventoryNeeded) && <Overlay/>}
    </div>
  );
}
