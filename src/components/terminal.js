import React, { useState } from "react";

const Terminal = ({ name }) => {
  const [time, setTime] = useState(0);

  return (
    <>
      {" "}
      <p>{window.innerWidth + "x" + window.innerHeight}</p>
    </>
  );
};

export default Terminal;
