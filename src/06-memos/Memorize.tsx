import { useState } from 'react';
import { useCounter } from "../hooks"
import { Small } from './Small';

export const Memorize = () => {
  const {counter, increment} = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
        <h1>
            Counter: <Small counter={counter} />
        </h1>
        <hr />

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
