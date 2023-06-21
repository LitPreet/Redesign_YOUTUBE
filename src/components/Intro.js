import React from "react";
import Video from "../images/youtube.mp4";
const Intro = () => {
  return (
    <div className="intro-container h-[100vh] overflow-hidden">
      <video autoPlay muted className="w-full h-full object-cover">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
