import React, {useReducer} from 'react';

const initialState = {
    count: 0, 
    name: "Zorba"
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const addState = {
                ...initialState,
                count: state.count + action.value
            }
            return addState;
            
        case 'DECREMENT':
            let minState = {
                ...initialState,
                count: state.count - action.value
            }
            return minState;
        case 'RESET':
            return {
                ...initialState,
                count: action.value
            }
        default: 
            return state
    }
}

export default function CounterTwo() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <p>Count: {state.count}, all state {JSON.stringify(state)} </p>
            <button onClick={() => dispatch( {type: 'INCREMENT', value: 2} )}>Add</button>
            <button onClick={() => dispatch( {type: 'DECREMENT', value: 2} )}>Decrement</button>
            <button onClick={() => dispatch( {type: 'RESET', value: initialState.count} )}>Reset</button>
        </div>
    )
}
