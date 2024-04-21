import React, { useRef, useState } from "react";
import "./time.css"; // Import your CSS file for styling

const TimeSeeker = ({ duration }: any) => {
  const seekerRef: any = useRef(null);
  const [currentTime, setCurrentTime] = useState(10000);

  const handleScrub = (e: any) => {
    console.log(e);

    const rect = seekerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = offsetX / rect.width;
    const newTime = duration * percentage;
    setCurrentTime(newTime);
    // Update video current time here using newTime
  };

  const formatTime = (timeInSeconds: any) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="time-seeker" ref={seekerRef} onMouseDown={handleScrub}>
      <div className="seeker-bar">
        <div
          className="seeker-fill"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      <div
        className="time-indicator"
        style={{ left: `${(currentTime / duration) * 100}%` }}
      >
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default TimeSeeker;
