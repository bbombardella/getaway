import { useState } from 'react';
import { SPRITE_SIZE, DIRECTIONS } from '../../config/const'

export default function useWalk(maxSteps) {
    const [position, setPos] = useState({x: 0, y: 0});
    const [dir, setDir] = useState(0);
    const [step,setStep] = useState(0);
    const directions = DIRECTIONS;

    const stepSize = SPRITE_SIZE;

    const modifier ={
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }

    function walk(dir) {
        setDir((prev) => {
            if(directions[dir] === prev ) move(dir)
            return directions[dir];
        });
        setStep((prev) => prev < maxSteps-1 ? prev+1 : 0);
    }

    function move(dir){
        setPos(prev => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y,
            
        }))
    }

    return {
        walk,
        dir,
        step,
        position,
    }
}