import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.scss";
import SettingsButton from "../SettingsButton/SettingsButton";
import playTimer from "../../assets/images/playBtn.png";
import pauseTimer from "../../assets/images/pause.png";
import { useContext, useEffect, useRef, useState } from "react";
import SettingsContext from "../SettingsContext/SettingsContext";

const red = "#f54e4e";
const green = "#4aec8c";

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); 
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  //This code is setting up a timer that counts down from 60 seconds. Every time the timer ticks, the secondsLeftRef.current value is decremented by 1. The setSecondsLeft function is then used to update the SecondsLeft state with the new value.

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  // This code is using the useEffect hook to set up an interval that will call the tick function every second using modeRef and secondsLeftRef to keep track of the mode and seconds left.

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds) * 100;

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (
    <>
      <div className="pomodoro-timer">
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            textColor: "#fff",
            textSize: "15px",
            pathColor: mode === "work" ? red : green,
            trailColor: "rgba(255,255,255,.2)",
          })}
        />
        ;
      </div>
      {isPaused ? (
        <div
          onClick={() => {
            setIsPaused(false);
            isPausedRef.current = false;
          }}
        >
          <img src={playTimer} className="timer-button--play" alt="pause" />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        >
          <img src={pauseTimer} className="timer-button--pause" alt="play" />
        </div>
      )}
      <div>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </>
  );
};

export default Timer;
