import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SPRITE_SIZE, DIRECTIONS, WORLD_SET_NUMBER, DOORS, INVENTORY_OBJECTS } from '../../config/const';
import * as collisions from '../../components/map/world/collision/';


export default function useWalk(maxSteps) {
    const [position, setPos] = useState({x: 2*SPRITE_SIZE, y: 3*SPRITE_SIZE});
    const [dir, setDir] = useState(0);
    const [prevdir, setprevDir] = useState(0);
    const [step,setStep] = useState(0);
    const [interact, setInteract] = useState(false);
    const [object, setObject] = useState(0);
    const directions = DIRECTIONS;

    const stepSize = SPRITE_SIZE;

    const modifier ={
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }

    const world = useSelector(state => state.world);
    const dispatch = useDispatch();
    

    function walk(dir) {
        setprevDir(dir);
        setDir((prev) => {return directions[dir]});
        if(prevdir===dir){
            move(dir);
        }
        setStep((prev) => prev < maxSteps-1 ? prev+1 : 0);

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
            const door = DOORS[collisionArray[tempy][tempx]];
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

    
    return {
        walk,
        dir,
        step,
        position,
        interact,
        object
    }
}