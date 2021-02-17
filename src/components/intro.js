import React, { useState, useEffect, useRef } from "react";

const Intro = ({ saveName, saveQuestion }) => {
  const textInput = useRef(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    textInput.current.focus();
  });
  const question = "Hello. My name is Darijan. What’s your name?";
  const saveInput = () => {
    saveName(input);
    saveQuestion(question);
    setInput("");
  };

  return (
    <>
      <div className="text-area">
        <p>{question}</p>
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
  );
};

export default Intro;
