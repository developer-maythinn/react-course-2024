import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    console.log("videoRef", videoRef);
    console.log("current", videoRef.current);
    videoRef.current.play();
  };

  const pauseVideo = () => {
    console.log("pauses")
    console.log("videoRef", videoRef);
    console.log("current", videoRef.current);
    videoRef.current.pause();
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="400"
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
