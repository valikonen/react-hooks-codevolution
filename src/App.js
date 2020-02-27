import React from 'react';
import './App.css';


import CounterThree  from './useReducer/CounterThree';

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  return (
    <div className="App">
      
      {/* <UserContext.Provider value={"Zorro"}>
        <AgeContext.Provider value={39}>
          <ComponentA />
        </AgeContext.Provider>
      </UserContext.Provider> */}

      <CounterThree />

    </div>
  );
}

export default App;
