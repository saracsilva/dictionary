import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import svgBackground from "./assets/background_shape.svg";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  if (search.length > 0) {
    console.log("test", search);
  }
  return (
    <div className="app flex flex-col  content-center  ">
      <Header />
      <Search className="w-5/6 mx-auto" search={search} setSearch={setSearch} />

      <img
        src={svgBackground}
        alt="background"
        className="blur-3xl  opacity-50 -z-1   w-1/5 "
      />
    </div>
  );
}

export default App;
