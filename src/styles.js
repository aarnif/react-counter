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
  font-size: 100px;
  margin-bottom: 40px;
`;

export const CounterHeader = styled(LoadingHeader)`
  animation: ${transform} 300ms ease-in-out;
  font-family: "Russo One", sans-serif;
  letter-spacing: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 240px;
  height: 70px;
  margin: 10px;
  font-size: 36px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 20px;
  font-weight: 700;
  text-shadow: 1px 1px 1px #000000;
  &:active {
    transform: scale(0.95);
    transition: transform 100ms ease-in-out;
  }
`;

export const IncrementButton = styled(Button)`
  background-color: #16a34a;
  &:hover {
    background-color: #166534;
    border: 1px solid #38bdf8;
  }
`;

export const DecrementButton = styled(Button)`
  background-color: #dc2626;
  &:hover {
    background-color: #991b1b;
    border: 1px solid #38bdf8;
  }
`;

export const ResetButton = styled(Button)`
  background-color: #ca8a04;
  &:hover {
    background-color: #854d0e;
    border: 1px solid #38bdf8;
  }
`;
