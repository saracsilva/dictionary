import React, { useState } from "react";

import Phonetic from "./Phonetic";
import Title from "./Title";

function Search({ setSearch }) {
  //state
  const [keyWord, setKeyWord] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(keyWord);
  };
  const handleQuery = (event) => {
    setKeyWord(event.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-5  justify-items-center items-center">
        <Title title="Search" />

        <Phonetic
          audio="https://api.dictionaryapi.dev/media/pronunciations/en/search-us.mp3"
          text="/sɜːt͡ʃ/"
        />
      </div>
      <div className="flex  w-1/4 self-center justify-center ">
        <form
          className="relative flex align-center border border-dark-blue rounded-full "
          onSubmit={handleSearch}
        >
          <input
            type="search"
            placeholder="Search"
            onChange={handleQuery}
            className=" block pl-7 pr-12 bg-medium-grey/0 w-full "
          ></input>{" "}
          <div className="absolute inset-y-0 right-0 flex items-center pr-5">
            <input type="submit"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
