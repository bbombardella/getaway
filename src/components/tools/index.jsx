import React, { useState } from 'react';
import { connect } from 'react-redux';
import {InventoryStore} from '../inventory/';
import Help from '../help/';
import useKeyPress from '../../hooks/use-key-pressed/';
import PopUpInteraction from '../interaction/';

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

export default function ToolsPanel({dispatch,interaction}) {

    const [helpNeeded, setHelpNeeded] = useState(false);
    const [inventoryNeeded, setInventoryNeeded] = useState(false);
    const [interactNeeded, setInteractNeeded] = useState(false);

    useKeyPress((e) => {
        if(e.key === 'h') {
          setHelpNeeded(!helpNeeded)
        }
        if(e.key === 'i') {
          setInventoryNeeded(!inventoryNeeded)
        }
        if(e.key === 'm') {
          setInteractNeeded(!interactNeeded)
        }
        e.preventDefault();
      });

    return(
        <div className='tools'>
          {helpNeeded && <Help><button onClick={() => setHelpNeeded(false)}>&times;</button></Help>}
          {inventoryNeeded && <InventoryStore><button onClick={() => setInventoryNeeded(false)}>&times;</button></InventoryStore>}
          {(interactNeeded && interaction.interact) && <PopUpInteraction />}
          <button onClick={()=>setInteractNeeded(!interactNeeded)}>Interagir : m</button>
          <button onClick={()=>setHelpNeeded(true)}>Help : h</button>
          <button onClick={()=>setInventoryNeeded(true)}>Inventaire : i</button>
          {(helpNeeded || inventoryNeeded) && <Overlay/>}
        </div>
    )
}

function mapStateToProps(state) {
    return {interaction: state.interaction}
}

export const Tools = connect(mapStateToProps)(ToolsPanel)