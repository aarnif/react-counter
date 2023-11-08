import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { iniatilizeState, updateValue } from "./reducers/counter";
import Counter from "./components/Counter";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

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

  return <Counter />;
}

export default App;
