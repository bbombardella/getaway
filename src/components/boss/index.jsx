import React from 'react';
import { PathLine } from 'react-svg-pathline';
import "./boss.css";


export default function Boss({ data }) {
    var rand = random();
    var rand2 = random();
    var rand3 = random();

    return (
        <svg style={{
            position: 'absolute',
            top: '0',
            width: '840',
            height: '524'
        }}>
            <circle cx={rand.x} cy={rand.y} r="20" class="circ1"/>
            <circle cx={rand2.x} cy={rand2.y} r="15" class="circ2"/>
            <circle cx={rand3.x} cy={rand3.y} r="5" class="circ3"/>
        </svg>
)}

function random() {
    var x = Math.floor(Math.random() * 750) + 100 ;
    var y = Math.floor(Math.random() * 450) + 100 ;
    return ({x,y});
}