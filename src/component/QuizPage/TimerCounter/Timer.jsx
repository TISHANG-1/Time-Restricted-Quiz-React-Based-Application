import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";
// this code is taken from open react-component npm libraries
const minuteSeconds = 60;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => (time / minuteSeconds) | 0;

export default function Timer({isRunning , setIsRunning}) {
  const currentTime = Date.now() / 1000; // Current UNIX timestamp in seconds
  const duration = 15 * minuteSeconds; // 15 minutes in seconds
  const endTime = currentTime + duration;
   
  
  return (
    <div className="Timer">
      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={duration}
        initialRemainingTime={duration}
        onComplete={() => {
            setIsRunning(0); // Set the timerEnded flag to true when the timer completes
            return {
              shouldRepeat: false
            };
          }}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(duration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={minuteSeconds}
        onComplete={() => ({
          shouldRepeat: true && isRunning
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
