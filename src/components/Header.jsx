import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-5 flex justify-between">
      <Link to="/search">
        my<span className="font-black">Dictionary</span>
      </Link>
      <Link to="/search">
        Try another <span className="font-black">Word</span>
      </Link>
    </div>
  );
}

export default Header;
