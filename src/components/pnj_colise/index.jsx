import React from 'react';
import { SPRITE_SIZE } from '../../config/const/settings';

export default function PnjColise({ petrified }) {

    let image = "./assets/tiles/";

    if (petrified) {
        image += "TobyRoche.png";
    } else if (!petrified) {
        image += "Toby_C.png";
    } else {
        image += "sol_colisee.png";
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