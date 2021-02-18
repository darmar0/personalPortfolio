import React, { useState, useEffect, useRef } from "react";

const ThirdSection = ({ reciveResponse, name, saveQuestion, questions, style }) => {
  const textInput = useRef(null);
  const [input, setInput] = useState("");
  const [negative, setNegative] = useState(0);
  useEffect(() => {
    if (negative < 1) {
      const timer = window.innerWidth < 500 ? setTimeout(() => textInput.current.focus(), 15000) : textInput.current.focus();
      return () => clearTimeout(timer);
    }
  });
  const question = [
    "Are you interested to stay in contact with me?",
    "That's ok " + name + " , you can always come back. Thank you for visiting my website.",
  ];
  const saveInput = () => {
    if (input.toUpperCase() === "YES") {
      reciveResponse(input);
    } else if (input.toUpperCase() === "NO") {
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
            <p>{question[1]}</p>
          </div>
        </>
      ) : (
        <>
          <div style={style} className="history">
            <div className="text-area">
              <p>{questions[questions.length - 1]}</p>
            </div>
          </div>
          <div className="text-area">
            <p>{question[2]}</p>
          </div>
        </>
      )}
    </>
  );
};

export default ThirdSection;
