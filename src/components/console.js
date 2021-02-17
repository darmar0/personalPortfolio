import React, { useState, useEffect } from "react";
import Works from "./works.js";
import About from "./about.js";
import Contact from "./contact.js";
import Intro from "./intro.js";
import FirstSection from "./FirstSection.js";
import SecondSection from "./SecondSection.js";
import ThirdSection from "./ThirdSection.js";
import ForthSection from "./ForthSection.js";

const Console = ({ sendName, responsive }) => {
  const [name, setName] = useState("");
  const [index, nextIndex] = useState(0);
  const [respond, setRespond] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [containerHeight, setHeight] = useState(0);
  useEffect(() => {
    const height = document.getElementById("content").clientHeight + document.getElementById("console").clientHeight;
    setHeight(height);
    responsive(containerHeight);
  });
  const saveName = (input) => {
    let firstLetterUperCase = input.split("")[0].toUpperCase();
    let updatedInput = input.split("");
    updatedInput.splice(0, 1, firstLetterUperCase);
    setName(updatedInput.join(""));
    nextIndex(index + 1);
    sendName(updatedInput.join(""));
  };

  const reciveResponse = (input) => {
    setRespond([...respond, input.toUpperCase()]);

    nextIndex(index + 1);
  };
  const saveQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };
  const style = { marginTop: parseInt("-" + containerHeight) };

  return (
    <>
      <div className="row mt-3">
        <div id="content" className="col-12 content">
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
      </div>
      <div className="row">
        <div id="console" className="col-12  mt-4 consoleWrap">
          {index === 0 ? <Intro saveName={saveName} saveQuestion={saveQuestion} style={style} /> : null}
          {index === 1 ? (
            <FirstSection
              name={name}
              reciveResponse={reciveResponse}
              saveQuestion={saveQuestion}
              questions={questions}
              style={style}
            />
          ) : null}
          {index === 2 ? (
            <SecondSection
              name={name}
              reciveResponse={reciveResponse}
              saveQuestion={saveQuestion}
              questions={questions}
              style={style}
            />
          ) : null}
          {index === 3 ? (
            <ThirdSection
              name={name}
              reciveResponse={reciveResponse}
              saveQuestion={saveQuestion}
              questions={questions}
              style={style}
            />
          ) : null}
          {index === 4 ? <ForthSection name={name} questions={questions} style={style} /> : null}
        </div>
      </div>
    </>
  );
};

export default Console;
