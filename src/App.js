import React from "react";
import News from "./components/News/News";
import TvProgram from "./components/TvProgram/TvProgram";
import Air from "./components/Air/Air";
import FrequentlyVisited from "./components/FrequentlyVisited/FrequentlyVisited";
import Weather from "./components/Weather/Weather";
import Markets from "./components/Markets/Markets";

import "./App.css";

function App() {
  return (
    <div className="App">
      <News />
      <TvProgram />
      <Air />
      <FrequentlyVisited />
      <Weather />
      <Markets />
    </div>
  );
}

export default App;
