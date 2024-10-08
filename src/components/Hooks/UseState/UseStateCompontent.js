import React, { useState } from "react";

function UseStateCompontent() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const handleMode = () => {
    setDarkModeOn((prev) => !prev);
  };
  return (
    <>
      {console.log(darkModeOn)}
      <button onClick={handleMode}>Change Mode</button>
      <div>{darkModeOn ? "Dark Mode" : "Light Mode"}</div>
    </>
  );
}

export default UseStateCompontent;
