import React from 'react';
import Actor from '../actor';
import useKeyPress from '../../hooks/use-key-pressed';
import useWalk from "../../hooks/use-walk";

export default function Player({ skin }) {
    const { dir, step, walk } = useWalk(3);

    const data = {
        w:32,
        h:32,
    };

    useKeyPress((e) => {
        walk(e.key.replace("Arrow", "").toLowerCase());

        e.preventDefault();
    });

    return <Actor sprite={`m${skin}.png`} data={data} step={step} />
};