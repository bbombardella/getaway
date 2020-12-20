import React from 'react';
import * as tiles from './collision/index.jsx';
import { SPRITE_SIZE, MAP_DIMENSION, MAP_TILES } from '../../../config/const';
import './World.css';

function MapTile({value}) {
    const background = MAP_TILES[value];
    return (<div
        className='map-title'
        style={{
            background: `url('./assets/tiles/${background})`,
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
    const tile = tiles[`Collision${idWorld}`];

    return(
        <div className='world'>
            {
                tile.map((row, index) => <MapRow key={index} id={index} tiles={row} />)
            }
        </div>
    );
}