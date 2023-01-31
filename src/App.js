import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import svgBackground from "./assets/background_shape.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    const data = await response.data[0];
    console.log(data);
  };
  useEffect(() => {
    if (search.length > 0) {
      fetchData();
    }
  }, [search]);
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
