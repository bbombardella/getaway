import React from 'react';
import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { CHANGE_LUMINOSITY, CHANGE_SETTING } from '../../config/const/settings';
import { PathLine } from 'react-svg-pathline';
//import "./boss.css";
import { useStopwatch } from 'react-timer-hook';


export default function Boss({ data }) {

    const { boss} = useSelector(state => ({
        boss : state.boss,
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
    
    console.log(seconds);
    console.log(boss)
    let num = seconds/4|0
    let d=0

    if (seconds%4==0){
        d=40;
    }else if(seconds%4==1){
        d=30;
    }else if(seconds%4==2){
        d=20;
    }else{
        console.log("ty")
    }

    return (
        <svg style={{
            position: 'absolute',
            top: '0',
            width: '840',
            height: '524'
        }}>
            <circle cx={boss[num].x} cy={boss[num].y} r={d} fill="white"/>
            <circle cx={boss[num].x} cy={boss[num].y} r="15" fill="red"/>
        </svg>
)}

