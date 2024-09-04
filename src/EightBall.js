import React, { useState } from 'react';

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const getRandomAnswer = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    return answers[randomIdx];
  };

  const handleClick = () => {
    const { msg: newMsg, color: newColor } = getRandomAnswer();
    setMsg(newMsg); 
    setColor(newColor); 
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: "white",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <b>{msg}</b>
    </div>
  );
}

export default EightBall;
