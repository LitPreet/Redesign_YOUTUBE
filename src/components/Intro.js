import React from "react";
import Video1 from "../images/Mobile.mp4";
const Intro = () => {
  return (
    <div className="intro-container h-[100vh] overflow-hidden">
      <video autoPlay muted className="w-full h-full object-cover">
        <source src={Video1} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
