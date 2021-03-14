import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import World from './world/';
import Miroir from '../miroir';
import './Map.css';
import { SPRITE_SIZE } from '../../config/const/settings';

export default function Map(props) {

    const { world, miroirs } = useSelector(state => ({
        world: state.world,
        miroirs: state.miroirs
    }));

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