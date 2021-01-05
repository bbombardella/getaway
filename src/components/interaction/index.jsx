import React, {useState, Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {INVENTORY_ADD_ACTION, INVENTORY_OBJECTS} from '../../config/const';

export default function PopUpInteraction({closeDialog, objectdata}) {

    const dispatch = useDispatch();
    const [objectTaken, setObjectTaken] = useState(false);

    function addObject() {
        if((objectdata.id>=70 && objectdata.id<=71)) {
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[objectdata.associatedKey]
            });
        } else {
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[objectdata.id]
            });
        }
        setObjectTaken(true);
    }

    return(
        <div className='tools-panel' id='interaction'>
            <button className="panel-button" onClick={() => closeDialog()}>x</button>
            {objectTaken ? (
                <Fragment>
                    {(objectdata.id>=70 && objectdata.id<=71) ? (
                        <p>Bravo ! Vous possédez désormais la clé permettant d'ouvrir la prochaine porte !</p>
                    ) : (
                        <p>Bravo ! Vous possédez désormais l'objet "{objectdata.name}" !</p>
                    )}
                    
                </Fragment>
            ) : (
                <Fragment>
                <p>{objectdata.name} : {objectdata.description}</p>
                {objectdata.pickable &&
                    <Fragment>
                        {!(objectdata.id>=70 && objectdata.id<=71) && <p>Voulez-vous l'ajouter dans l'inventaire ?</p>}
                        <div>
                            <button onClick={() => addObject()}>Oui</button>
                            <button onClick={() => closeDialog()}>Non</button>
                        </div>
                    </Fragment>
                }
                </Fragment>
            )}
        </div>
    );
}