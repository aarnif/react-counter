import { styled, keyframes } from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  bottom: 300px;
`;

const transform = keyframes`
  0% {transform: scale(1.0); color: rgba(255, 255, 255, 0.87);}
  50% {transform: scale(1.5); color: white;}
  100% {transform: scale(1.0); color: rgba(255, 255, 255, 0.87);}
`;

export const LoadingHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  min-height: 80px;
`;

export const CounterHeader = styled(LoadingHeader)`
  animation: ${transform} 300ms ease-in-out;
  font-family: "Russo One", sans-serif;
  letter-spacing: 5px;
`;

export const ButtonsContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 180px;
  height: 60px;
  font-size: 28px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 20px;
  font-weight: 700;
  &:active {
    transform: scale(0.9);
    transition: transform 100ms ease-in-out;
  }
`;

export const IncrementButton = styled(Button)`
  background-color: rgba(0, 128, 0, 0.8);
  &:hover {
    background-color: darkgreen;
    border: 1px solid skyblue;
  }
`;

export const DecrementButton = styled(Button)`
  background-color: rgba(255, 0, 0, 0.8);
  &:hover {
    background-color: darkred;
    border: 1px solid skyblue;
  }
`;

export const ResetButton = styled(Button)`
  background-color: rgb(255, 165, 0, 0.8);
  &:hover {
    background-color: rgb(139, 64, 0);
    border: 1px solid skyblue;
  }
`;
