import React from 'react';
import { SPRITE_SIZE } from '../../config/const/settings';

export default function PnjColise({ petrified }) {

    let image = "./assets/tiles/";

    if (petrified) {
        image += "vide_vert.png";
    } else if (!petrified) {
        image += "herbe.png";
    } else {
        image += "vide_vert.png";
    }

    return (
        <div className="pnj" style={{
            position: 'absolute',
            top: 6 * SPRITE_SIZE,
            left: 1 * SPRITE_SIZE,
            height: `${SPRITE_SIZE}px`,
            width: `${SPRITE_SIZE}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
        }}>
        </div>
    )
}