import React from 'react';
import { SPRITE_SIZE } from '../../config/const/settings';

export default function PnjColise({ data }) {

    let image="./assets/tiles/";

    switch(data.orientation) {
        case 'petrified':
            image+="vide_vert.png";
            break;
        case 'not petrified':
            image+="herbe.png";
            break;
        default:
            image+="vide_vert.png";
            break;
    }

    return (
        <div className="pnj" style={{
            position: 'absolute',
            top: 6*SPRITE_SIZE,
            left: 1*SPRITE_SIZE,
            height: `${SPRITE_SIZE}px`,
            width: `${SPRITE_SIZE}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
        }}>
        </div>
    )
}