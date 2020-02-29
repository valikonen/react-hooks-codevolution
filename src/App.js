import React, { useReducer } from 'react';
import './App.css';

import ComponentA from './useReduce_with_useContext/componentA';
import ComponentB from './useReduce_with_useContext/componentB';
import ComponentC from './useReduce_with_useContext/componentC';

import DataFetchingTwo from './useReduce_with_useContext/DataFetchingTwo';

import Parent from './useCallback/Parent';
import CounterMemo from './useMemo/CounterMemo';


export const UserContext = React.createContext();
export const AgeContext = React.createContext();



export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
      case 'INCREMENT':
          return state + 1;
          
      case 'DECREMENT':
          return state - 1;
      case 'RESET':
          return initialState;
      default: 
          return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      
      {/* <UserContext.Provider value={"Zorro"}>
        <AgeContext.Provider value={39}>
          <ComponentA />
        </AgeContext.Provider>
      </UserContext.Provider> */}

      {/* <CountContext.Provider value={ {countState: count, countDispatch: dispatch} }>
        <p>Count: {count}</p>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/* <DataFetchingTwo /> */}

      {/* <Parent /> */}

      <CounterMemo />

    </div>
  );
}

export default App;
