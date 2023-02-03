import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-5 ">
      <Link to="/search">
        my<span className="font-black">Dictionary</span>
      </Link>
    </div>
  );
}

export default Header;
