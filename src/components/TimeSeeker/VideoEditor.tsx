import React, { useRef, useState } from "react";
import "./time.css"; // Import your CSS file for styling
import TimeSeeker from "./TimeSeeker";
import { Input } from "../ui/input";

const VideoEditor = () => {
  const videoRef: any = useRef(null);
  const inputRef: any = useRef(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleTrim = () => {
    const video: any = videoRef.current;
    video.currentTime = startTime;
    video.play();
    video.addEventListener("timeupdate", handleTimeUpdate);
  };

  const handleTimeUpdate = () => {
    const video: any = videoRef.current;
    if (video.currentTime >= endTime) {
      video.pause();
      video.removeEventListener("timeupdate", handleTimeUpdate);
    }
  };

  const handlePreview = () => {
    const video: any = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx: any = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL: any = canvas.toDataURL("image/jpeg");
    setPreviewUrl(dataURL);
  };

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    const url: any = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  return (
    <div className="video-editor">
      {!previewUrl && (
        <div className="grid w-full text-center items-center gap-1.5">
          <Input
            id="picture"
            ref={inputRef}
            accept="video/*"
            onChange={handleUpload}
            type="file"
            className="w-full"
          />
        </div>
      )}

      {previewUrl && (
        <div className="video-wrapper w-full">
          <TimeSeeker
            duration={videoRef?.current?.duration}
            startTime={startTime}
            endTime={endTime}
            onStartTimeChange={setStartTime}
            onEndTimeChange={setEndTime}
          />
        </div>
      )}
    </div>
  );
};

export default VideoEditor;
