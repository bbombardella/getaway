import React from 'react';
import { connect } from 'react-redux';
import Actor from '../actor';
import useKeyPress from '../../hooks/use-key-pressed';
import useWalk from "../../hooks/use-walk";
import { SPRITE_SIZE, INVENTORY_ADD_ACTION, INVENTORY_OBJECTS } from '../../config/const';

export default function Player({ skin,dispatch }) {
    const { dir, step, walk, position, interact, object } = useWalk(4);

    const data = {
        w:SPRITE_SIZE,
        h:SPRITE_SIZE,
    };

    useKeyPress((e) => {
        if(e.key.includes("Arrow")) {
            walk(e.key.replace("Arrow", "").toLowerCase());
        }
        if(e.key === 'a' && interact){
            const objectPayload = INVENTORY_OBJECTS[object];
            if(objectPayload!=null) {
                dispatch({
                    type: INVENTORY_ADD_ACTION,
                    payload: objectPayload
                });
            }
        }
        e.preventDefault();
    });

    return <Actor sprite={`spritesheetHerosTemplate.png`} data={data} step={step} dir={dir} position={position} />
}

function mapStateToProps(state) {
    return {inventory: state.inventory}
}

export const PlayerStore = connect(mapStateToProps)(Player)