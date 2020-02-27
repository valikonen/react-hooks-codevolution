import React, {useReducer} from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
            
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return initialState
        default: 
            return state
    }
}

export default function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return(
        <div>
            <p>Count: {count} </p>
            <button onClick={() => dispatch('INCREMENT')}>Add</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>

            <p>Count: {count2} </p>
            <button onClick={() => dispatch2('INCREMENT')}>Add</button>
            <button onClick={() => dispatch2('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch2('RESET')}>Reset</button>
        </div>
    )
}
