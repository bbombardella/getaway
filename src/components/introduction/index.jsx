import React, { useState } from 'react';
import { INTRO } from '../../config/const/intro';
import './Introduction.css';

export default function Introduction({children}){

    const [idPhrase, setIdPhrase] = useState(0);

    return(
        <div className='introduction'>
            {
            idPhrase >= INTRO.length ? 
            <p><img src="./assets/logo_accueil/get_away_blanc.png" id="logo"></img></p> 
            : 
            <div><p>{INTRO[idPhrase]}</p><button onClick={() => setIdPhrase(idPhrase+1)}>Suivant</button></div>
            }
            {children}
        </div>
    );
}