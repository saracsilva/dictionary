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
    <div className=" flex w-screen  h-full flex-col gap-6 items-center">
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
      <div className=" flex flex-col   md:grid  md:grid-cols-7 h-full w-screen border-t-[1px] border-solid border-dark-blue">
        <div className="text-xl flex w-screen justify-center md:justify-end md:justify-self-end  py-3  border-b-[1px] text-center md:col-span-2 bg-none md:border-r-[1px] md:border-b-0  md:pr-8 md:pt-8 border-solid border-dark-blue">
          Noun
        </div>
        <div className="md:col-span-5 flex flex-col pt-8 md:pl-8 items-center md:items-start ">
          <p className=" font-roboto">
            <strong>Try</strong> it again:
          </p>
          <form
            className="relative flex align-center border border-dark-blue rounded-full w-5/6 md:w-3/5 h-14  "
            onSubmit={handleSearch}
          >
            <input
              type="text"
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
    </div>
  );
}

export default Sorry;
