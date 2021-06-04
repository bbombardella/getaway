import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_SCORE, NB_CIRCLE, SUCCESS, PLAYING, STAGE1, STAGE2,STAGE3, CHANGE_LUMINOSITY, INVENTORY_ADD_ACTION} from '../../config/const/settings';
import { useStopwatch } from 'react-timer-hook';
import { INVENTORY_OBJECTS } from '../../config/const/inventory';


export default function Boss({ data }) {

    const {score,boss} = useSelector(state => ({
        boss : state.boss,
        score : state.score,
    }));
    
    const {
        seconds,
        reset,
    } = useStopwatch({ autoStart: true});
    
    const dispatch = useDispatch();
    let d    //diamètre cercle 
    let clickable=false;   
    let num  //num de la position des cercles
    let step //étape du num
    
    //SET de num et step
    if (seconds<STAGE1*4){
        num=seconds/4|0
        step=seconds%4
    }else if(seconds<(STAGE1*4 + STAGE2*3)){

        num=STAGE1 + (seconds-STAGE1*4)/3|0
        step=(seconds-STAGE1*4)%3

    }else if(seconds<STAGE1*4 +STAGE2*3+ STAGE3*2){

        num=STAGE1 + STAGE2 + (seconds-STAGE1*4-STAGE2*3)/2|0
        step=(seconds-STAGE1*4 - STAGE2*3)%2

    }else{
        num=STAGE1+STAGE2+STAGE3+(seconds-STAGE1*4 -STAGE2*3-STAGE3*2)
        step=(seconds-STAGE1*4 -STAGE2*3-STAGE3*2)
    }
    console.log("-----")
    console.log("sec: "+seconds)
    console.log("num: "+num)
    console.log("step: "+step)
    console.log("pts: "+score)

    //arrête l'enigme
    if (num === NB_CIRCLE){
        
        dispatch({
            type: CHANGE_LUMINOSITY,
            payload: {
                lum: 5,
            }
        });
        if(score*100/NB_CIRCLE>=75){
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[702],
                
            });
            console.log("on est la");
        }else{
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[703],
                
            });
        }
        reset();
        dispatch({
            type:PLAYING,
            payload:{
                playing:false
            }
        });
    }

    //distribution du diamètre du cercle blanc
    if (num<STAGE1){
        if (step===0){
            d=40;
        }else if(step===1){
            d=30;
        }else if(step===2){
            d=20;
        }else{
            d=0;
            clickable=true;
        }
    }else if(num<STAGE2+STAGE1){
        if (step===0){
            d=35;
        }else if(step===1){
            d=22;
        }else{
            d=0;
            clickable=true;
        }
    }else if(num<STAGE3+STAGE2+STAGE1){
        if (step===0){
            d=25;
        }else{
            d=0;
            clickable=true;
        }
    }else{
        d=0;
        clickable=true;
    }

    //gestion du clique sur le cercle rouge
    function clic(score,num, clickable){
        if(clickable && !boss[num].success){
            let newScore=score + 1
            //incrémentation du score
            dispatch({
                type:CHANGE_SCORE,
                payload:{
                    score:newScore
                }
            });
 
            

            //passage à true du boolean associé au coordonné
            dispatch({
                type:SUCCESS,
                payload:{
                    num:num
                }
            });
        }
        
        
    } 
    return (
        
        <svg style={{
            position: 'absolute',
            top: '0',
            width: '840',
            height: '524'
        }}>
            <circle cx={boss[num].coord.x} cy={boss[num].coord.y} r={d} fill="white"/>
            <circle cx={boss[num].coord.x} cy={boss[num].coord.y} r="15" fill="red" onClick={() =>{clic(score,num,clickable)}}/>
        </svg>
)}

