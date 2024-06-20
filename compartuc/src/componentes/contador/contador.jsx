import React, { useState, useEffect } from 'react';
import './styleContador.css'

export function Contador() {
    const initialTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    const calculateTimeLeft = (targetTime) => {
        const now = new Date().getTime();
        const difference = targetTime - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [targetTime] = useState(new Date().getTime() + initialTime);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetTime]);

    const formatTime = (time) => {
        return String(time).padStart(2, '0');
    };

    return (
        <div>
            <div className='contador'>
                <div className='contadorDiv me-3'>
                    <h6 className='horasLetras'>Horas</h6>
                    <h4 className='numeros'> {formatTime(timeLeft.hours)}</h4>
                </div>
                <div className='contadorDiv me-3'>
                    <h6 className='horasLetras'>Minutos</h6>
                    <h4 className='numeros'><b className='dosP'>:</b> {formatTime(timeLeft.minutes)}</h4>
                </div>
                <div className='contadorDiv me-3'>
                    <h6 className='horasLetras'>Segundos</h6>
                    <h4 className='numeros'><b className='dosP'>:</b> {formatTime(timeLeft.seconds)}</h4>
                </div>
            </div>
        </div>
    );
}
