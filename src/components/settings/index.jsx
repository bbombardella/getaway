import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_SETTING } from '../../config/const/settings';
import './settings.css'

export default function Settings({ closeDialog }){
    const[controle, setControle] = useState(true);
    const { settings } = useSelector(state => ({
        settings : state.settings,
    }));
    console.log(settings)
    if(controle&&settings.up==='z'){
        SetFleche();
        console.log(settings)
    }
    if(!controle&&settings.up==='ArrowUp'){
        SetZQSD();
        console.log(settings)
    }
    return (
    <div className='tools-panel' id= 'settings'>
        <button classeName='panel-button' onClick={() => closeDialog()}>x</button>
        <h1>Réglages</h1>
        <hr></hr>
        <h2>Contrôles</h2>
        <button className='button-settings' onClick={() => setControle(false)}>ZQSD</button>
        <button className='button-settings' onClick={() => setControle(true)}>Touches flèchées</button>
    </div>
    );
}

function SetZQSD(){
console.log("zqsd")
    useDispatch({
        type:CHANGE_SETTING,
        payload: {
            up : 'z',
            down : 's',
            left : 'q',
            right : 'd',
            music : 'm',
            interaction : 'a',
            help : 'h',
            inventory: 'i',
        }
    })
}

function SetFleche(){
console.log("fleche")
    useDispatch({
        type:CHANGE_SETTING,
        payload: {
            up : 'ArrowUp',
            down : 'ArrowDown',
            left : 'ArrowLeft',
            right : 'ArrowRight',
            music : 'm',
            interaction : 'a',
            help : 'h',
            inventory: 'i',
       }
    })
}
