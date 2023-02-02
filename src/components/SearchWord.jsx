import React from "react";

import Phonetic from "./Phonetic";

function SearchWord({ data }) {
  /* const parsedPhonetic = () => {
    const phoneticArr = [];
    const sound = data.phonetics.map((phonetic) => {
      if (phonetic.audio && phonetic.text) {
        phoneticArr.push(phonetic);
      }
    });
    if (phoneticArr.length > 0) {
      return phoneticArr.map((phonetic, index) => (
        <Phonetic key={index} audio={phonetic.audio} text={phonetic.text} />
      ));
    } else {
      console.log(data);
      return <Phonetic text={data.phonetic.text} />
    }
  }; */

  return (
    <>
      <div className="grid grid-cols-5  justify-items-center items-center">
        <div className="col-start-2 text-9xl col-span-2">{data.word}</div>
        {data.phonetics.map((phonetic, index) => {
          return (
            <Phonetic key={index} audio={phonetic.audio} text={phonetic.text} />
          );
        })}
      </div>
    </>
  );
}

export default SearchWord;
