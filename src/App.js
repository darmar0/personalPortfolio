import React, { useState, useEffect } from "react";
import Console from "./components/console.js";
import Terminal from "./components/terminal.js";
export const NameContext = React.createContext();

const App = () => {
  const [contentHeight, setHeight] = useState();

  const responsive = (containerHeight) => {
    console.log(containerHeight);
    const height = containerHeight < 110 ? "25%" : "8%";
    setHeight(height);
  };
  const style = {
    marginTop: contentHeight,
  };

  return (
    <div className="container">
      <div style={style} className="console">
        <Console responsive={responsive} />
      </div>
    </div>
  );
};

export default App;
