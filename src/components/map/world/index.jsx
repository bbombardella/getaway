import React from 'react';
import * as tiles from './tiles/index.js';
import { SPRITE_SIZE, MAP_DIMENSION } from '../../../config/const';

function MapTile(props) {
    return (<div
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
        <div 
            className="row"
            style={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            {
                props.tiles.map((tile, index) => <MapTile key={index+(props.id*MAP_DIMENSION.column)} value={tile} />)
            }
        </div>
    );
}

export default function World({ idWorld }) {
    const tile = tiles[`salle${idWorld}`];

    return(
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '0px',
                height: '0px',
                border: '4px solid black',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}
        >
            {
                tile.map((row, index) => <MapRow key={index} id={index} tiles={row} />)
            }
        </div>
    );
}