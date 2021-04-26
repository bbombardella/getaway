import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { CHANGE_SETTING } from '../../config/const/settings';
import './settings.css'
import useKeyPress from '../../hooks/use-key-pressed/';


export default function Settings({ closeDialog }){
    const [test, setTest] = useState(false);
    const [set, setSet] = useState(false);


    const { settings } = useSelector(state => ({
        settings : state.settings,
    }));

    const dispatch = useDispatch();

    useKeyPress((e) => {
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
            <div className='Global'>
                <div className='row'>
                    <p className='SettingsText'>up</p>
                    <button className='button-settings' onClick={() =>{SetKey('up'); }}>{settings.up.toUpperCase()}</button>
                </div>
                <div className='row'>
                    <p className='SettingsText'>down</p>
                    <button className='button-settings' onClick={() =>{SetKey('down'); }}>{settings.down.toUpperCase()}</button>
                </div>
                <div className='row'>
                    <p className='SettingsText'>left</p>
                    <button className='button-settings' onClick={() =>{SetKey('left'); }}>{settings.left.toUpperCase()}</button>
                </div>
                <div className='row'>
                    <p className='SettingsText'>right</p>
                    <button className='button-settings' onClick={() =>{SetKey('right'); }}>{settings.right.toUpperCase()}</button>
                </div>
                <div className='row'>
                    <p className='SettingsText'>Interaction</p>
                    <button className='button-settings' onClick={() =>{SetKey('interaction'); }}>{settings.interaction.toUpperCase()}</button>
                </div>
                <div className='row'>
                    <p className='SettingsText'>Musique</p>
                    <button className='button-settings' onClick={() =>{SetKey('music'); }}>{settings.music.toUpperCase()}</button>
                </div>
                <div className='row'>
                    <p className='SettingsText'>Aide</p>
                    <button className='button-settings' onClick={() =>{SetKey('help'); }}>{settings.help.toUpperCase()}</button>
                </div>
                <div className='row'>
                    <p className='SettingsText'>Inventaire</p>
                    <button className='button-settings' onClick={() =>{SetKey('inventory'); }}>{settings.inventory.toUpperCase()}</button>
                </div>
            </div>
        </div>
        );   
    }
