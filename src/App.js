import React, { useState, useEffect } from "react";
import Console from "./components/console.js";
import Terminal from "./components/terminal.js";
export const NameContext = React.createContext();

const App = () => {
  const [contentHeight, setHeight] = useState();

  const responsive = (containerHeight) => {
    const height =
      window.innerWidth > 500
        ? (window.innerHeight - containerHeight) / 2.8
        : containerHeight > 300
        ? (window.innerHeight - containerHeight) / 1.5
        : (window.innerHeight - containerHeight) / 2.2;
    setHeight(height);
  };
  const style = {
    marginTop: contentHeight * (100 / window.innerHeight) + "vh",
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
