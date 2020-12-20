import React from 'react';
import { connect } from 'react-redux';

function InventoryItem({id,name,size}) {
    return(
        <div 
            style={{
                margin: '1em',
                border: '2px solid white'
            }}
        key={id}>
            <p><strong>Nom :</strong> {name}</p>
            <p><strong>Taille :</strong> {size}</p>
        </div>
    )
}

export default function Inventory({children,inventory,dispatch}) {
    return(
        <div className='inventory' id='inventory'
        style={{
        position: 'fixed',
        minHeight: '40%',
        maxHeight: '70%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid white',
        zIndex: '10',
        backgroundColor: 'black',
        width: '500px',
        maxWidth: '80%',
        overflow: 'scroll'
        }}
        >
        {children}
        <h1>Panneau Inventaire</h1>
        <button onClick={() => dispatch({
            type: 'ADD',
            payload: {
                name: 'BIG DILDO',
                size: '65cm'
            }
        })}>Test ajout objet</button>
        <hr></hr>
        {inventory.map((row) => <InventoryItem id={row.id} name={row.name} size={row.size} />)}
        </div>
    );
}

function mapStateToProps(state) {
    return {inventory: state.inventory}
}

export const InventoryStore = connect(mapStateToProps)(Inventory)