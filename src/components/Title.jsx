import React from "react";
import Phonetic from "./Phonetic";

function Title({ title, audio, text }) {
  return (
    <div className="flex">
      <div className="text-6xl font-black sm:text-6xl  md:text-9xl col-span-2">
        {title}
      </div>
      <Phonetic audio={audio} text={text} />
    </div>
  );
}

export default Title;
