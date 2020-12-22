import React from 'react';
import { connect } from 'react-redux';
import useKeyPress from '../../hooks/use-key-pressed';

export default function PopUpInteraction({interactneeded,interaction,dispatch}) {

    useKeyPress((e) => {
        if(e.key === 'm') {
            dispatch({
                type: 'SET',
                payload: {
                    interact: false,
                    id: 0,
                    name: '',
                    description: '',
                }
            });
        }
        e.preventDefault();
    });

    if(interaction.interact && interactneeded==="true") {
        return(
            <div className='interaction' id='interaction'
            style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '2px solid white',
            zIndex: '10',
            backgroundColor: 'black',
            width: '500px',
            maxWidth: '80%'
            }}
            >
            <p>cc c le panneau intéragir</p>
            <button             
                onClick={() => dispatch({
                    type: 'SET',
                    payload: {
                        interact: false,
                        id: 0,
                        name: '',
                        description: '',
                    }
                })}
            >&times;</button>
            </div>
        );
    } else {
        return <div></div>;
    }
}

function mapStateToProps(state) {
    return {interaction: state.interaction}
}

export const PopUpInteractionStore = connect(mapStateToProps)(PopUpInteraction)