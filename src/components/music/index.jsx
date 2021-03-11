import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

export default function Music({ mute, volume }) {

    const world = useSelector(state => ({
        world: state.world
    }));

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