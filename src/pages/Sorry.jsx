import React from "react";
import { useLocation } from "react-router-dom";

import Phonetic from "../components/Phonetic";
import Title from "../components/Title";

function Sorry() {
  const { state } = useLocation();
  const { search } = state;
  // reference

  return (
    <div className=" flex flex-col gap-6 items-center">
      <div className="flex flex-col md:flex-row gap-6  md:gap-36 items-center">
        <Title title="Sorry" />

        <Phonetic
          audio="https://api.dictionaryapi.dev/media/pronunciations/en/sorry-ca.mp3"
          text="/ˈsɔɹi/"
        />
      </div>
      <p>No results for "{search}"</p>
    </div>
  );
}

export default Sorry;
