import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import World from './world/';
import Miroir from '../miroir';
import Rayon from '../rayon';
import './Map.css';

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
                {props.children}
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
                {props.children}
            </div>
        );
    }
}