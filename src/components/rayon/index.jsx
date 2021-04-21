import React from 'react';
import {PathLine} from 'react-svg-pathline';
import { SPRITE_SIZE } from '../../config/const/settings';
import {  useSelector } from 'react-redux';


export default function Rayon({ data }) {

    const {  miroirs } = useSelector(state => ({

        miroirs: state.miroirs
    }));
 
    
    var pts=/*[{x:0, y:0}, {x:3*SPRITE_SIZE, y: 0}, {x:125, y:125}, {x:250, y:125}]//*/createRayon(miroirs);
    console.log(pts);
    return (
        <svg style={{
            position: 'absolute',
            top: '0',
            width: '840',
            height: '524'}}>
            <PathLine 
                points={pts}
                stroke="red" 
                strokeWidth="3"
                fill="none"
                r={10}
            />
        </svg>
    )
}

function createRayon(miroirs){
    
    var pts=[{x:20* SPRITE_SIZE+0.5* SPRITE_SIZE, y:10* SPRITE_SIZE+0.5* SPRITE_SIZE}];
    var orientationRayon='Left';
    var start= miroirs[12];;
    var tmp;
    var posx, posy;
    var nextMirrorId=0;


    do{
        console.log(start);

        tmp = defineNext(orientationRayon, start.orientation);
        orientationRayon = tmp;

        console.log(orientationRayon);

        switch (orientationRayon){
            case 'Up':
                nextMirrorId = start.nextMirrorUp;
                break;
            case 'Left':
                nextMirrorId =start.nextMirrorLeft;
                break;
            case 'Down':
                nextMirrorId = start.nextMirrorDown;
                break;
            case 'Right':
                nextMirrorId = start.nextMirrorRight;
                break;
            default:
                nextMirrorId=-3;
                break;

        }
        console.log(nextMirrorId);

        posx= start.x* SPRITE_SIZE+0.5* SPRITE_SIZE;
        posy= start.y* SPRITE_SIZE+0.5* SPRITE_SIZE;

        if(nextMirrorId===-1){
            switch (orientationRayon){
            case 'Up':
                pts.push({x:0+0.5* SPRITE_SIZE ,y: posy});
                break;
            case 'Left':
                pts.push({x:posx ,y: 0+0.5* SPRITE_SIZE});
                break;
            case 'Down':
                pts.push({x:15* SPRITE_SIZE+0.5* SPRITE_SIZE ,y: posy});
                break;
            case 'Right':
                pts.push({x:posx ,y: 19* SPRITE_SIZE+0.5* SPRITE_SIZE});
                break;
            default:
                break;
            }
            return pts;
            
        }
        if(nextMirrorId===-10){
            return pts;
        }
        if(nextMirrorId===null){
            return pts;
        }
        
        pts.push({x:posx ,y: posy});
        start=miroirs[nextMirrorId]
        console.log(pts);

    }while(nextMirrorId!=null)
    console.log(pts);
    return pts;
}

function defineNext(rayonOrientation, mirrorOrientation){
    if(mirrorOrientation==='left'){
        if(rayonOrientation==='Left'){
            return 'Up';
        }
        if(rayonOrientation==='Right'){
            return  'Down';
        }
        if(rayonOrientation==='Up'){
            return 'Left';
        }
        if(rayonOrientation==='Down'){
            return 'Right';
        }
    }
    else{
        if(rayonOrientation==='Left'){
            return  'Down';
        }
        if(rayonOrientation==='Right'){
            return 'Up';
        }
        if(rayonOrientation==='Up'){
            return  'Right';
        }
        if(rayonOrientation==='Down'){
            return  'Left';
        }

    }
}