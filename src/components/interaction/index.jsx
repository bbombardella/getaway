import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { INVENTORY_ADD_ACTION } from '../../config/const/settings';
import { INVENTORY_OBJECTS } from '../../config/const/inventory';
import { MAP_TILES } from '../../config/const/tiles';
import { DIALOGUE } from '../../config/const/dialogue';

export default function PopUpInteraction({closeDialog, objectdata}) {

    const dispatch = useDispatch();

    const [objectTaken, setObjectTaken] = useState(false);

    const typeObject = MAP_TILES[objectdata.id].type;
    var objectInfo;

    if(typeObject==='panneau') {
        objectInfo = DIALOGUE[objectdata.id];
    } else {
        objectInfo = INVENTORY_OBJECTS[objectdata.id];
    }

    const [indexDialogue, setIndexDialogue] = useState(0);

    const [contenu3L, setContenu3L] = useState(0);
    const [contenu5L, setContenu5L] = useState(0);

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

    if(typeObject==='objet' || typeObject==='coffre') {
        return(
            <div className='tools-panel' id='interaction'>
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                {objectTaken ? (
                    <>
                        {(typeObject==='coffre') ? (
                            <p>Bravo ! Vous possédez désormais la clé permettant d'ouvrir la prochaine porte !</p>
                        ) : (
                            <p>Bravo ! Vous possédez désormais l'objet "{objectdata.name}" !</p>
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

        const dialogues = objectInfo.description;
        const currentDialogue = dialogues[indexDialogue];
        const isLastDialogue = currentDialogue.yes.next==null;
        const noAvailable = currentDialogue.no!==null;

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
                        </>
                    )}
                </div>
            </div>
        );
    } else if(typeObject==='fontaine') {
        const srcS3L = `../assets/seaux/s3c${contenu3L}.png`;
        const srcS5L = `../assets/seaux/s5c${contenu5L}.png`;
        return(
            // besoin d'utiliser sass pour modifier dynamiquement le CSS ?
            <div className='tools-panel' id='interaction'>
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                <div id="mainContainer">
                    <p>
                    Vous disposez de 2 seaux, de contenance 3 et 5 litres. Avec pour seules
                    possibilités de les remplir avec l'eau de la fontaine, de les vider, ou
                    de transvaser le contenu de l'un dans l'autre, il vous faut obtenir un
                    seau de 4 litres exactement. <br></br> Bonne chance.
                    </p>
                    <p>{contenu3L}L / 3L</p>
                    <p>{contenu5L}L / 5L</p>
                    <img src={srcS3L} alt="Seau de 3 litres"></img>
                    <img src={srcS5L} alt="Seau de 5 litres"></img>
                    <div /*boutons pour transvaser*/>
                        <button onClick={
                            () => {
                                if (contenu3L + contenu5L > 5) {
                                    if (!(contenu5L == 5)) {
                                        var tmp = 5 - contenu3L;
                                        setContenu5L(contenu5L + tmp);
                                        setContenu3L(contenu3L - tmp);
                                    }
                                }
                                else {
                                    setContenu5L(contenu3L + contenu5L);
                                    setContenu3L(0);
                                }
                            }
                        }>Transvaser →</button>
                        <button onClick={
                            () => {
                                if (contenu3L + contenu5L > 3) {
                                    if (!(contenu3L == 3)) {
                                        var tmp = contenu5L - 3;
                                        setContenu3L(contenu3L + tmp);
                                        setContenu5L(contenu5L - tmp);
                                    }
                                }
                                else {
                                    setContenu3L(contenu3L + contenu5L);
                                    setContenu5L(0);
                                }
                            }
                        }>Transvaser ←</button>
                    </div>
                    <div /*boutons pour remplir*/>
                        <button onClick={
                            () => {
                                setContenu3L(3);}
                            }>Remplir</button>
                        <button onClick={
                            () => {
                                setContenu5L(5);}
                            }>Remplir</button>
                    </div>
                    <div /*boutons pour vider*/>
                        <button onClick={
                            () => {
                                setContenu3L(0);}
                        }>Vider</button>
                        <button onClick={
                            () => {
                                setContenu5L(0);}
                        }>Vider</button>
                    </div>
                    <div>
                        <button style={{color: "green"}} /*onClick={fonction qui gère validation de l'énigme,
                        c'est-à-dire l'obtention des bottes d'Hermès ssi un des deux seaux contient 4L}*/>Valider</button>
                        <button style={{color: "red"}} onClick={() => closeDialog()}>Annuler</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div>

            </div>
        );
    } 
}