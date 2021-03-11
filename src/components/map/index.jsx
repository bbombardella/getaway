import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import World from './world/';
import './Map.css';

export default function Map(props) {

    const world = useSelector(state => ({
        world: state.world
    }));

    let matrice_miroir = [
        {
            x: 0,
            y: 0,
            orientation: 'down'
        }
    ];

    if(world===12) {
        return(
            <div className='map'>
                <World world={world.world} />
                {
                    props.children
                }
            </div>
        );
    } else {
        return(
            <div className='map'>
                <World world={world.world} />
                {
                    props.children
                }
            </div>
        );
    }
}