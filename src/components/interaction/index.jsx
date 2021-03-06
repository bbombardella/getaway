import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { INVENTORY_ADD_ACTION, MIROIR_SET_ORIENTATION, PLAYING, CHANGE_LUMINOSITY } from '../../config/const/settings';
import { INVENTORY_OBJECTS } from '../../config/const/inventory';
import { MAP_TILES } from '../../config/const/tiles';
import { DIALOGUE } from '../../config/const/dialogue';
import { MIROIR } from '../../config/const/miroir';
import { useSelector } from 'react-redux';

import './Interaction.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const sceaux = importAll(require.context('../../assets/tiles/seaux', false, /\.(png|jpe?g|svg)$/));


function checkAlreadyExist(array, id) {
    for(var i=0;i<array.length;i++) {
        if(array[i].id === id) {
            return true;
        }
    }
    return false;
}

export default function PopUpInteraction({closeDialog, objectdata, miroirs}) {

    const dispatch = useDispatch();

    const { pnj_colise, inventory } = useSelector(state => ({
        pnj_colise: state.pnj_colise,
        inventory: state.inventory
    }));

    const [objectTaken, setObjectTaken] = useState(false);

    const typeObject = MAP_TILES[objectdata.id].type;
    var objectInfo;

    if(typeObject==='panneau') {
        objectInfo = DIALOGUE[objectdata.id];
    } else if(typeObject==='miroir') {
        objectInfo = MIROIR[objectdata.id];
    } else {
        objectInfo = INVENTORY_OBJECTS[objectdata.id];
    }

    const [indexDialogue, setIndexDialogue] = useState(0);

    const [contenu3L, setContenu3L] = useState(0);
    const [contenu5L, setContenu5L] = useState(0);

    const [enigmeSuccess, setEnigmeSuccess] = useState(false)

    function addObject() {
        if(typeObject==='coffre') {
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[objectInfo.associatedKey]
            });
        } else if(typeObject==='objet') {
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[objectInfo.id]
            });
        }
        setObjectTaken(true);
    }

    if(enigmeSuccess) {
        return(
            <div className="tools-panel" id="interaction">
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                <hr></hr>
                <p>??gnime valid??e</p>
                <button onClick={() => closeDialog()}>OK</button>
        </div>
        )
    } else if(typeObject==='objet' || typeObject==='coffre') {
        return(
            <div className='tools-panel' id='interaction'>
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                {objectTaken ? (
                    <>
                        {(typeObject==='coffre') ? (
                            <p>Bravo ! Vous poss??dez d??sormais la cl?? permettant d'ouvrir la prochaine porte !</p>
                        ) : (
                            <p>Bravo ! Vous poss??dez d??sormais l'objet "{objectdata.name}" !</p>
                        )}
                        
                    </>
                ) : (
                    <>
                    <p>{objectInfo.description}</p>
                    {objectInfo.pickable &&
                        <>
                            {!(typeObject==='coffre') && <p>Voulez-vous l'ajouter dans l'inventaire ?</p>}
                            <div>
                                <button onClick={() => addObject()}>Oui</button>
                                <button onClick={() => closeDialog()}>Non</button>
                            </div>
                        </>
                    }
                    </>
                )}
            </div>
        );
    } else if(typeObject==='panneau') {

        //Ici je v??rifie juste si on est dans le cas de Toby
        //comme ??a je peux lui attribuer un id du tableau diff??rents
        //selon s'il est p??trifi?? ou non !
        if (objectInfo === DIALOGUE[145]){
            if (!pnj_colise.petrified){
               objectInfo = DIALOGUE[146] 
               //Donc s'il a ??t?? lib??r?? on lui attribue l'indice 146 qui correspond
               //au dialogue du personnage apr??s avoir ??t?? lib??r?? !
               if (!checkAlreadyExist(inventory, 701)){
                   dispatch({
                    type: INVENTORY_ADD_ACTION,
                    payload: INVENTORY_OBJECTS[701]
                    });
                }
            }
        }

        if (objectInfo === DIALOGUE[243] || objectInfo === DIALOGUE[244] || objectInfo === DIALOGUE[245] || objectInfo === DIALOGUE[246] || objectInfo === DIALOGUE[247] || objectInfo === DIALOGUE[248] || objectInfo === DIALOGUE[249] || objectInfo === DIALOGUE[250] ){
            objectInfo = DIALOGUE[242] 
        }

        if (objectInfo === DIALOGUE[82]){
            //Si l'objet n'a pas ??t?? ajout?? on l'ajoute
               if (!checkAlreadyExist(inventory, 704)){
                   dispatch({
                    type: INVENTORY_ADD_ACTION,
                    payload: INVENTORY_OBJECTS[704]
                    });
                }
        }

        if(objectInfo === DIALOGUE[147] || objectInfo === DIALOGUE[148]){          
            if(checkAlreadyExist(inventory, 702)){
                if(checkAlreadyExist(inventory, 200) && checkAlreadyExist(inventory, 201) && checkAlreadyExist(inventory, 202)){
                    objectInfo=DIALOGUE[152];
                }else{
                    objectInfo=DIALOGUE[151];
                }
            }else if(checkAlreadyExist(inventory, 703)){
                objectInfo=DIALOGUE[153];
            }else /*if(checkAlreadyExist(inventory, 82))*/{
                objectInfo=DIALOGUE[148];
            }
        }
                
        if (objectInfo === DIALOGUE[200] && !checkAlreadyExist(inventory, 200)){
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[200]
            });
        } else if (objectInfo === DIALOGUE[201] && !checkAlreadyExist(inventory, 201)){
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[201]
            });
        } else if (objectInfo === DIALOGUE[202] && !checkAlreadyExist(inventory, 202)){
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[202]
            });
        }

        //Ici on v??rifie si le slivres ont ??t?? lus ou non
        if(objectInfo === DIALOGUE[203] && checkAlreadyExist(inventory, 200) && checkAlreadyExist(inventory, 201) && checkAlreadyExist(inventory, 202)){
            //S'ils ont ??t?? lus, le dialogue du tableau change
            objectInfo = DIALOGUE[204]
        }

        const dialogues = objectInfo.description;
        const currentDialogue = dialogues[indexDialogue];
        const isLastDialogue = currentDialogue.yes.next==null;
        const noAvailable = currentDialogue.no!==null;
        const otherAvailable = currentDialogue.other!==null;

        if(objectInfo === DIALOGUE[148]){
            return(
            <div className='tools-panel' id='interaction'>
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                <p>{currentDialogue.text}</p>
                <div>
                    {isLastDialogue ? (
                        <button onClick={() => dispatch({
                            type: PLAYING,
                            payload: {
                                playing: true,
                            }
                        }) &&
                        closeDialog()
                        
                    }>{currentDialogue.yes.text}</button>
                    ) : (
                        <>
                            <button onClick={() => setIndexDialogue(currentDialogue.yes.next)}>{currentDialogue.yes.text}</button>
                            {noAvailable && <button onClick={() => setIndexDialogue(currentDialogue.no.next)}>{currentDialogue.no.text}</button>}
                            {otherAvailable && <button onClick={() => setIndexDialogue(currentDialogue.other.next)}>{currentDialogue.other.text}</button>}
                        </>
                    )}
                </div>
            </div>
        );    
        }
        return(
            <div className='tools-panel' id='interaction'>
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                <p>{currentDialogue.text}</p>
                <div>
                    {isLastDialogue ? (
                        <button onClick={() => closeDialog()}>{currentDialogue.yes.text}</button>
                    ) : (
                        <>
                            <button onClick={() => setIndexDialogue(currentDialogue.yes.next)}>{currentDialogue.yes.text}</button>
                            {noAvailable && <button onClick={() => setIndexDialogue(currentDialogue.no.next)}>{currentDialogue.no.text}</button>}
                            {otherAvailable && <button onClick={() => setIndexDialogue(currentDialogue.other.next)}>{currentDialogue.other.text}</button>}
                        </>
                    )}
                </div>
            </div>
        );
    } else if(typeObject==='fontaine') {
        const srcS3L = `s3c${contenu3L}.png`;
        const srcS5L = `s5c${contenu5L}.png`;
        return(
            // besoin d'utiliser sass pour modifier dynamiquement le CSS ?
            <div className='tools-panel' id='interaction'>
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                <div id="mainContainer" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <p>Vous disposez de 2 seaux, de contenance 3 et 5 litres. Avec pour seules
                    possibilit??s de les remplir avec l'eau de la fontaine, de les vider, ou
                    de transvaser le contenu de l'un dans l'autre, il vous faut obtenir un
                    seau de 4 litres exactement. <br></br> Bonne chance.</p>
                    <div className="seaux">
                        <div className="seau" id="3">
                            <div className="seau-details">
                                <p>{contenu3L}L / 3L</p>
                                <img src={sceaux[srcS3L].default} alt="Seau de 3 litres"></img>
                            </div>
                            <div className="seau-button">
                                <button onClick={() => {
                                    if (contenu3L + contenu5L > 5) {
                                        if (!(contenu5L === 5)) {
                                            var tmp = 5 - contenu5L;
                                            setContenu5L(contenu5L + tmp);
                                            setContenu3L(contenu3L - tmp);
                                        }
                                    }
                                    else {
                                        setContenu5L(contenu3L + contenu5L);
                                        setContenu3L(0);
                                    }
                                }}>Transvaser ???</button>
                                <button onClick={() => setContenu3L(3) }>Remplir</button>
                                <button onClick={() => setContenu3L(0)}>Vider</button>
                            </div>                        
                        </div>
                        <div className="seau" id="5">
                            <div className="seau-details">
                                <p>{contenu5L}L / 5L</p>
                                <img src={sceaux[srcS5L].default} alt="Seau de 5 litres"></img>
                            </div>
                            <div className="seau-button">
                                <button onClick={() => {
                                        if (contenu3L + contenu5L > 3) {
                                            if (!(contenu3L === 3)) {
                                                var tmp = 3 - contenu3L;
                                                setContenu3L(contenu3L + tmp);
                                                setContenu5L(contenu5L - tmp);
                                            }
                                        }
                                        else {
                                            setContenu3L(contenu3L + contenu5L);
                                            setContenu5L(0);
                                        }
                                    }}>Transvaser ???</button>
                                <button onClick={() => setContenu5L(5)}>Remplir</button>
                                <button onClick={() => setContenu5L(0)}>Vider</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button style={{color: "green"}} onClick={() => {
                            if(contenu5L===4) {
                                dispatch({
                                    type: INVENTORY_ADD_ACTION,
                                    payload: INVENTORY_OBJECTS[700]
                                });
                                setEnigmeSuccess(true);
                            }
                        }}>Valider</button>
                        <button style={{color: "red"}} onClick={() => closeDialog()}>Annuler</button>
                    </div>
                </div>
            </div>
        );
    } else if(typeObject==='miroir') {
        console.log(miroirs, objectdata, objectInfo);
        let actualOrientation = miroirs[objectInfo.ref].orientation;

        if(actualOrientation==='right') {
            actualOrientation='left';
        } else if(actualOrientation==='left') {
            actualOrientation='right';
        }

        closeDialog();
        dispatch({
            type: MIROIR_SET_ORIENTATION,
            payload: {
                id: objectInfo.ref,
                orientation: actualOrientation
            }
        });        
        
        return(
            <></>
        )
    } else {
        return(
            <div>

            </div>
        );
    } 
};

