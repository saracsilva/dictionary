import React, { useRef } from "react";
import play from "../assets/play_icon.svg";

function Sorry({ search }) {
  // reference
  const audioPlayer = useRef();
  const playBtn = () => {
    audioPlayer.current.play();
  };

  return (
    <>
      <div className="grid grid-cols-5  justify-items-center items-center">
        <div className="col-start-2 text-9xl col-span-2">Sorry</div>
        <div className="col-start-4 flex justify-between   text-xl py-3 px-10 border border-solid border-dark-blue rounded-full gap-5">
          <div>
            <audio
              ref={audioPlayer}
              src="https://api.dictionaryapi.dev/media/pronunciations/en/sorry-ca.mp3"
              preload="metadata"
            />
          </div>
          <button
            onClick={playBtn}
            className=" hover:scale-[115%] duration-200"
          >
            <img src={play} alt="icon play" className="w-5" />
          </button>
          <p> /ˈsɔɹi/</p>
        </div>
      </div>
      <p>No results for "{search}"</p>
    </>
  );
}

export default Sorry;
