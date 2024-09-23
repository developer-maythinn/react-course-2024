import React from "react";
import { useInput } from "./UseInputHook";

function CustomHook() {
  const [name, handleChange] = useInput("");
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <p>{name}</p>
    </>
  );
}

export default CustomHook;
