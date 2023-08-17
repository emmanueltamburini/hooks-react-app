import { useCallback, useState } from "react";
import { Son } from "./Son";

export const Father = () => {

  const numbers = [2,4,6,8,10];
  const [value, setValue] = useState(0);

  const increment = useCallback(
    (num: number) => {setValue(currentValue => currentValue + num)},
    [],
  )
  
  return (
    <div>
        <h1>Father</h1>
        <p>Total: {value}</p>

        <hr />

        {numbers.map(number => (<Son key={number} increment={increment} number={number}/>))}
    </div>
  )
}
