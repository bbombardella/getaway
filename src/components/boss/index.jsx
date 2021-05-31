import React from 'react';
import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { CHANGE_SCORE, NB_CIRCLE, SUCCESS, PLAYING, STAGE1, STAGE2,STAGE3} from '../../config/const/settings';
import { PathLine } from 'react-svg-pathline';
import { useStopwatch } from 'react-timer-hook';


export default function Boss({ data }) {

    const {score,boss} = useSelector(state => ({
        boss : state.boss,
        score : state.score,
    }));
    
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true});
    
    const dispatch = useDispatch();
    let num = seconds/4|0
    let d=0
    let clickable=false;
    let step
    console.log(seconds);
    console.log(score);
    
    console.log("test")
    

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

    console.log(num)
    console.log(step)
    console.log(score)

    if (num == NB_CIRCLE){
        reset()
        dispatch({
            type:PLAYING,
            payload:{
                playing:false
            }
        });
    }

    if (num<STAGE1){
        if (step==0){
            d=40;
        }else if(step==1){
            d=30;
        }else if(step==2){
            d=20;
        }else{
            d=0;
            clickable=true;
        }
    }else if(num<STAGE2+STAGE1){
        if (step==0){
            d=35;
        }else if(step==1){
            d=22;
        }else{
            d=0;
            clickable=true;
        }
    }else if(num<STAGE3+STAGE2+STAGE1){
        if (step==0){
            d=25;
        }else{
            d=0;
            clickable=true;
        }
    }else{
        d=0;
        clickable=true;
    }


    function test(score,num, clickable){
        if(clickable && !boss[num].success){
            let newScore=score + 1
            dispatch({
                type:CHANGE_SCORE,
                payload:{
                    score:newScore
                }
            });
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
            <circle cx={boss[num].coord.x} cy={boss[num].coord.y} r="15" fill="red" onClick={() =>{test(score,num,clickable)}}/>
        </svg>
)}

