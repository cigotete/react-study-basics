import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      () => {
        setCounter( (value) => value + 1 );
      },
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
    
    // This function will change every time is trigger (change memory position), so React.memo won't work
    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }


    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    )
}