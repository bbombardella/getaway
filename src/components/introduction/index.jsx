import React, { useState } from 'react';
import { INTRO } from '../../config/const';
import './Introduction.css';

export default function Introduction({children}){

    const [idPhrase, setIdPhrase] = useState(0);

    return(
        <div className='introduction'>
            {
            idPhrase >= INTRO.length ? 
            <p>(Fin de l'introduction...)</p> 
            : 
            <div><p>{INTRO[idPhrase]}</p><button onClick={() => setIdPhrase(idPhrase+1)}>Suivant</button></div>
            }
            {children}
        </div>
    );
}