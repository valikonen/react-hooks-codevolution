import React, {useReducer} from 'react';

const initialState = {
    count: 0, 
    name: "Zorba"
};

const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            const addState = {
                ...initialState,
                count: state.count + 1
            }
            return addState;
            
        case 'DECREMENT':
            let minState = {
                ...initialState,
                count: state.count - 1
            }
            return minState;
        case 'RESET':
            return {
                ...initialState,
                count: initialState.count
            }
        default: 
            return state
    }
}

export default function CounterOne() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <p>Count: {state.count}, all state {JSON.stringify(state)} </p>
            <button onClick={() => dispatch('INCREMENT')}>Add</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}
