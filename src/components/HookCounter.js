import React, {useState} from 'react';

function HookCounter(){

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevValue => prevValue + 1);
    }

    return(
        <button onClick={increment}>{counter}</button>
    )
}

export default HookCounter;