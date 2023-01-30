import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import svgBackground from "./assets/background_shape.svg";

function App() {
  return (
    <div className="app flex flex-col  content-center  ">
      <Header />
      <Search className="w-5/6 mx-auto" />

      <img
        src={svgBackground}
        alt="background"
        className="blur-3xl  opacity-50 -z-1   w-1/5 "
      />
    </div>
  );
}

export default App;
