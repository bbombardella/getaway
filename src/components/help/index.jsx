import React from 'react';
import {useSelector} from 'react-redux'

export default function Help({closeDialog}) {
    const { settings } = useSelector(state => ({
        settings : state.settings,
    }));
    return(
        <div className='tools-panel' id='help'>
            <button className="panel-button" onClick={() => closeDialog()}>x</button>
            <h1>Panneau Help</h1>
            <hr></hr>
            <p>Ajouter un objet à l'inventaire : touche <kbd>{settings.inventory}</kbd></p>
            <p>Pour couper ou remettre la musique : touche <kbd>{settings.music}</kbd></p>
        </div>
    );
}