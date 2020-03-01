import React from 'react';
import useCounter from './useCounter';

const CounterOne = () => {

    const [count, increment, decrement, reset] = useCounter(10);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default CounterOne;
