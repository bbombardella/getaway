import React from 'react';
import Sprite from '../sprite';

export default function Actor({sprite, data, step=0, dir=0, position=0}) {
    const { w, h } = data;
    return(
        <Sprite 
            image={sprite}
            data= {{
                x:step*w,
                y:dir*h,
                w,
                h,
            }}
            step={step}
            dir={dir}
            position={position}
        />
    );
}