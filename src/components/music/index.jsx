import React from 'react';

export default function music (url){
    return (
        <figure>
        <figcaption>Listen to the music</figcaption>
        <audio
            controls
            src="Monplaisir - Soundtrack.mp3">
                Your browser does not support the
                <code>audio</code> element.
        </audio>
        </figure>
    )
}