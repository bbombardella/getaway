import React, { useState } from 'react';
import './Tools.css';
import { useSelector } from 'react-redux';
import Inventory from '../inventory/';
import Help from '../help/';
import useKeyPress from '../../hooks/use-key-pressed/';
import PopUpInteraction from '../interaction/';
import Music from '../music';

function Overlay(props) {
  return (
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

export default function Tools(props) {

  const [helpNeeded, setHelpNeeded] = useState(false);
  const [inventoryNeeded, setInventoryNeeded] = useState(false);
  const [interactNeeded, setInteractNeeded] = useState(false);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState("0.5");

  const interaction = useSelector(state => state.interaction)

  const resetBoolean = () => {
    setHelpNeeded(false);
    setInventoryNeeded(false);
    setInteractNeeded(false);
  };

  useKeyPress((e) => {
    if (e.key === 'h') {
      resetBoolean();
      setHelpNeeded(!helpNeeded)
    }
    if (e.key === 'i') {
      resetBoolean();
      setInventoryNeeded(!inventoryNeeded)
    }
    if (e.key === 'a') {
      resetBoolean();
      setInteractNeeded(!interactNeeded)
    }
    if (e.key === 'm') {
      setMute(!mute);
    }
    e.preventDefault();
  });

  return (
    <div className='tools'>
      {helpNeeded && <Help closeDialog={() => setHelpNeeded(false)} />}
      {inventoryNeeded && <Inventory closeDialog={() => setInventoryNeeded(false)} />}
      {(interactNeeded && interaction.interact) && <PopUpInteraction closeDialog={() => setInteractNeeded(false)} objectdata={interaction} />}
      <Music mute={mute} volume={volume} />
      {!mute &&
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <input type="range" id="volume" name="volume" min="0" max="1" step="0.05" value={volume} onChange={(e) => setVolume(e.target.value)} />
          <label for="volume">Volume</label>
        </div>
      }
      <button className="tools-button" onClick={() => setMute(!mute)}>Musique [M]</button>
      <button className="tools-button" onClick={() => setInteractNeeded(!interactNeeded)}>Interagir [A]</button>
      <button className="tools-button" onClick={() => setHelpNeeded(true)}>Aide [H]</button>
      <button className="tools-button" onClick={() => setInventoryNeeded(true)}>Inventaire [I]</button>
      {(helpNeeded || inventoryNeeded) && <Overlay />}
    </div>
  )
}