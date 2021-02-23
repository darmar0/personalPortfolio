import React, { useState, useEffect } from "react";
import Console from "./components/console.js";
import Terminal from "./components/terminal.js";
export const NameContext = React.createContext();

const App = () => {
  const [name, setName] = useState();
  const [contentHeight, setHeight] = useState();
  const sendName = (newName) => {
    setName(newName);
  };

  const responsive = (containerHeight) => {
    const height = window.innerWidth > 500 ? (window.innerHeight - containerHeight) / 2.8 : (window.innerHeight - containerHeight) / 2;
    setHeight(height);
  };
  const style = {
    marginTop: contentHeight,
  };

  return (
    <div className="container">
      <div style={style} className="console">
        <Console sendName={sendName} responsive={responsive} />
      </div>
    </div>
  );
};

export default App;
