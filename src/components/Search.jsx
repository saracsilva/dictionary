import React from "react";
import play from "../assets/play_icon.svg";

function Search() {
  return (
    <>
      <div className="grid grid-cols-5  justify-items-center items-center">
        <div className="col-start-2 text-9xl col-span-2">Search</div>
        <div className="col-start-4 flex justify-between   text-xl py-3 px-10 border border-solid border-dark-blue rounded-full gap-5">
          <img src={play} alt="icon play" className="w-5" />
          <p> /sɜːt͡ʃ/</p>
        </div>
      </div>
      <div className="flex justify-center">
        <form>
          <input
            type="search"
            placeholder="Search"
            className="focus:ring-indigo-500 "
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
}

export default Search;
