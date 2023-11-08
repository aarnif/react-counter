import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import {
  MainContainer,
  LoadingHeader,
  CounterHeader,
  ButtonsContainer,
  Button,
} from "../styles";
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
    <MainContainer>
      {/* Add count-variable as a key to make the styled component animation work in every render */}
      {count !== null ? (
        <CounterHeader key={count}>{count}</CounterHeader>
      ) : (
        <LoadingHeader>
          <FontAwesomeIcon
            icon={faCircleNotch}
            spin
            style={{ color: "#ffffff" }}
          />
        </LoadingHeader>
      )}
      <ButtonsContainer>
        <Button onClick={increaseCount}>Increment</Button>
        <Button onClick={decreaseCount}>Decrement</Button>
        <Button onClick={resetCount}>Reset</Button>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default Counter;
