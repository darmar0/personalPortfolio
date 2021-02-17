import React, { useState, useEffect, useRef } from "react";

const Intro = ({ saveName, saveQuestion }) => {
  const textInput = useRef(null);
  const [input, setInput] = useState("");
  const [inputWidth, setStyle] = useState(0);
  useEffect(() => {
    while (inputWidth < 50) {
      const intervalId = setInterval(() => setStyle(inputWidth + 2), 10);
      return () => clearInterval(intervalId);
    }
    textInput.current.focus();
  });
  const question = "Hello. My name is Darijan. What’s your name?";
  const saveInput = () => {
    saveName(input);
    saveQuestion(question);
    setInput("");
  };
  const style = { width: inputWidth + "%" };
  return (
    <>
      <div className="text-area">
        <p>{question}</p>
      </div>

      <input
        style={style}
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
  );
};

export default Intro;
