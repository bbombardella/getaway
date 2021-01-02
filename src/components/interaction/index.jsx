import React, {useState, Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {INVENTORY_ADD_ACTION, INVENTORY_OBJECTS} from '../../config/const';

export default function PopUpInteraction({children, objectdata}) {

    const dispatch = useDispatch();
    const [keyTaken, setKeyTaken] = useState(false);

    function addKey() {
        dispatch({
            type: INVENTORY_ADD_ACTION,
            payload: INVENTORY_OBJECTS[objectdata.associatedKey]
        });
        setKeyTaken(true);
    }

    return(
        <div className='tools-panel' id='interaction'>
            {children}
            {keyTaken ? (
                <Fragment>
                    <p>Bravo ! Vous possédez désormais la clé !</p>
                </Fragment>
            ) : (
                <Fragment>
                <p>{objectdata.name} : {objectdata.description}</p>
                {(objectdata.id>=70 && objectdata.id<=71) && 
                    <div>
                        <button onClick={() => (addKey())}>Oui</button>
                        <button>Non</button>
                    </div>
                }
                </Fragment>
            )}
        </div>
    );
}