import React from 'react';

interface Props {
    counter: number
}

export const Small = React.memo(({counter}: Props) => {
  console.log('Small is rendering')
  return (
    <small>{counter}</small>
  )
})
