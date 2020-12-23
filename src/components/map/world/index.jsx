import React from 'react';
import { connect } from 'react-redux';
import * as tiles from './collision/';
import { SPRITE_SIZE, MAP_DIMENSION, MAP_TILES } from '../../../config/const';
import './World.css';

function MapTile({value}) {
    const background = MAP_TILES[value];
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
    return(
        <div className='map-row'>
            {
                props.tiles.map((tile, index) => <MapTile key={index+(props.id*MAP_DIMENSION.column)} value={tile} />)
            }
        </div>
    );
}

export default function World({world}) {
    const tile = tiles[`Collision${world}`];

    return(
        <div className='world'>
            {
                tile.map((row, index) => <MapRow key={index} id={index} tiles={row} />)
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {world: state.world}
}

export const WorldStore = connect(mapStateToProps)(World)