import React from 'react';

export default function Help({children}) {
    return(
        <div className='tools-panel' id='help'>
        {children}
        <h1>Panneau Help</h1>
        <hr></hr>
        <p>Contenu a venir...</p>
        </div>
    );
}