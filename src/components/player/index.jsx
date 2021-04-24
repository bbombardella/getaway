import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Actor from '../actor';
import useKeyPress from '../../hooks/use-key-pressed';
import useWalk from "../../hooks/use-walk";
import { SPRITE_SIZE } from '../../config/const/settings';

export default function Player({ skin }) {
    const { dir, step, walk, position } = useWalk(4);

    const data = {
        w: SPRITE_SIZE,
        h: SPRITE_SIZE,
    };

    const {worldLoading, settings} = useSelector(state => ({
        worldLoading: state.worldLoading,
        settings: state.settings,
    }));

    const [isPressed, setPressed] = useState(false);

    useKeyPress((e) => {
        if (!isPressed) {
            var press=false;
            switch (e.key){
                case settings.up:
                    walk('up');
                    press=true;
                    break;
                case settings.down:
                    walk('down');
                    press=true;
                    break;
                case settings.right:
                    walk('right');
                    press=true;
                    break;
                case settings.left: 
                    walk('left')
                    press=true;
                    break;
                default:
                    press=false;
                    break;
            }
 
            if (press) {
                setPressed(true);
                setTimeout(function () {
                    setPressed(false);
                }, 150);
            }
        }
        e.preventDefault();
    });

    return <Actor sprite={`spritesheetHeros.png`} data={data} step={step} dir={dir} position={position} hidden={worldLoading.worldLoading} />
}