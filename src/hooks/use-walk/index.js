import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SPRITE_SIZE, DIRECTIONS, WORLD_SET_NUMBER, DOORS, INVENTORY_OBJECTS, INTERACTION_SET_TEXT } from '../../config/const';
import * as collisions from '../../components/map/world/collision/';


export default function useWalk(maxSteps) {
    const [position, setPos] = useState({x: 2*SPRITE_SIZE, y: 3*SPRITE_SIZE});
    const [dir, setDir] = useState(0);
    const [prevdir, setprevDir] = useState(0);
    const [step,setStep] = useState(0);
    const [interact, setInteract] = useState(false);
    const [object, setObject] = useState(0);
    const [hasKey, setHasKey] = useState(false);
    const directions = DIRECTIONS;

    const stepSize = SPRITE_SIZE;

    const modifier ={
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }

    const { world, inventory } = useSelector(state => ({
        world: state.world,
        inventory: state.inventory
    }));
    const dispatch = useDispatch();
    

    function walk(dir) {
        setprevDir(dir);
        setDir((prev) => {return directions[dir]});
        if(prevdir===dir){
            move(dir);
        }
        setStep((prev) => prev < maxSteps-1 ? prev+1 : 0);
        if(interact){
            const objectPayload = INVENTORY_OBJECTS[object];
            if(objectPayload!=null) {
                if(objectPayload.descVisible) {
                    dispatch({
                        type: INTERACTION_SET_TEXT,
                        payload: {
                            interact: true,
                            ...objectPayload
                        }
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
    }

    function testCollision({x, y}, dir) {
        const collisionArray = collisions[`collision${world}`]
        const tempx = (x + modifier[dir].x)/SPRITE_SIZE
        const tempy = (y + modifier[dir].y)/SPRITE_SIZE


        if (collisionArray[tempy][tempx] === 0)
        {
            setInteract(false);
            if(INVENTORY_OBJECTS[collisionArray[tempy-1][tempx]]!=null) {
                setInteract(true);
                setObject(collisionArray[tempy-1][tempx]);
                console.log('true', collisionArray[tempy-1][tempx]);
            }
            if(INVENTORY_OBJECTS[collisionArray[tempy+1][tempx]]!=null) {
                setInteract(true);
                setObject(collisionArray[tempy+1][tempx]);
                console.log('true', collisionArray[tempy+1][tempx]);
            }
            if(INVENTORY_OBJECTS[collisionArray[tempy][tempx-1]]!=null) {
                setInteract(true);
                setObject(collisionArray[tempy][tempx-1]);
                console.log('true', collisionArray[tempy][tempx-1]);
            }
            if(INVENTORY_OBJECTS[collisionArray[tempy][tempx+1]]!=null) {
                setInteract(true);
                setObject(collisionArray[tempy][tempx+1]);
                console.log('true', collisionArray[tempy][tempx+1]);
            }

            return ({ 
                x: x + modifier[dir].x,
                y: y + modifier[dir].y,
            })
        } else if(collisionArray[tempy][tempx]>=40 && collisionArray[tempy][tempx]<=60) {
            const doorNumber = collisionArray[tempy][tempx];
            const door = DOORS[doorNumber];
            setHasKey(() => containKey(door.keyNeeded));
            if(hasKey) {
                dispatch({
                    type: WORLD_SET_NUMBER,
                    payload: {
                        number: door.nextWorld
                    }
                });
                return({
                    x: x+door.newPosition.x,
                    y: y+door.newPosition.y
                })
            } else {
                return ({ 
                    x,
                    y
                })
            }
        }
        else
        {
            return ({
                x,
                y,
            })
        }      
    }

    function move(dir){
        setPos(prev => testCollision(prev, dir));
    }

    function containKey(keyNumber) {
        if(keyNumber===false) {
            return true;
        }
        for(var i= 0; i < inventory.length; i++) {
            if(inventory[i].id===keyNumber) {
                return true;
            }
        }
        return false;
    }

    
    return {
        walk,
        dir,
        step,
        position
    }
}