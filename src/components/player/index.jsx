import React from 'react';
import Actor from '../actor';
import useKeyPress from '../../hooks/use-key-pressed';
import useWalk from "../../hooks/use-walk";
import { SPRITE_SIZE } from '../../config/const';

export default function Player({ skin }) {
    const { dir, step, walk, position } = useWalk(4);

    const data = {
        w:SPRITE_SIZE,
        h:SPRITE_SIZE,
    };

    useKeyPress((e) => {
        if(e.key.includes("Arrow")) {
            walk(e.key.replace("Arrow", "").toLowerCase());
        }   
        e.preventDefault();
    });

    return <Actor sprite={`spritesheetHeros.png`} data={data} step={step} dir={dir} position={position} />
}