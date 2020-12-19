import React from 'react';

export default function Help(props) {
    return(
        <div className='inventory' id='inventory'
        style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid white',
        zIndex: '10',
        backgroundColor: 'black',
        width: '500px',
        maxWidth: '80%'
        }}
        >
        <p>Panneau help</p>
        {
            props.children
        }
        </div>
    );
}