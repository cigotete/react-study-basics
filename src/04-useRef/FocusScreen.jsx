import { useRef } from 'react';

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    //document.querySelector('input').select();
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        type="text"
        placeholder="Your name"
        className="form-control"
      />

      <button
        className="btn btn-primary mt-3"
        onClick={ onClick }
      >
        Focus
      </button>
    </>
  )
}
