import React from 'react';
import * as tiles from './collision/';
import { SPRITE_SIZE, MAP_DIMENSION } from '../../../config/const/settings';
import { MAP_TILES } from '../../../config/const/tiles';
import './World.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../assets/tiles/map', false, /\.(png|jpe?g|svg)$/));

function MapTile({ value }) {
    const tile_data = MAP_TILES[value];
    const url = tile_data.url;
    let image;

    if (images[url] === undefined) {
        image = images['default'];
    } else {
        image = images[url].default;
    }

    return (<div
        className='map-title'
        style={{
            backgroundImage: `url(${image})`,
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
    console.log(images);

    const tile = tiles[`collision${world}`];

    return (
        <div className='world'>
            {
                tile.map((row, index) => <MapRow key={index} id={index} tiles={row} />)
            }
        </div>
    );
}