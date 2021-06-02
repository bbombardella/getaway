import React from 'react';
import logo from '../../assets/start/get_away.png';
import background from '../../assets/start/start_background.jpg';
import start from '../../assets/start/start.png';

export default function Start({ nextButton }) {
    return (
        <div className="start" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            objectFit: 'contain',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        }} onClick={() => nextButton({
            'start': false,
            'intro': true,
        })}>
            <img src={logo} alt="GetAway" style={{
                width: '50%'
            }} />
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5em"
            }}>
                <img src={start} alt="Start" style={{
                    width: "10%"
                }} />
                <p style={{
                    padding: "0.5em",
                    backgroundColor: "rgb(0,0,0,0.75)"
                }}>Pour commencer, appuyez sur l'écran</p>
            </div>
        </div>
    );
}