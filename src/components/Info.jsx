import React from "react";

function Info({ data }) {
  return (
    <div className=" flex flex-col   md:grid  md:grid-cols-7 h-full w-screen border-t-[1px] border-solid border-dark-blue">
      <div className="text-xl  font-black flex w-screen justify-center md:justify-end md:justify-self-end  py-3  border-b-[1px] text-center md:col-span-2 bg-none md:border-r-[1px] md:border-b-0  md:pr-8 md:pt-8 border-solid border-dark-blue">
        {data.partOfSpeech.charAt(0).toUpperCase() + data.partOfSpeech.slice(1)}
      </div>
      <div className="md:col-span-5 flex flex-col py-8 md:pl-8 items-center md:items-start ">
        <ul>
          <p className=" text-xl pb-4">Definitions:</p>
          {data.definitions.map((definition, index) => (
            <div key={index} className="flex pb-3 flex-col">
              <li className="flex ">
                <strong className=" font-roboto">{index + 1}. </strong>
                <p className=" font-roboto"> {definition.definition}</p>
              </li>
              {definition.example && (
                <p className=" font-roboto text-sm  text-light-blue ">
                  e.g. <em>{definition.example}</em>
                </p>
              )}
            </div>
          ))}
          {data.synonyms.length > 0 && (
            <>
              <p className=" text-xl pb-4">Synonyms</p>{" "}
              {data.synonyms.map((value, index, array) => {
                if (index + 1 === array.length) {
                  return (
                    <span key={index} className="font-roboto">
                      <em>{value} </em>
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="font-roboto">
                      <em>{value}, </em>
                    </span>
                  );
                }
              })}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Info;
