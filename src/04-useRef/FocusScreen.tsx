import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    inputRef.current?.select();
  };

  return (
    <div>
        <h1>Focus Screen</h1>
        <hr />

        <input
            ref={inputRef}
            type="text"
            placeholder="Add your name"
            className="form-control"
        />

        <button
            onClick={onClick}
            className="btn btn-primary mt-2"
        >
            Set focus
        </button>
    </div>
  )
}
