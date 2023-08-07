import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHookApp = () => {
  const {counter, increment, decrease, reset} = useCounter();
  return (
        <>
            <h1>Counter with custom hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => decrease()}>-1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
        </>
    )
}
