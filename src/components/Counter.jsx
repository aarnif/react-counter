import "./Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ count, increaseCount, decreaseCount, resetCount }) => {
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
