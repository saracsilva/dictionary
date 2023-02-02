import React from "react";

import Phonetic from "./Phonetic";
import Title from "./Title";

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
        <Title title={data.word} />
        <div className="col-start-4 ">
          {data.phonetics.map((phonetic, index) => {
            return (
              <div className=" p-3 " key={index}>
                <Phonetic audio={phonetic.audio} text={phonetic.text} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchWord;
