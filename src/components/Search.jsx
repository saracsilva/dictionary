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
    <div className="w-screen h-full flex flex-col gap-6 items-center">
      <div className="flex flex-col md:flex-row gap-6  md:gap-36 items-center">
        <Title className="col-start-2 " title="Search" />

        <Phonetic
          className="justify-items-center items-center"
          audio="https://api.dictionaryapi.dev/media/pronunciations/en/search-us.mp3"
          text="/sɜːt͡ʃ/"
        />
      </div>
      <div className=" flex flex-col   md:grid  md:grid-cols-7 h-full w-screen border-t-[1px] border-solid border-dark-blue">
        <div className="text-xl flex w-screen justify-center md:justify-end md:justify-self-end  py-3  border-b-[1px] text-center md:col-span-2 bg-none md:border-r-[1px] md:border-b-0  md:pr-8 md:pt-8 border-solid border-dark-blue">
          Noun
        </div>
        <div className="md:col-span-5 flex flex-col pt-8 md:pl-8 items-center md:items-start">
          <p className=" font-roboto">
            <strong>1.</strong> An attempt to find something.
          </p>
          <form
            className="relative flex align-center border border-dark-blue rounded-full w-5/6 md:w-3/5 h-14  "
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
    </div>
  );
}

export default Search;
