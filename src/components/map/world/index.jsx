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
                width: `${MAP_DIMENSION.column*SPRITE_SIZE}px`,
                height: `${MAP_DIMENSION.line*SPRITE_SIZE}px`,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                border: '2px solid #3b3b3b'
            }}
        >
            {
                tile.map((row, index) => <MapRow key={index} id={index} tiles={row} />)
            }
        </div>
    );
}