import React from 'react';
import { useDispatch } from 'react-redux';
import Actor from '../actor';
import useKeyPress from '../../hooks/use-key-pressed';
import useWalk from "../../hooks/use-walk";
import { SPRITE_SIZE, INVENTORY_ADD_ACTION, INVENTORY_OBJECTS, INTERACTION_SET_TEXT } from '../../config/const';

export default function Player({ skin }) {
    const { dir, step, walk, position, interact, object } = useWalk(4);

    const dispatch = useDispatch();

    const data = {
        w:SPRITE_SIZE,
        h:SPRITE_SIZE,
    };

    useKeyPress((e) => {
        if(e.key.includes("Arrow")) {
            walk(e.key.replace("Arrow", "").toLowerCase());
        }
        if(interact){
            const objectPayload = INVENTORY_OBJECTS[object];
            if(objectPayload.descVisible) {
                dispatch({
                    type: INTERACTION_SET_TEXT,
                    payload: {
                        interact: true,
                        id: objectPayload.id,
                        name: objectPayload.name,
                        description: objectPayload.description,
                        visible: objectPayload.visible
                    }
                });
                if(e.key === 'a') {
                    dispatch({
                        type: INVENTORY_ADD_ACTION,
                        payload: objectPayload
                    });
                }
            }
        } else {
            dispatch({
                type: INTERACTION_SET_TEXT,
                payload: {
                    interact: false,
                    id: 0,
                    name: '',
                    description: '',
                }
            });
        }
        e.preventDefault();
    });

    return <Actor sprite={`spritesheetHeros.png`} data={data} step={step} dir={dir} position={position} />
}