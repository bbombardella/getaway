import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import World from './world/';
import Miroir from '../miroir';
import Rayon from '../rayon';
import PnjColise from '../pnj_colise'
import Boss from '../boss'
import './Map.css';


export default function Map(props) {

    const { world, miroirs, pnj_colise, playing } = useSelector(state => ({
        world: state.world,
        miroirs: state.miroirs,
        pnj_colise: state.pnj_colise,
        playing:state.playing
    }));

    const [rayons, setRayons] = useState([
        {
            debut: { x: 0, y: 0 },
            fin: { x: 0, y: 0 },
        }
    ]);

    const [boss, setBoss] = useState([
        {
            debut: { x: 0, y: 0 },
            fin: { x: 0, y: 0 },
        }
    ]);

    console.log(world);

    if (parseInt(world) === 12) {
        return (
            <div className='map'>
                <World world={world} />
                {props.children}
                <div className="miroirs">
                    {miroirs.map((miroir, index) => <Miroir key={index} data={miroir} />)}
                </div>
                <div className="rayons">
                    {rayons.map((rayon, index) => <Rayon key={index} data={rayon} />)}
                </div>
                <div classname="pnj">
                    <PnjColise key={0} petrified={pnj_colise.petrified} />
                </div>
            </div>
        );
    } else if (parseInt(world) === 1) { // ajouter une autre condition objet? store?
        return (
            <div className='map'>
                <World world={world} />
                {props.children}
            </div>
        );
    } else if (parseInt(world) === 14 && playing) { // ajouter une autre condition objet? store?
        return (
            <div className='map'>
                <World world={world} />
                {props.children}
                <div className="boss">
                    {boss.map((boss, index) => <Boss key={index} data={boss} />)}
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