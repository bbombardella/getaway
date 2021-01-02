import React from 'react';

export default function Music (url){
    return (
        <figure>
        <figcaption>Écoutez de la musique :</figcaption>
        <audio
            controls
            src="./assets/music/monplaisir.mp3">
                Your browser does not support the
                <code>audio</code> element.
        </audio>
        </figure>
    )
}