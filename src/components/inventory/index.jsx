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

export default function Inventory({closeDialog}) {
    const inventory = useSelector(state => state.inventory);
    const inventoryVisibleItems = inventory.filter(item => item.visible);

    const isEmpty = inventoryVisibleItems.length===0;

    return(
        <div className='tools-panel' id='inventory'>
            <button className="panel-button" onClick={() => closeDialog()}>x</button>
            <h1>Panneau Inventaire</h1>
            <hr></hr>
            {isEmpty ? <p>(Vous n'avez pas d'objets pour le moment...)</p> : inventoryVisibleItems.map((row) => <InventoryItem key={row.id} id={row.id} name={row.name} description={row.description} />)}
        </div>
    );
}