import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { CHANGE_SETTING } from '../../config/const/settings';
import './settings.css'
import useKeyPress from '../../hooks/use-key-pressed/';
import { DIALOGUE } from '../../config/const/dialogue';

export default function Settings({ closeDialog }){
    const [test, setTest] = useState(false);
    const [set, setSet] = useState(false);


    const { settings } = useSelector(state => ({
        settings : state.settings,
    }));

    const dispatch = useDispatch();

    useKeyPress((e) => {
        console.log(e.key);
        console.log(test);
        var key=e.key
        if (test===true){
            dispatch({
                type:CHANGE_SETTING,
                payload: {
                    setting: set,
                    newkey: key
                }
            });
        }
        setTest(false); 
    });

    function SetKey(set) {
        console.log('hello world')
            dispatch({
                type:CHANGE_SETTING,
                payload: {
                    setting: set,
                    newkey: 'appuyer sur une touche'
                }
        });
        setTest(true); 
        setSet(set);
    }

    return (
        <div className='tools-panel' id= 'settings'>
            <button classeName='panel-button' onClick={() => closeDialog()}>x</button>
            <h1>Réglages</h1>
            <hr></hr>
            <h2>Contrôles</h2>
            <p>up</p>
            <button className='button-settings' onClick={() =>{SetKey('up'); }}>{settings.up}</button>
        </div>
        );   
    }
