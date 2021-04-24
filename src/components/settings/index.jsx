import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_SETTING } from '../../config/const/settings';
import './settings.css'

export default function Settings({ closeDialog }){
    /*const[controle, setControle] = useState(true);
    const { settings } = useSelector(state => ({
        settings : state.settings,
    }));
    
    if(controle&&settings.up==='z'){
        SetFleche();
    }
    if(!controle&&settings.up==='ArrowUp'){
        console.log(settings);
        SetZQSD();
        console.log(settings);
    }*/

    const dispatch = useDispatch();

    function SetZQSD(){
        console.log("zqsd");
        dispatch({
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
        });
    }

    function SetFleche(){
        console.log("fleche")
            dispatch({
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
    
    return (
    <div className='tools-panel' id= 'settings'>
        <button classeName='panel-button' onClick={() => closeDialog()}>x</button>
        <h1>Réglages</h1>
        <hr></hr>
        <h2>Contrôles</h2>
        <button className='button-settings' onClick={() => SetZQSD()}>ZQSD</button>
        <button className='button-settings' onClick={() => SetFleche()}>Touches flèchées</button>
    </div>
    );
}




