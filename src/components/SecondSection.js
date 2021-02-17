import React, { useState, useEffect, useRef } from "react";

const SecondSection = ({ reciveResponse, name, saveQuestion, questions, style }) => {
  const textInput = useRef(null);
  const [input, setInput] = useState("");
  const [negative, setNegative] = useState(0);
  useEffect(() => {
    if (negative < 2) {
      textInput.current.focus();
    }
  });
  const question = [
    "Do you want to know something more about me?",
    "" + name + ", I would really like to tell you more about me. Can I?",
    "That's ok  " + name + ", thank you for visiting my website.",
  ];
  const saveInput = () => {
    if (input === "yes") {
      reciveResponse(input);
    } else if (input === "no") {
      setNegative(negative + 1);
    } else {
      return null;
    }
    setInput("");
    saveQuestion(question[negative]);
  };
  return (
    <>
      {negative < 1 ? (
        <>
          <div style={style} className="history">
            <div className="text-area">
              <p>{questions[questions.length - 1]}</p>
            </div>
          </div>
          <div className="text-area">
            <p> {question[0]}</p>
          </div>
          <input
            ref={textInput}
            type="text"
            className="console-input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyPress={(event) => (event.key === "Enter" ? saveInput() : null)}
          ></input>
          {input.length >= 1 ? (
            <span className="submit" onClick={saveInput}>
              {"["}Submit{"]"}
            </span>
          ) : null}
        </>
      ) : negative === 1 ? (
        <>
          <div style={style} className="history">
            <div className="text-area">
              <p>{questions[questions.length - 1]}</p>
            </div>
          </div>
          <div className="text-area">
            <p> {question[1]}</p>
          </div>

          <input
            ref={textInput}
            type="text"
            className="console-input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyPress={(event) => (event.key === "Enter" ? saveInput() : null)}
          ></input>
          {input.length >= 1 ? (
            <span className="submit" onClick={saveInput}>
              {"["}Submit{"]"}
            </span>
          ) : null}
        </>
      ) : (
        <>
          <div style={style} className="history">
            <div className="text-area">
              <p>{questions[questions.length - 1]}</p>
            </div>
          </div>
          <div className="text-area">
            <p> {question[2]}</p>
          </div>
        </>
      )}
    </>
  );
};

export default SecondSection;
