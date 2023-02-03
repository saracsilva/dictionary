import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import svgBackground from "./assets/background_shape.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
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
    <div className="app flex flex-col content-center   ">
      <Header />{" "}
      <div className="flex flex-col  z-10 content-center items-center ">
        <Routes>
          <Route
            path="/search"
            element={
              <Search
                className=" mx-auto "
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="/:searchWord" element={<SearchWord />} />
          <Route path="/sorry" element={<Sorry setSearch={setSearch} />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <div className="absolute bottom-2 ">
          <Link
            to="https://github.com/saracsilva/dictionary"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-bold"
          >
            {" "}
            Open-Source code
          </Link>
          , by{" "}
          <Link
            to="https://www.linkedin.com/in/sara-carolina-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-bold"
          >
            Sara Silva{" "}
          </Link>
        </div>
      </div>
      <img
        src={svgBackground}
        alt="background"
        className="absolute right-[25%] top-[25%] blur-3xl  opacity-[40%] -z-1   w-1/5   "
      />
      {/* left-[50%] text-center translate-x-50 */}
    </div>
  );
}

export default App;
