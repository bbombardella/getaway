import React from 'react';

export default function Sprite({ image, data, position, hidden }) {
    const { x, y, w, h } = data;

    if(hidden) {
        return(
            <div 
                style={{
                    height: `${h}px`,
                    width: `${w}px`,
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `-${x}px -${y}px`,
                    transition: 'left 0.3s linear 0s, top 0.3s linear 0s',
                    opacity: 0
                }}
            />
        );
    } else {
        return(
            <div 
                style={{
                    position: "absolute",
                    top: position.y,
                    left: position.x,
                    height: `${h}px`,
                    width: `${w}px`,
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `-${x}px -${y}px`,
                    transition: 'left 0.3s linear 0s, top 0.3s linear 0s',
                }}
            />
        );
    }
}