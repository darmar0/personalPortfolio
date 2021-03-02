import React, { useState, useEffect } from "react";
import Works from "./works.js";
import About from "./about.js";
import Contact from "./contact.js";
import Intro from "./intro.js";
import FirstSection from "./FirstSection.js";
import SecondSection from "./SecondSection.js";
import ThirdSection from "./ThirdSection.js";
import ForthSection from "./ForthSection.js";

const Console = ({ responsive, t0 }) => {
  const [name, setName] = useState("");
  const [index, nextIndex] = useState(0);
  const [respond, setRespond] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [containerHeight, setHeight] = useState(0);
  const [start, setStart] = useState([]);
  useEffect(() => {
    const millis = new Date().getTime();
    const time = new Date().toLocaleTimeString();
    setStart([...start, millis, time]);
  }, []);

  useEffect(() => {
    const consoleHeight = document.getElementById("console").clientHeight;
    const contentHeight = document.getElementById("content").clientHeight;
    const height = consoleHeight + contentHeight;

    setHeight(height);

    responsive(containerHeight);
  });

  const saveName = (input) => {
    let firstLetterUperCase = input.split("")[0].toUpperCase();
    let updatedInput = input.split("");
    updatedInput.splice(0, 1, firstLetterUperCase);
    setName(updatedInput.join(""));
    nextIndex(index + 1);
  };

  const reciveResponse = (input) => {
    setRespond([...respond, input.toUpperCase()]);

    nextIndex(index + 1);
  };
  const saveQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <>
      <div className="history">
        <div className="text-area">
          <p>{questions[questions.length - 1]}</p>
        </div>
      </div>
      <div id="content" className="content">
        {index > 1 && index !== 0 ? (
          <hr
            style={{
              border: "1px solid black",
              width: "100%",
            }}
          />
        ) : null}
        {respond[index - 2] === "YES" && !respond[index - 3] ? <Works /> : null}
        {respond[index - 3] === "YES" && !respond[index - 4] ? <About /> : null}
        {respond[index - 4] === "YES" && !respond[index - 5] ? <Contact /> : null}
        {index > 1 && index !== 0 ? (
          <hr
            style={{
              border: "1px solid black",
              width: "100%",
            }}
          />
        ) : null}
      </div>

      <div id="console" className="consoleWrap">
        {index === 0 ? <Intro saveName={saveName} saveQuestion={saveQuestion} /> : null}
        {index === 1 ? <FirstSection name={name} reciveResponse={reciveResponse} saveQuestion={saveQuestion} /> : null}
        {index === 2 ? <SecondSection name={name} reciveResponse={reciveResponse} saveQuestion={saveQuestion} /> : null}
        {index === 3 ? <ThirdSection name={name} reciveResponse={reciveResponse} saveQuestion={saveQuestion} /> : null}
        {index === 4 ? <ForthSection name={name} start={start} /> : null}
      </div>
    </>
  );
};

export default Console;
