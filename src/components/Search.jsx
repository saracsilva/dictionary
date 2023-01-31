import React, { useState } from "react";
import play from "../assets/play_icon.svg";

function Search({ setSearch }) {
  const [keyWord, setKeyWord] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(keyWord);
    console.log(keyWord);
  };
  const handleQuery = (event) => {
    setKeyWord(event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-5  justify-items-center items-center">
        <div className="col-start-2 text-9xl col-span-2">Search</div>
        <div className="col-start-4 flex justify-between   text-xl py-3 px-10 border border-solid border-dark-blue rounded-full gap-5">
          <img src={play} alt="icon play" className="w-5" />
          <p> /sɜːt͡ʃ/</p>
        </div>
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
