
import React, { useState, useEffect } from "react";
import "./GameControls.css";

function GameControls({ level, onPause, onResume, isPaused }) {
  const [time, setTime] = useState(300); 
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePauseResume = () => {
    isPaused ? onResume() : onPause();
  };

  return (
    <div className="game-controls">
      <div className="level">Level: {level}</div>
      <div className={`timer ${time < 60 ? "warning" : ""}`}>
        Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <button onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
}

export default GameControls;