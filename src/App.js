import React, { useReducer } from 'react';
import './App.css';

import ComponentA from './useReduce_with_useContext/componentA';
import ComponentB from './useReduce_with_useContext/componentB';
import ComponentC from './useReduce_with_useContext/componentC';

import DataFetchingTwo from './useReduce_with_useContext/DataFetchingTwo';

import Parent from './useCallback/Parent';
import CounterMemo from './useMemo/CounterMemo';


import InputFocus from './useRef/InputFocus';
import ClassTimer from './useRef/ClassTimer';
import HookTimer from './useRef/HookTimer';


import DocTitle from './customHooks/DocTitle';
import CounterOne from './customHooks/CounterOne';
import CounterTwo from './customHooks/CounterTwo';


import UserForm from './customHooks/UserForm';


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

      {/* <CounterMemo /> */}

      {/* <InputFocus /> */}

      {/* <ClassTimer /> */}

      {/* <HookTimer /> */}

      {/* <DocTitle /> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}

      <UserForm />

    </div>
  );
}

export default App;
