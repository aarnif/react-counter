import { createSlice } from "@reduxjs/toolkit";
import counterService from "../services/counter";

const initialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue(state, action) {
      return action.payload;
    },
    increment(state, action) {
      return state + 1;
    },
    decrement(state, action) {
      return state > 0 ? state - 1 : state;
    },
    reset(state, action) {
      return 0;
    },
  },
});

export const { setValue, increment, decrement, reset } = counterSlice.actions;

export const iniatilizeState = () => {
  return async (dispatch) => {
    const count = await counterService.get();
    console.log(`Fetched database with value: ${count.value}`);
    dispatch(setValue(count.value));
  };
};

export const incrementValue = (count) => {
  return async (dispatch) => {
    dispatch(increment(count));
  };
};

export const decrementValue = (count) => {
  return async (dispatch) => {
    dispatch(decrement(count));
  };
};

export const resetValue = (count) => {
  return async (dispatch) => {
    dispatch(reset(count));
  };
};

export const updateValue = (count) => {
  return async (dispatch) => {
    await counterService.update(count);
    console.log(`Updated database with value: ${count}`);
  };
};

export default counterSlice.reducer;
