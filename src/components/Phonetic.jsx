import React, { useRef } from "react";
import play from "../assets/play_icon.svg";

function Phonetic({ audio, text }) {
  //reference
  const audioPlayer = useRef();
  //functions
  const playBtn = () => {
    audioPlayer.current.play();
  };
  if (text) {
    return (
      <div className="col-start-4 flex align-center text-base md:text-xl py-3 px-4 md:px-10 border border-solid border-dark-blue rounded-full gap-5">
        {audio && (
          <>
            <div className="flex align-center ">
              <audio ref={audioPlayer} src={audio} preload="metadata" />

              <button
                onClick={playBtn}
                className="hover:scale-[115%] duration-200"
              >
                <img
                  src={play}
                  alt="icon play"
                  className=" min-w-[20px] md:w-5"
                />
              </button>
            </div>
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
