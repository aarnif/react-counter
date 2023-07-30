import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <main>
      <div>Counter: {count}</div>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </main>
  );
};

export default Counter;
