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
    console.log(containerHeight);
    const height = (window.innerHeight - containerHeight) / 2.8;
    setHeight(height);
  };
  const style = {
    marginTop: contentHeight,
  };
  console.log(contentHeight);
  return (
    <div className="container">
      <div style={style} className="console">
        <Console sendName={sendName} responsive={responsive} />
      </div>
    </div>
  );
};

export default App;
