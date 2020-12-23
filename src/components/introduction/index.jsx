import React from 'react';
import { INTRO } from '../../config/const';
import './Introduction.css';

export default function Introduction({children}){

    return(
        <div className='introduction'>
            {INTRO.map((phrase, index) => <p key={index}>{phrase}</p>)}
            {children}
        </div>
    );
}