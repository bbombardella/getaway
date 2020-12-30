import React from 'react';
import { useSelector } from 'react-redux';

function InventoryItem({id,name,description}) {
    return(
        <div 
            style={{
                margin: '1em',
                border: '2px solid white'
            }}
        key={id}>
            <p><strong>Nom :</strong> {name}</p>
            <p><strong>Description :</strong> {description}</p>
        </div>
    )
}

export default function Inventory({children}) {
    const inventory = useSelector(state => state.inventory);

    const isEmpty = inventory.length===0;

    return(
        <div className='tools-panel' id='inventory'>
        {children}
        <h1>Panneau Inventaire</h1>
        <hr></hr>
        {isEmpty ? <p>(Vous n'avez pas d'objets pour le moment...)</p> : inventory.map((row) => <InventoryItem key={row.id} id={row.id} name={row.name} description={row.description} />)}
        </div>
    );
}