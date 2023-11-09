import { styled, keyframes } from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  bottom: 300px;
`;

const transform = keyframes`
  0% {transform: scale(1.0);}
  50% {transform: scale(1.5);}
  100% {transform: scale(1.0);}
`;

export const LoadingHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  min-height: 80px;
`;

export const CounterHeader = styled(LoadingHeader)`
  animation: ${transform} 300ms ease-in-out;
`;

export const ButtonsContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 160px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 20px;
  &:active {
    transform: scale(0.9);
    transition: transform 100ms ease-in-out;
  }
`;

export const IncrementButton = styled(Button)`
  background-color: green;
  &:hover {
    background-color: darkgreen;
  }
`;

export const DecrementButton = styled(Button)`
  background-color: red;
  &:hover {
    background-color: darkred;
  }
`;

export const ResetButton = styled(Button)`
  background-color: orange;
  &:hover {
    background-color: rgb(139, 64, 0);
  }
`;
