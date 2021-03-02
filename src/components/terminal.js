import React, { useState, useEffect } from "react";

const Terminal = () => {
  const [session, setSession] = useState();
  const [userID, setId] = useState();

  useEffect(() => {
    const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    setSession(randomNum(1001, 9999) + "S" + randomNum(101, 999));
    setId(randomNum(1001, 9999) + "U" + randomNum(101, 999));
  }, []);

  return (
    <div className="terminal-text">
      <p>
        DARMAR version 0.1.1<br></br> <br></br>session: {session} <br></br>user id: {userID}
        <br></br>
        duration:<br></br>
      </p>
    </div>
  );
};

export default Terminal;
