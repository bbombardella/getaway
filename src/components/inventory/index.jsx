import React from 'react';
import { useSelector } from 'react-redux';
import { MAP_TILES } from '../../config/const/tiles';
import './Inventory.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../assets/tiles/map', false, /\.(png|jpe?g|svg)$/));


function InventoryItem({ id, name, description }) {
    const url = MAP_TILES[id].url;
    console.log(url, images[url]);
    return (
        <div className="inventory-item" key={id}>
            <img src={images[url].default} alt={name}></img>
            <p><strong>{name}</strong>
                <br></br><em>{description}</em></p>
        </div>
    )
}

export default function Inventory({ closeDialog }) {
    const inventory = useSelector(state => state.inventory);
    const inventoryVisibleItems = inventory.filter(item => item.visible);

    const isEmpty = inventoryVisibleItems.length === 0;

    return (
        <div className='tools-panel' id='inventory'>
            <button className="panel-button" onClick={() => closeDialog()}>x</button>
            <h1>Panneau Inventaire</h1>
            <hr></hr>
            {isEmpty ? <p>(Vous n'avez pas d'objet pour le moment...)</p> : inventoryVisibleItems.map((row) => <InventoryItem key={row.id} id={row.id} name={row.name} description={row.description} />)}
        </div>
    );
}