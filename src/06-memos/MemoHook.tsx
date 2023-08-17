import { useMemo, useState } from 'react';
import { useCounter } from "../hooks"

export const MemoHook = () => {
  const {counter, increment} = useCounter(4000);
  const [show, setShow] = useState(true);

  const heavyStuff = (iteration: number = 100) => {
    for (let i = 0; i < iteration; i++) {
        console.log('=== MemoHook.tsx [10] ===', iteration);        
    }

    return `${iteration} iterations performed    `
  }

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);


  return (
    <>
        <h1>
            Counter: <small>{counter}</small>
        </h1>
        <hr />
        <h4>{memorizedValue}</h4>

        <button
            className="btn btn-primary"
            onClick={() => increment()}
        >
            +1
        </button>

        <button
            className="btn btn-primary"
            onClick={() => setShow(!show)}
        >
            {show ? 'Show' : 'Hide'}
        </button>
    </>
  )
}
