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
    const height = (window.innerHeight - containerHeight) / 2.5;
    setHeight(height);
  };
  const style = {
    paddingTop: contentHeight,
  };
  console.log();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 "></div>
        <div style={style} className="col-lg-4  console">
          <Console sendName={sendName} responsive={responsive} />
        </div>
      </div>
    </div>
  );
};

export default App;
