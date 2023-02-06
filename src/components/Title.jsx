import React from "react";
import Phonetic from "./Phonetic";

function Title({ title, audio, text }) {
  return (
    <div className="flex">
      {title.length > 10 && (
        <div className="text-4xl font-black sm:text-6xl  md:text-7xl md: col-span-2">
          {title}
        </div>
      )}
      {title.length > 6 && title.length < 10 && (
        <div className="text-6xl font-black sm:text-6xl  md:text-8xl md: col-span-2">
          {title}
        </div>
      )}

      {title.length <= 6 && (
        <div className="text-6xl font-black sm:text-6xl  md:text-9xl md: col-span-2">
          {title}
        </div>
      )}
      <Phonetic audio={audio} text={text} />
    </div>
  );
}

export default Title;
