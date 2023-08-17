import React from "react";

interface Props {
    number: number;
    increment: (value: number) => void
}

export const Son = React.memo(({increment, number}: Props) => {
  console.log('Son.tsx ',  number);
  return (
    <button
        className="btn btn-primary mr-3"
        onClick={() => increment(number)}
    >
        {number}
    </button>
  )
})
