import React, { useState } from "react";

function SimpleUseState() {
  const [word, setWord] = useState("World");
  const changeWord = () => setWord("React");
  return (
    <>
      <h1>Hello {word}</h1>
      <button onClick={changeWord}>Click</button>
    </>
  );
}

export default SimpleUseState;
