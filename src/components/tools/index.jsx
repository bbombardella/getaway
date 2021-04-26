import React, { useState } from 'react';
import './Tools.css';
import { useSelector } from 'react-redux';
import Inventory from '../inventory/';
import Help from '../help/';
import useKeyPress from '../../hooks/use-key-pressed/';
import PopUpInteraction from '../interaction/';
import Music from '../music';
import Settings from '../settings/index.jsx'

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
  const [settingsNeeded, setSettingsNeeded] = useState(false);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState("0.5");

  const { interaction, miroirs, settings } = useSelector(state => ({
    interaction: state.interaction,
    miroirs: state.miroirs,
    settings : state.settings
  }));

  const resetBoolean = () => {
    setHelpNeeded(false);
    setInventoryNeeded(false);
    setInteractNeeded(false);
    setSettingsNeeded(false);
  };
  
  useKeyPress((e) => {
    if (e.key === settings.help) {
      resetBoolean();
      setHelpNeeded(!helpNeeded)
    }
    if (e.key === settings.inventory) {
      resetBoolean();
      setInventoryNeeded(!inventoryNeeded)
    }
    if (e.key === settings.interaction) {
      resetBoolean();
      setInteractNeeded(!interactNeeded)
    }
    if (e.key === settings.music) {
      setMute(!mute);
    }
    e.preventDefault();
  });

  return (
    <div className='tools'>
      {helpNeeded && <Help closeDialog={() => setHelpNeeded(false)} />}
      {inventoryNeeded && <Inventory closeDialog={() => setInventoryNeeded(false)} />}
      {(interactNeeded && interaction.interact) && <PopUpInteraction closeDialog={() => setInteractNeeded(false)} objectdata={interaction} miroirs={miroirs} />}
      {settingsNeeded && <Settings closeDialog={() => setSettingsNeeded(false)} />}
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
      <button className="tools-button" onClick={() => setMute(!mute)}>Musique [{settings.music.toUpperCase()}]</button>
      <button className="tools-button" onClick={() => setInteractNeeded(!interactNeeded)}>Interagir [{settings.interaction.toUpperCase()}]</button>
      <button className="tools-button" onClick={() => setHelpNeeded(true)}>Aide [{settings.help.toUpperCase()}]</button>
      <button className="tools-button" onClick={() => setInventoryNeeded(true)}>Inventaire [{settings.inventory.toUpperCase()}]</button>
      <button className="tools-button" onClick={() => setSettingsNeeded(true)}>Règlages</button>
      {(settingsNeeded || helpNeeded || inventoryNeeded) && <Overlay />}
    </div>
  )
}