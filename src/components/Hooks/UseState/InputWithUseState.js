import React, { useState } from "react";

function InputWithUseState() {
  const [inputText, setInputText] = useState("");
  
  function handleChange(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  return (
    <>
      <input type="text" onChange={handleChange} value={inputText} />
      <p>{inputText}</p>
      <button onClick={() => setInputText("")}>Reset</button>
    </>
  );
}

export default InputWithUseState;
