import React, { useRef } from "react";
import play from "../assets/play_icon.svg";

function Phonetic({ audio, text }) {
  const audioPlayer = useRef();
  const playBtn = () => {
    audioPlayer.current.play();
  };
  if (text) {
    return (
      <div className="col-start-4 flex justify-between   text-xl py-3 px-10 border border-solid border-dark-blue rounded-full gap-5">
        {audio && (
          <>
            <div>
              <audio ref={audioPlayer} src={audio} preload="metadata" />
            </div>
            <button
              onClick={playBtn}
              className=" hover:scale-[115%] duration-200"
            >
              <img src={play} alt="icon play" className="w-5" />
            </button>
          </>
        )}

        <p> {text}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetic;
