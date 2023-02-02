import React from "react";

function Title({ title }) {
  return (
    <div className="col-start-2 text-4xl font-black sm:text-6xl  md:text-9xl col-span-2">
      {title}
    </div>
  );
}

export default Title;
