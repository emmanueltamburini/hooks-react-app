import { useLayoutEffect, useRef, useState } from "react";

interface Props {
    quote: string;
    author: string;
}
export const Quote = ({author, quote}: Props) => {

  const pRef = useRef<HTMLInputElement | null>(null);

  const [boxSize, setBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    if (pRef.current) {
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height});
    }
  }, [quote]);

  return (
    <>
        <blockquote
            style={{display: 'flex'}}
            className="blockquote text-end"
        >
            <p ref={pRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
