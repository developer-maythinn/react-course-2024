import React, { useRef } from 'react';

function InputFocus() {
  // Create a reference using useRef
  const inputRef = useRef(null);

  const focusInput = () => {
    // Focus the input element when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
