import React, { useState, useEffect } from "react";

const ForthSection = ({ name, start }) => {
  const [end, setEnd] = useState([]);
  const [session, setSession] = useState();
  const [userID, setId] = useState();

  useEffect(() => {
    const millis = new Date().getTime();
    const time = new Date().toLocaleTimeString();
    setEnd([...end, millis, time]);
    const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    setSession(randomNum(1001, 9999) + "S" + randomNum(101, 999));
    setId(randomNum(1001, 9999) + "U" + randomNum(101, 999));
  }, []);

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const duration = millisToMinutesAndSeconds(end[0] - start[0]);

  return (
    <>
      <div className="text-area">
        <p> {name}, thank you for visiting. I hope you enjoyed.</p>
        <div className="last-container">
          <div className="box-1">
            <p>SESSION: {session}</p>
            <p>USER ID: {userID}</p>
          </div>
          <div className="box-2">
            <p> START TIME: {start[1]}</p>
            <p>END TIME: {end[1]}</p>
            <p> DURATION: {duration}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForthSection;
