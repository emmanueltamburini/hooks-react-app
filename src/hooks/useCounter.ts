import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);
  
  const increment = (value: number = 1) => {
    setCounter(counter + value);
  }

  const reset = () => {
    setCounter(initialValue);
  }

  const decrease = (value: number = 1) => {
    if (counter === 0) {
        return;
    }
    setCounter(counter - value);
  }

  return {counter, increment, reset, decrease};
}
