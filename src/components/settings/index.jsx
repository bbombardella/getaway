import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_SETTING } from '../../config/const/settings';
import './settings.css'

export default function Settings({ closeDialog }){
    const { settings } = useSelector(state => ({
        settings : state.settings,
    }));
    const dispatch = useDispatch();
    const tab=[
        "up","down","left","right","interaction"
    ]
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
    

    function SetNewTouch(){
        var i=0;
        var setting;
        var value;
        while(i<tab.length-1){
            setting=tab[i];
            value= document.getElementById(tab[i]);
            dispatch({
                type:CHANGE_SETTING,
                payload:{
                    setting: setting,
                    newKey:value,
                }
            })
        }
        closeDialog();
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


        /*<form>
            <div className='button-settings'>

                <label>Haut</label>
                <input  className='button-settings' type ="text" id="up" value={settings.up}></input>
                <label>Bas</label>
                <input  className='button-settings' type ="text" id="down" value={settings.down}></input>
                <label>Droite</label>
                <input  className='button-settings' type ="text" id="right"  value={settings.right}></input>
                <label>Gauche</label>
                <input  className='button-settings' type ="text" id="left"  value={settings.left}></input>
                <label>Interragir</label>
                <input  className='button-settings' type ="text" id="interaction"  value={settings.interaction}></input>
                <button className='button-settings' type="reset" value="Reset">Modifier</button>
                <button className='button-settings' onClick={() => SetNewTouch()}>Valider</button>

            </div>
        </form>*/

