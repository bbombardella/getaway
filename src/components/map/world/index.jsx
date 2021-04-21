import React from 'react';
import * as tiles from './collision/';
import { SPRITE_SIZE, MAP_DIMENSION } from '../../../config/const/settings';
import { MAP_TILES } from '../../../config/const/tiles';
import './World.css';

function MapTile({ value }) {
    const tile = MAP_TILES[value];
    const background = tile.url;

    return (<div
        className='map-title'
        style={{
            backgroundImage: `url(./assets/tiles/${background})`,
            width: SPRITE_SIZE,
            height: SPRITE_SIZE
        }}
    >
    </div>
    );
}

function MapRow(props) {
    return (
        <div className='map-row'>
            {
                props.tiles.map((tile, index) => <MapTile key={index + (props.id * MAP_DIMENSION.column)} value={tile} />)
            }
        </div>
    );
}

export default function World({ world }) {

    const tile = tiles[`collision${world}`];

    return (
        <div className='world'>
            {
                tile.map((row, index) => <MapRow key={index} id={index} tiles={row} />)
            }
        </div>
    );
}