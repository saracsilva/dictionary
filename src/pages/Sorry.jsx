import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Phonetic from "../components/Phonetic";
import Title from "../components/Title";

function Sorry({ setSearch }) {
  const { state } = useLocation();
  const { search } = state;
  // state
  const [keyWord, setKeyWord] = useState("");
  //functions
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(keyWord);
  };
  const handleQuery = (event) => {
    setKeyWord(event.target.value);
  };

  return (
    <div className=" flex flex-col gap-6 items-center">
      <div className="flex flex-col md:flex-row gap-6  md:gap-36 items-center">
        <Title title="Sorry" />

        <Phonetic
          audio="https://api.dictionaryapi.dev/media/pronunciations/en/sorry-ca.mp3"
          text="/ˈsɔɹi/"
        />
      </div>
      <p>
        No results for{" "}
        <strong>
          <em> "{search}"</em>
        </strong>
      </p>
      <div className="flex flex-col w-4/5 self-center justify-center ">
        <p className=" font-roboto">
          <strong>Try</strong> it again:
        </p>
        <form
          className="relative flex align-center border border-dark-blue rounded-full w-full h-14  "
          onSubmit={handleSearch}
        >
          <input
            type="search"
            placeholder="Search"
            onChange={handleQuery}
            className=" block pl-7 pr-12 bg-medium-grey/0 w-full focus:rounded-full "
          ></input>{" "}
          <div className="absolute inset-y-0 right-12 flex items-center ">
            <input
              type="submit"
              className=" cursor-pointer hover:font-black duration-200 font-roboto"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sorry;
