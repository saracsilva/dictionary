import React from "react";
import play from "../assets/play_icon.svg";

function Phonetic({ audio, text }) {
  if (text) {
    return (
      <div className="col-start-4 flex justify-between   text-xl py-3 px-10 border border-solid border-dark-blue rounded-full gap-5">
        {audio && (
          <a href={audio}>
            <img src={play} alt="icon play" className="w-5" />
          </a>
        )}

        <p> {text}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetic;
