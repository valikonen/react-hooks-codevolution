import {useState} from 'react';

const useCounter = (initialValue = 0) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + initialValue);
    }
    const decrement = () => {
        setCount(count => count - initialValue);
    }
    const reset = () => {
        setCount(initialValue);
    }

    return [count, increment, decrement, reset];

}

export default useCounter;
