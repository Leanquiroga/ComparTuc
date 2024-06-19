import React, { useState, useEffect } from 'react';

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
    }

    return timeLeft;
  };

  const [targetTime, setTargetTime] = useState(new Date().getTime() + initialTime);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <h1>Countdown Timer</h1>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}
