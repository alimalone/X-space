import React from "react";
import videospace from "../video/video.mp4";
import "../css/video.scss";

export default function Video() {
  return (
    <header className="videoTop">
      <div className="video">
        <video src={videospace} autoplay="true" className="video"></video>
      </div>
    </header>
  );
}
