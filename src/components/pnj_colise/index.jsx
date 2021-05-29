import React from 'react';
import { SPRITE_SIZE } from '../../config/const/settings';
import toby_roche from '../../assets/tiles/skin/TobyRoche.png';
import toby_c from '../../assets/tiles/skin/Toby_C.png';
import sol_colisee from '../../assets/tiles/map/sol_colisee.png';

export default function PnjColise({ petrified }) {

    let image;

    if (petrified) {
        image = toby_roche;
    } else if (!petrified) {
        image = toby_c;
    } else {
        image = sol_colisee;
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