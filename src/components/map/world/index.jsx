import React from 'react';
import * as tiles from './tiles/index.js';
import { SPRITE_SIZE } from '../../../config/const'

function MapTile(props) {
    console.log(props)
    return <div
        style={{
            backgroundColor: props.value,
            width: SPRITE_SIZE,
            height: SPRITE_SIZE
        }}
    >

    </div>
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
                props.tiles.map(tile => <MapTile value={tile} />)
            }
        </div>
    )
}

export default function World({ idWorld }) {
    const chemin = `salle${idWorld}`;
    const tile = tiles.salle1;

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
                tile.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}