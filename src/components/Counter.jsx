import "./Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementValue,
  decrementValue,
  resetValue,
} from "../reducers/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseCount = () => dispatch(incrementValue(count));
  const decreaseCount = () => dispatch(decrementValue(count));
  const resetCount = () => dispatch(resetValue(count));

  return (
    <main className="main-content">
      <h1 className="count">
        {count !== null ? (
          count
        ) : (
          <FontAwesomeIcon
            icon={faCircleNotch}
            spin
            style={{ color: "#ffffff" }}
          />
        )}
      </h1>
      <div className="buttons">
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </main>
  );
};

export default Counter;
