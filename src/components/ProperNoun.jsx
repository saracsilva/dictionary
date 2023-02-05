import React from "react";

function ProperNoun({ properNoun }) {
  return (
    <div className=" flex flex-col   md:grid  md:grid-cols-7 h-full w-screen border-t-[1px] border-solid border-dark-blue">
      <div className="text-xl flex w-screen justify-center md:justify-end md:justify-self-end  py-3  border-b-[1px] text-center md:col-span-2 bg-none md:border-r-[1px] md:border-b-0  md:pr-8 md:pt-8 border-solid border-dark-blue">
        {properNoun.partOfSpeech.charAt(0).toUpperCase() +
          properNoun.partOfSpeech.slice(1)}
      </div>
      <div className="md:col-span-5 flex flex-col pt-8 md:pl-8 items-center md:items-start ">
        <ul>
          <p className=" text-xl pb-4">Definitions:</p>
          {properNoun.definitions.map((definition, index) => (
            <li key={index} className="flex pb-3">
              <strong className=" font-roboto">{index + 1}. </strong>
              <p className=" font-roboto"> {definition.definition}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProperNoun;
