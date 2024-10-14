import React, { useCallback, useState } from "react";

// useCallback(function, Dependency);

const functionsCount = new Set();
function Counter() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const otherIncrement = useCallback(() => {
    setOtherCount(otherCount + 1);
  }, [otherCount]);

  functionsCount.add(increment);
  functionsCount.add(decrement);
  functionsCount.add(otherIncrement);
  console.log(functionsCount);
  return (
    <>
      {count}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      {otherCount}
      <br />
      <button onClick={otherIncrement}>Increase</button>
    </>
  );
}

export default Counter;
