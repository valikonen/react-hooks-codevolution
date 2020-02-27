import React, {useContext} from 'react';
import { CountContext } from '../App';

export default function ComponentA() {

    const countContext = useContext(CountContext);

    return(
        <div>
            <p>Component a: {countContext.countState} {JSON.stringify(countContext)} </p>
            <button onClick={() => countContext.countDispatch('INCREMENT')}>Add</button>
            <button onClick={() => countContext.countDispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('RESET')}>Reset</button>
        </div>
    )
}