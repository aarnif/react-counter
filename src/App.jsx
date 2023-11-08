import "./App.css";
import { useEffect, useState } from "react";
import dataService from "./services/data";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Fetch data from database when page first loads
    dataService.get().then((data) => {
      setCount(data.value);
      console.log("Previous count value fetched!");
    });
  }, []);

  useEffect(() => {
    // Update database only after 500ms has passed from previous click or when page first loads
    const updateDataTimeout = setTimeout(async () => {
      await dataService.update(count);
      console.log("Count value saved to database!");
    }, 500);

    return () => clearTimeout(updateDataTimeout);
  }, [count]);

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
    <Counter
      count={count}
      increaseCount={increaseCount}
      decreaseCount={decreaseCount}
      resetCount={resetCount}
    />
  );
}

export default App;
