import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import {
  MainContainer,
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
      <CounterHeader>
        {count !== null ? (
          count
        ) : (
          <FontAwesomeIcon
            icon={faCircleNotch}
            spin
            style={{ color: "#ffffff" }}
          />
        )}
      </CounterHeader>
      <ButtonsContainer>
        <Button onClick={increaseCount}>Increment</Button>
        <Button onClick={decreaseCount}>Decrement</Button>
        <Button onClick={resetCount}>Reset</Button>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default Counter;
