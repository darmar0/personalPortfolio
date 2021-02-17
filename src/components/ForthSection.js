import React from "react";

const ForthSection = ({ name, questions, style }) => {
  return (
    <>
      <div style={{ marginTop: style.marginTop - 40 }} className="history">
        <div className="text-area">
          <p>{questions[questions.length - 1]}</p>
        </div>
      </div>
      <div className="text-area">
        <p> {name}, thank you for visiting my website. I hope you enjoyed.</p>
      </div>
    </>
  );
};

export default ForthSection;
