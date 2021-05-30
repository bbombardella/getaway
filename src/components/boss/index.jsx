import React from 'react';
import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { CHANGE_SCORE, SUCCESS} from '../../config/const/settings';
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
    console.log(seconds);
    console.log(score);
    console.log(boss[num].success)
    

    if (seconds%4==0){
        d=40;
    }else if(seconds%4==1){
        d=30;
    }else if(seconds%4==2){
        d=20;
    }else{
        d=0;
    }

    function test(score,num){
        if(seconds%4==3 && !boss[num].success){
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
            <circle cx={boss[num].coord.x} cy={boss[num].coord.y} r="15" fill="red" onClick={() =>{test(score,num)}}/>
        </svg>
)}

