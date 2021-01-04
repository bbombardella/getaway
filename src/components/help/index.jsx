import React from 'react';

export default function Help({closeDialog}) {
    return(
        <div className='tools-panel' id='help'>
            <button className="panel-button" onClick={() => closeDialog()}>x</button>
            <h1>Panneau Help</h1>
            <hr></hr>
            <p>Ajouter un objet à l'inventaire : touche A</p>
        </div>
    );
}