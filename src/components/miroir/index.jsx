import React from 'react';
import { SPRITE_SIZE } from '../../config/const/settings';

export default function Miroir({ data }) {

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