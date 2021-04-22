import React from 'react';
import { PathLine } from 'react-svg-pathline';
import { SPRITE_SIZE, PNJ_CHANGE_STATE } from '../../config/const/settings';
import { useSelector, useDispatch } from 'react-redux';

export default function Rayon({ data }) {

    const dispatch = useDispatch();
    const { miroirs, pnj_colise } = useSelector(state => ({
        miroirs: state.miroirs,
        pnj_colise: state.pnj_colise,
    }));

    var success = false;
    var pts = createRayon(miroirs);
    var last_ray = { x: 2 * SPRITE_SIZE, y: 6.5 * SPRITE_SIZE };
    var current_ray = pts[pts.length - 1];

    if (current_ray.x === last_ray.x && current_ray.y === last_ray.y) {
        success = true;
    }

    if (pnj_colise.petrified && success) {
        dispatch({
            type: PNJ_CHANGE_STATE,
            payload: {
                petrified: false,
            }
        });
    }

    console.log(pts);
    return (
        <svg style={{
            position: 'absolute',
            top: '0',
            width: '840',
            height: '524'
        }}>
            <PathLine
                points={pts}
                stroke="yellow"
                strokeWidth="3"
                fill="none"
                r={10}
            />
        </svg>
    )
}

function createRayon(miroirs) {

    var pts = [{ x: 20 * SPRITE_SIZE + SPRITE_SIZE, y: 10 * SPRITE_SIZE + 0.5 * SPRITE_SIZE }];
    var orientationRayon = 'Left';
    var start;
    var tmp;
    var posx, posy;
    var nextMirrorId = 12;


    while (nextMirrorId != null) {

        start = miroirs[nextMirrorId]
        tmp = defineNext(orientationRayon, start.orientation);
        orientationRayon = tmp;

        posx = start.x * SPRITE_SIZE + 0.5 * SPRITE_SIZE;
        posy = start.y * SPRITE_SIZE + 0.5 * SPRITE_SIZE;

        pts.push({ x: posx, y: posy });


        switch (orientationRayon) {
            case 'Up':
                nextMirrorId = start.nextMirrorUp;
                break;
            case 'Left':
                nextMirrorId = start.nextMirrorLeft;
                break;
            case 'Down':
                nextMirrorId = start.nextMirrorDown;
                break;
            case 'Right':
                nextMirrorId = start.nextMirrorRight;
                break;
            default:
                break;

        }



        if (nextMirrorId === -1) {//les prochaines coordonnées sont celles d'un mur
            switch (orientationRayon) {
                case 'Up':
                    pts.push({ x: posx, y: 0 });
                    break;
                case 'Left':
                    pts.push({ x: 0, y: posy });
                    break;
                case 'Down':
                    pts.push({ x: posx, y: 12 * SPRITE_SIZE + SPRITE_SIZE });
                    break;
                case 'Right':
                    pts.push({ x: 20 * SPRITE_SIZE + SPRITE_SIZE, y: posy });
                    break;
                default:
                    break;
            }
            return pts;
        }

        if (nextMirrorId === 'end') {
            pts.push({ x: 2 * SPRITE_SIZE, y: 6.5 * SPRITE_SIZE });
            return pts;
        }

    }
    return pts;
}

function defineNext(rayonOrientation, mirrorOrientation) {
    if (mirrorOrientation === 'left') {
        if (rayonOrientation === 'Left') {
            return 'Up';
        }
        if (rayonOrientation === 'Right') {
            return 'Down';
        }
        if (rayonOrientation === 'Up') {
            return 'Left';
        }
        if (rayonOrientation === 'Down') {
            return 'Right';
        }
    }
    else {
        if (mirrorOrientation === 'right') {
            if (rayonOrientation === 'Left') {
                return 'Down';
            }
            if (rayonOrientation === 'Right') {
                return 'Up';
            }
            if (rayonOrientation === 'Up') {
                return 'Right';
            }
            if (rayonOrientation === 'Down') {
                return 'Left';
            }
        }

    }
}

