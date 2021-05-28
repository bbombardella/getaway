import React from 'react';
import * as tiles from './collision/';
import test from '../../../assets/tiles/mur_bas.png'
import { SPRITE_SIZE, MAP_DIMENSION } from '../../../config/const/settings';
import { MAP_TILES } from '../../../config/const/tiles';
import './World.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../assets/tiles', false, /\.(png|jpe?g|svg)$/));

function MapTile({ value }) {
    const tile = MAP_TILES[value];
    const background = tile.url;
    let image;

    if (images[background] === undefined) {
        image = "linear-gradient(315deg, #000000 0%, #414141 74%)"
    } else {
        image = images[background].default;
    }

    console.log(images['mur_bas.png'].default);

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