import React from 'react';
import { useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

export default function Music({ mute, volume }) {

    const { world } = useSelector(state => ({
        world: state.world
    }));

    console.log(world);

    if (world === "3" || world === "13" || world === "14") {
        return (
            <ReactAudioPlayer
                src="./assets/music/castle.mp3"
                autoPlay
                volume={parseFloat(volume)}
                loop
                muted={mute}
            />
        )
    } else {
        return (
            <ReactAudioPlayer
                src="./assets/music/monplaisir.mp3"
                autoPlay
                volume={parseFloat(volume)}
                loop
                muted={mute}
            />
        )
    }
}