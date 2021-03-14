import React from 'react';
import {PathLine} from 'react-svg-pathline';
import { SPRITE_SIZE } from '../../config/const/settings';

export default function Rayon({ data }) {
    return (
        <svg>
            <PathLine 
                points={[{x:0, y:0}, {x:125, y: 0}, {x:125, y:125}, {x:250, y:125}]} 
                stroke="red" 
                strokeWidth="3"
                fill="none"
                r={10}
            />
        </svg>
    )
}