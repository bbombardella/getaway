import React from 'react';
import * as tiles from './tiles/index.js';
import { SPRITE_SIZE, MAP_DIMENSION } from '../../../config/const';
import './World.css';

function MapTile(props) {
    return (<div
        className='map-title'
        style={{
            backgroundColor: props.value,
            width: SPRITE_SIZE,
            height: SPRITE_SIZE
        }}
    >
    </div>
    );
}

function MapRow(props) {
    return(
        <div className='map-row'>
            {
                props.tiles.map((tile, index) => <MapTile key={index+(props.id*MAP_DIMENSION.column)} value={tile} />)
            }
        </div>
    );
}

export default function World({ idWorld }) {
    const tile = tiles[`salle${idWorld}`];

    return(
        <div className='world'>
            {
                tile.map((row, index) => <MapRow key={index} id={index} tiles={row} />)
            }
        </div>
    );
}