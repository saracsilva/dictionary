import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import svgBackground from "./assets/background_shape.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SearchWord from "./components/SearchWord";
import { useNavigate } from "react-router-dom";
import Sorry from "./pages/Sorry";

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.length > 0) {
      navigate(`/${search}`);
      setSearch("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <div className="app flex flex-col  content-center  ">
      <Header />
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              className="w-5/6 mx-auto"
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path="/:searchWord"
          element={<SearchWord search={search} setSearch={setSearch} />}
        />
        <Route path="/sorry" element={<Sorry />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <img
        src={svgBackground}
        alt="background"
        className="absolute right-[25%] top-[25%] blur-3xl  opacity-25 -z-1   w-1/5 "
      />
    </div>
  );
}

export default App;
