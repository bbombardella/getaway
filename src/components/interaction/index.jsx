import React from 'react';

export default function PopUpInteraction({children, objectdata}) {

    return(
        <div className='tools-panel' id='interaction'>
            {children}
            <p>{objectdata.name} : {objectdata.description}</p>
        </div>
    );
}