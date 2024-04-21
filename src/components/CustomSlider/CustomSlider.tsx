import React, { useState, useRef, useEffect } from "react";

const CustomSlider = () => {
  const sliderTrackRef: any = useRef(null);
  const sliderHandleRef: any = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (isDragging) {
        const sliderRect = sliderTrackRef.current.getBoundingClientRect();
        let newPosition =
          ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
        newPosition = Math.max(0, Math.min(100, newPosition)); // Ensure position is within bounds
        sliderHandleRef.current.style.left = `${newPosition}%`;
        updateSliderValue(newPosition);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const updateSliderValue = (position: any) => {
    const value = Math.round(position);
    setSliderValue(value);
  };

  return (
    <div className="slider-container">
      <div className="slider-track" ref={sliderTrackRef}>
        <div
          className="slider-handle"
          ref={sliderHandleRef}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
};

export default CustomSlider;
