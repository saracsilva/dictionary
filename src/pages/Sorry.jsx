import React from "react";

import Phonetic from "../components/Phonetic";
import Title from "../components/Title";

function Sorry({ search }) {
  // reference

  return (
    <>
      <div className="grid grid-cols-5  justify-items-center items-center">
        <Title title="Sorry" />

        <Phonetic
          audio="https://api.dictionaryapi.dev/media/pronunciations/en/sorry-ca.mp3"
          text="/ˈsɔɹi/"
        />
      </div>
      <p>No results for "{search}"</p>
    </>
  );
}

export default Sorry;
