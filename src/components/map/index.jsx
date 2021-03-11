import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import World from './world/';
import './Map.css';
import { SPRITE_SIZE } from '../../config/const/settings';

export default function Map(props) {

    const { world } = useSelector(state => ({
        world: state.world
    }));

    const [miroirs, setMiroirs] = useState([
        {
            x: 17,
            y: 2,
            orientation: 'right'
        },

        {
            x: 4,
            y: 2,
            orientation: 'right'
        },

        {
            x: 8,
            y: 2,
            orientation: 'right'
        },

        {
            x: 12,
            y: 2,
            orientation: 'right'
        },

        {
            x: 8,
            y: 5,
            orientation: 'right'
        },

        {
            x: 14,
            y: 5,
            orientation: 'right'
        },

        {
            x: 16,
            y: 5,
            orientation: 'right'
        },

        {
            x: 4,
            y: 9,
            orientation: 'right'
        },

        {
            x: 6,
            y: 9,
            orientation: 'right'
        },

        {
            x: 6,
            y: 6,
            orientation: 'right'
        },

        {
            x: 12,
            y: 8,
            orientation: 'right'
        },

        {
            x: 14,
            y: 8,
            orientation: 'right'
        },

        {
            x: 17,
            y: 10,
            orientation: 'right'
        },

        {
            x: 8,
            y: 10,
            orientation: 'right'
        },
    ]);

    const [rayons, setRayons] = useState([
        {
            debut: { x: 0, y: 0 },
            fin: { x: 0, y: 0 },
        }
    ]);

    console.log(world);

    if (world === 12) {
        return (
            <div className='map'>
                <World world={world} />
                {
                    props.children
                }
                <div className="miroirs">
                    blabla
                    {miroirs.map((miroir, index) => <Miroir key={index} data={miroir} />)}
                </div>
                <div className="rayons">
                    {rayons.map((rayon, index) => <Rayon key={index} data={rayon} />)}
                </div>
            </div>
        );
    } else {
        return (
            <div className='map'>
                <World world={world} />
                {
                    props.children
                }
            </div>
        );
    }
}

function Miroir({ data }) {

    let image="./assets/tiles/";

    switch(data.orientation) {
        case 'right':
            image+="miroir_droite.png";
            break;
        case 'left':
            image+="miroir_gauche.png";
            break;
        default:
            image+="miroir_droite.png";
            break;
    }

    return (
        <div className="miroir" style={{
            position: 'absolute',
            top: data.y*SPRITE_SIZE,
            left: data.x*SPRITE_SIZE,
            height: `${SPRITE_SIZE}px`,
            width: `${SPRITE_SIZE}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            transition: 'left 0.3s linear 0s, top 0.3s linear 0s',
        }}>
        </div>
    )
}

function Rayon({ data }) {
    return (
        <div className="rayon" style={{
            height: `${SPRITE_SIZE}px`,
            width: `${SPRITE_SIZE}px`,
            /*backgroundImage: `url(${})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${}px -${}px`,*/
            transition: 'left 0.3s linear 0s, top 0.3s linear 0s',
            opacity: 0
        }}>
            r
        </div>
    )
}