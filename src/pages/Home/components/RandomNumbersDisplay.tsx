import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const RandomNumbersContainer = styled.div`
  position: absolute;
  bottom: 100px;
  right: 100px;
  width: 200px;
  height: 200px;
  font-family: monospace;
  color: rgba(255, 255, 255, 50%);
  font-size: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  animation: ${keyframes`from{opacity: 0;}to{opacity: 1;}`} 2s ease-in-out;
  @media (max-width: 768px) {
    display: none;
  }
`;

function RandomNumbersDisplay() {
  const [numbers, setNumbers] = useState<{ [key: string]: string }>({
    ox: "",
    oz: "",
    fp1: "",
    fp2: "",
  });

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100000000)
      .toString()
      .padStart(8, "0");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumbers = {
        ox: generateRandomNumber(),
        oz: generateRandomNumber(),
        fp1: generateRandomNumber(),
        fp2: generateRandomNumber(),
      };
      setNumbers(newNumbers);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <RandomNumbersContainer>
      <div>OX: {numbers.ox}</div>
      <div>OZ: {numbers.oz}</div>
      <div>FP1: {numbers.fp1}</div>
      <div>FP2: {numbers.fp2}</div>
    </RandomNumbersContainer>
  );
}

export default RandomNumbersDisplay;
