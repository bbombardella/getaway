import React from 'react';

export default function Sprite({ image, data, position }) {
    const { x, y, w, h } = data;

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