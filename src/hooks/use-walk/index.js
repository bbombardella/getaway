import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SPRITE_SIZE, DIRECTIONS, WORLD_SET_NUMBER, MAP_DIMENSION} from '../../config/const';
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
        const collisionArray = collisions[`Collision${world}`]
        const tempx = (x + modifier[dir].x)/SPRITE_SIZE
        const tempy = (y + modifier[dir].y)/SPRITE_SIZE


        if (collisionArray[tempy][tempx] === 0)
        {
            setInteract(false);
            if(collisionArray[tempy-1][tempx] >= 20) {
                setInteract(true);
                setObject(collisionArray[tempy-1][tempx]);
                console.log(interact, collisionArray[tempy-1][tempx]);
            }
            if(collisionArray[tempy+1][tempx] >= 20) {
                setInteract(true);
                setObject(collisionArray[tempy+1][tempx]);
                console.log(interact, collisionArray[tempy+1][tempx]);
            }
            if(collisionArray[tempy][tempx-1] >= 20) {
                setInteract(true);
                setObject(collisionArray[tempy][tempx-1]);
                console.log(interact, collisionArray[tempy][tempx-1]);
            }
            if(collisionArray[tempy][tempx+1] >= 20) {
                setInteract(true);
                setObject(collisionArray[tempy][tempx+1]);
                console.log(interact, collisionArray[tempy][tempx+1]);
            }

            return ({ 
                x: x + modifier[dir].x,
                y: y + modifier[dir].y,
            })
        } else if(collisionArray[tempy][tempx] === 32) {
            dispatch({
                type: WORLD_SET_NUMBER,
                payload: {
                    number: world+1
                }
            });
            return({x, y: y+(8*SPRITE_SIZE)});
        } else if(collisionArray[tempy][tempx] === 34) {
            dispatch({
                type: WORLD_SET_NUMBER,
                payload: {
                    number: world-1
                }
            });
            return({x, y: y-(8*SPRITE_SIZE)});
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