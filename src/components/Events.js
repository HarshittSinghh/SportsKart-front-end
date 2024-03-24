import React from "react";
import video from "./IMG/soon.mp4";
import "./style.css";
const soon = () => {
  return (
    <>
      <div className="coming-soon">
        <video src={video} autoPlay muted loop></video>
        <div className="coming-soon-text">
          <h1>
            STAY TUNED FOR UPDATES
            <br />
            COMING SOON!
          </h1>
        </div>
      </div>
    </>
  );
};
export default soon;
