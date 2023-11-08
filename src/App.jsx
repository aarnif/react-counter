import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  iniatilizeState,
  incrementValue,
  decrementValue,
  resetValue,
  updateValue,
} from "./reducers/counter";
import Counter from "./components/Counter";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(iniatilizeState());
  }, []);

  useEffect(() => {
    // Update database only after 500ms has passed from previous click or when page first loads
    const updateDataWithTimeout = setTimeout(async () => {
      dispatch(updateValue(count));
    }, 500);
    return () => clearTimeout(updateDataWithTimeout);
  }, [count]);

  const increaseCount = () => {
    dispatch(incrementValue(count));
  };

  const decreaseCount = () => {
    dispatch(decrementValue(count));
  };

  const resetCount = () => {
    dispatch(resetValue(count));
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
