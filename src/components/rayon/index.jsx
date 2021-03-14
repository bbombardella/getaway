import React from 'react';
import { SPRITE_SIZE } from '../../config/const/settings';

export default function Rayon({ data }) {
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