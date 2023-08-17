import React from "react";

interface Props {
    increment: (value: number) => void
}
export const ShowIncrement = React.memo(({increment}: Props) => {
  console.log('ShowIncrement render');
  return (
    <button
        className='btn btn-primary'
        onClick={() => {increment(5)}}
    >
        Increment
    </button>
  )
})