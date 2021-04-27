import React from 'react';
import {useSelector} from 'react-redux'

export default function Help({closeDialog}) {
    const { settings } = useSelector(state => ({
        settings : state.settings,
    }));
    return(
        <div className='tools-panel' id='help'>
            <button className="panel-button" onClick={() => closeDialog()}>x</button>
            <h1>Panneau d'aide</h1>
            <hr></hr>
            <p>Pour ouvrir l'inventaire : touche <kbd>{settings.inventory.toUpperCase()}</kbd></p>
            <p>Pour couper ou remettre la musique : touche <kbd>{settings.music.toUpperCase()}</kbd></p>
            <p>Pour intéragir avec quelque chose : touche <kbd>{settings.interaction.toUpperCase()}</kbd></p>
        </div>
    );
}