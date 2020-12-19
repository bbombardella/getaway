import React from 'react';
import './Map.css';

export default function Map(props) {
    return(
        <div className='map'>
            {
                props.children
            }
        </div>
    );
}